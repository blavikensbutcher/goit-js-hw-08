!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,r,u,a,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(i);function j(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(h,t),s?j(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function h(){var e=g();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function w(e){return f=void 0,p&&o?j(e):(o=r=void 0,a)}function T(){var e=g(),n=O(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(h,t),j(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=y(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(y(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?a:w(g())},T}function b(t){var i=void 0===t?"undefined":e(n)(t);return!!t&&("object"==i||"function"==i)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var i="function"==typeof t.valueOf?t.valueOf():t;t=b(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var l=u.test(t);return l||a.test(t)?f(t.slice(2),l?2:8):r.test(t)?NaN:+t}var j=e((function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})}))((function(e){h.email=O.email.value,h.message=O.message.value,localStorage.setItem(S,JSON.stringify(h))}),500),S="feedback-form-state",O=document.querySelector(".feedback-form");document.querySelector("button");O.addEventListener("input",j),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(h),localStorage.removeItem(S),O.reset()}));var h={};if(localStorage.getItem(S)){var w=JSON.parse(localStorage.getItem(S));w&&(O.email.value=w.email,O.message.value=w.message)}}();
//# sourceMappingURL=03-feedback.9236dcc0.js.map
