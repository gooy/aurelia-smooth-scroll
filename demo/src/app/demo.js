import {bindable} from 'aurelia-framework';
import {SmoothScroll} from 'gooy/aurelia-smooth-scroll';

export class Demo{

  static inject = [Element,SmoothScroll];
  constructor(element,smoothScroll) {
    this.element = element;
    this.smoothScroll = smoothScroll;
  }

  attached(){
    setTimeout(()=>this.smoothScroll.scrollTo(window.location.hash),500);
  }

}
