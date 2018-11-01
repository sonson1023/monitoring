import Vue from 'vue';
import {getKR ,getEn} from '@/langs/langs.js';
import { getCookie, setCookie, checkCookie } from '../assets/common';
 
export const simplei18n = { 
  
  bind(el, binding, vnode) {

    var kr = getKR();
    var en = getEn();

    var type = el.getAttribute("data-type");     
    var cvalue = getCookie("lang");
    var key = cvalue + "." + type;

    var value = eval(key);
    el.innerText = value;
       
  }, 
}
export const SET_LANG = {
  
  bind(el, binding){
    el.addEventListener("click", function(evt, binding){
      // var kr = getKR();
      var type = this.getAttribute("data-type");     
      setCookie("lang", type, 1000);
      
      alert('Change to ' + type);

      window.location.reload();
    })
  }
 ,
  unbind: function(el, binding, vnode) {
    el.removeEventListener('click');
  }
}

// You can also make it available globally.
Vue.directive('simplei18n', simplei18n)
Vue.directive('SET_LANG', SET_LANG)