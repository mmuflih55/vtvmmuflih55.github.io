(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{286:function(t,e,l){var content=l(296);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(12).default)("b9f570ac",content,!0,{sourceMap:!1})},287:function(t,e,l){"use strict";l.d(e,"a",function(){return n});l(10),l(7);var o=l(1);l(5),l(4),l(9);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,l)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}function n(){for(var t,e,l={},i=arguments.length;i--;)for(var o=0,r=Object.keys(arguments[i]);o<r.length;o++)switch(t=r[o]){case"class":case"style":case"directives":Array.isArray(l[t])||(l[t]=[]),l[t]=l[t].concat(arguments[i][t]);break;case"staticClass":if(!arguments[i][t])break;void 0===l[t]&&(l[t]=""),l[t]&&(l[t]+=" "),l[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":l[t]||(l[t]={});for(var n=l[t],c=0,m=Object.keys(arguments[i][t]||{});c<m.length;c++)n[e=m[c]]?n[e]=Array().concat(n[e],arguments[i][t][e]):n[e]=arguments[i][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":l[t]||(l[t]={}),l[t]=f({},arguments[i][t],{},l[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:l[t]||(l[t]=arguments[i][t])}return l}},289:function(t,e,l){var o=l(26);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},290:function(t,e,l){"use strict";l.d(e,"a",function(){return r});l(56),l(5),l(4),l(9);var o=l(0);function r(t){return o.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,l){var o=l.props,data=l.data,r=l.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var f=data.attrs;if(f){data.attrs={};var n=Object.keys(f).filter(function(t){if("slot"===t)return!1;var e=f[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e});n.length&&(data.staticClass+=" ".concat(n.join(" ")))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),e(o.tag,data,r)}})}},293:function(t,e,l){"use strict";var strong=l(294),o=l(289);t.exports=l(295)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=strong.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(o(this,"Map"),0===t?0:t,e)}},strong,!0)},294:function(t,e,l){"use strict";var o=l(30).f,r=l(97),f=l(159),n=l(46),c=l(157),m=l(158),d=l(114),x=l(161),h=l(115),w=l(22),v=l(113).fastKey,y=l(289),O=w?"_s":"size",_=function(t,e){var l,o=v(e);if("F"!==o)return t._i[o];for(l=t._f;l;l=l.n)if(l.k==e)return l};t.exports={getConstructor:function(t,e,l,d){var x=t(function(t,o){c(t,x,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[O]=0,null!=o&&m(o,l,t[d],t)});return f(x.prototype,{clear:function(){for(var t=y(this,e),data=t._i,l=t._f;l;l=l.n)l.r=!0,l.p&&(l.p=l.p.n=void 0),delete data[l.i];t._f=t._l=void 0,t[O]=0},delete:function(t){var l=y(this,e),o=_(l,t);if(o){var r=o.n,f=o.p;delete l._i[o.i],o.r=!0,f&&(f.n=r),r&&(r.p=f),l._f==o&&(l._f=r),l._l==o&&(l._l=f),l[O]--}return!!o},forEach:function(t){y(this,e);for(var l,o=n(t,arguments.length>1?arguments[1]:void 0,3);l=l?l.n:this._f;)for(o(l.v,l.k,this);l&&l.r;)l=l.p},has:function(t){return!!_(y(this,e),t)}}),w&&o(x.prototype,"size",{get:function(){return y(this,e)[O]}}),x},def:function(t,e,l){var o,r,f=_(t,e);return f?f.v=l:(t._l=f={i:r=v(e,!0),k:e,v:l,p:o=t._l,n:void 0,r:!1},t._f||(t._f=f),o&&(o.n=f),t[O]++,"F"!==r&&(t._i[r]=f)),t},getEntry:_,setStrong:function(t,e,l){d(t,e,function(t,l){this._t=y(t,e),this._k=l,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?x(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,x(1))},l?"entries":"values",!l,!0),h(e)}}},295:function(t,e,l){"use strict";var o=l(15),r=l(14),f=l(35),n=l(159),meta=l(113),c=l(158),m=l(157),d=l(26),x=l(27),h=l(116),w=l(71),v=l(117);t.exports=function(t,e,l,y,O,_){var j=o[t],k=j,S=O?"set":"add",P=k&&k.prototype,E={},C=function(t){var e=P[t];f(P,t,"delete"==t?function(a){return!(_&&!d(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(_&&!d(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return _&&!d(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof k&&(_||P.forEach&&!x(function(){(new k).entries().next()}))){var D=new k,N=D[S](_?{}:-0,1)!=D,M=x(function(){D.has(1)}),A=h(function(t){new k(t)}),F=!_&&x(function(){for(var t=new k,e=5;e--;)t[S](e,e);return!t.has(-0)});A||((k=e(function(e,l){m(e,k,t);var o=v(new j,e,k);return null!=l&&c(l,O,o[S],o),o})).prototype=P,P.constructor=k),(M||F)&&(C("delete"),C("has"),O&&C("get")),(F||N)&&C(S),_&&P.clear&&delete P.clear}else k=y.getConstructor(e,t,O,S),n(k.prototype,l),meta.NEED=!0;return w(k,t),E[t]=k,r(r.G+r.W+r.F*(k!=j),E),_||y.setStrong(k,t,O),k}},296:function(t,e,l){(t.exports=l(11)(!1)).push([t.i,".container{width:100%;padding:12px;margin-right:auto;margin-left:auto}@media(min-width:960px){.container{max-width:960px}}@media(min-width:1264px){.container{max-width:1264px}}@media(min-width:1904px){.container{max-width:1904px}}.container--fluid{max-width:100%}.row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin-right:-12px;margin-left:-12px}.row--dense{margin-right:-4px;margin-left:-4px}.row--dense>.col,.row--dense>[class*=col-]{padding:4px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%;padding:12px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.offset-1{margin-left:8.3333333333%}.offset-2{margin-left:16.6666666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333333333%}.offset-5{margin-left:41.6666666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333333333%}.offset-8{margin-left:66.6666666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333333333%}.offset-11{margin-left:91.6666666667%}@media(min-width:600px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.3333333333%}.offset-sm-2{margin-left:16.6666666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333333333%}.offset-sm-5{margin-left:41.6666666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333333333%}.offset-sm-8{margin-left:66.6666666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333333333%}.offset-sm-11{margin-left:91.6666666667%}}@media(min-width:960px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333333333%}.offset-md-5{margin-left:41.6666666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333333333%}.offset-md-8{margin-left:66.6666666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333333333%}.offset-md-11{margin-left:91.6666666667%}}@media(min-width:1264px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.3333333333%}.offset-lg-2{margin-left:16.6666666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333333333%}.offset-lg-5{margin-left:41.6666666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333333333%}.offset-lg-8{margin-left:66.6666666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333333333%}.offset-lg-11{margin-left:91.6666666667%}}@media(min-width:1904px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.3333333333%}.offset-xl-2{margin-left:16.6666666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333333333%}.offset-xl-5{margin-left:41.6666666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333333333%}.offset-xl-8{margin-left:66.6666666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333333333%}.offset-xl-11{margin-left:91.6666666667%}}",""])},306:function(t,e,l){"use strict";l(10),l(7),l(56),l(36),l(37);var o=l(1),r=(l(70),l(293),l(45),l(5),l(4),l(9),l(20),l(286),l(0)),f=l(287),n=l(2);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,l)}return e}var m=["sm","md","lg","xl"],d=m.reduce(function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t},{}),x=m.reduce(function(t,e){return t["offset"+Object(n.q)(e)]={type:[String,Number],default:null},t},{}),h=m.reduce(function(t,e){return t["order"+Object(n.q)(e)]={type:[String,Number],default:null},t},{}),w={col:Object.keys(d),offset:Object.keys(x),order:Object.keys(h)};function v(t,e,l){var o=t;if(null!=l&&!1!==l){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==l&&!0!==l?(o+="-".concat(l)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({cols:{type:[Boolean,String,Number],default:!1}},d,{offset:{type:[String,Number],default:null}},x,{order:{type:[String,Number],default:null}},h,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var l=e.props,data=e.data,r=e.children,n=(e.parent,"");for(var c in l)n+=String(l[c]);var m=y.get(n);return m||function(){var t,e;for(e in m=[],w)w[e].forEach(function(t){var o=l[t],r=v(e,t,o);r&&m.push(r)});var r=m.some(function(t){return t.startsWith("col-")});m.push((t={col:!r||!l.cols},Object(o.a)(t,"col-".concat(l.cols),l.cols),Object(o.a)(t,"offset-".concat(l.offset),l.offset),Object(o.a)(t,"order-".concat(l.order),l.order),Object(o.a)(t,"align-self-".concat(l.alignSelf),l.alignSelf),t)),y.set(n,m)}(),t(l.tag,Object(f.a)(data,{class:m}),r)}})},329:function(t,e,l){"use strict";l.r(e);var o=l(52),r=l(69),f=l.n(r),n=l(306),c=(l(160),l(290)),m=Object(c.a)("layout"),component=Object(o.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[e("v-col",{staticClass:"text-center"},[e("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),this._v(" "),e("blockquote",{staticClass:"blockquote"},[this._v("\n      “First, solve the problem. Then, write the code.”\n      "),e("footer",[e("small",[e("em",[this._v("—John Johnson")])])])])])],1)},[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:n.a,VLayout:m})}}]);