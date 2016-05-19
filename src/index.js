import {SmoothScroll} from "./smooth-scroll";
export {SmoothScroll} from "./smooth-scroll";

export function configure(aurelia,cb){
  aurelia.globalResources("./smooth-scroll");
  var config = SmoothScroll.defaultConfig;
  if(cb !== undefined && typeof(cb) === 'function') cb(config);
}
