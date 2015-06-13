import {bindable,noView,customAttribute} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {VelocityAnimator} from "gooy/aurelia-animator-velocity";

@customAttribute("smooth-scroll")
@noView
export class SmoothScroll{

  @bindable duration;
  @bindable easing;

  subs = [];

  static defaultConfig = {
    duration: 400,
    easing: "ease-in"
  };

  static inject = [Element,VelocityAnimator,Router];
  constructor(element,animator,router) {
    this.element = element;
    this.animator = animator;

    var config = SmoothScroll.defaultConfig;
    if(config.duration) this.duration = config.duration;
    if(config.easing) this.easing = config.easing;
  }

  attached(){
    var sub = this.onClick.bind(this);
    this.subs.push();
    this.element.addEventListener("click",sub);
  }

  detached(){
    if(this.subs) for(let sub of this.subs) sub();
  }

  onClick(event){
    event.preventDefault();
    this.scrollTo(this.element.getAttribute("href"),{},document.body);
    return false;
  }

  /**
   * Scroll to an element or named anchor
   *
   * @param elementOrHash   element to scroll to or named anchor
   * @param options         animator options
   * @param container       the container element (defaults to document.body)
   *
   * @returns {Promise} resolved when scrolling is done
   */
  scrollTo(elementOrHash,options={},container=document.body){

    console.log('scrollTo',elementOrHash);

    var target = elementOrHash;
    //find target by id or name
    if(typeof elementOrHash === "string"){
      var hash = elementOrHash;
      if(hash.indexOf("#")===0) hash = hash.slice(1,hash.length);
      target = container.querySelector(`[id="${hash}"]`);
      if(!target) container.querySelector(`[name="${hash}"]`);
    }

    if(history){
      history.pushState(null, null, '#'+hash);
    }else{
      //fallback to location.hash
      var t = container.scrollTop;
      location.hash = hash;
      container.scrollTop = t;
    }

    return this.animator.animate(target,"scroll",
      Object.assign({
        duration: this.duration,
        offset:SmoothScroll.getOffset(),
        easing:this.easing
      },options)
    );

  }

  static getOffset(){
    return - document.querySelector(".page-host").offsetTop;
  }

}
