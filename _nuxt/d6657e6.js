(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{230:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("1930a9a0",content,!0,{sourceMap:!1})},231:function(t,e,n){"use strict";n(230)},232:function(t,e,n){var r=n(37)(!1);r.push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=r},234:function(t,e,n){var content=n(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("1b7833da",content,!0,{sourceMap:!1})},235:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{avatar_url:{type:String,required:!0}}}),o=(n(231),n(32)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"rounded-full NuxtLogo max-w-sm",attrs:{src:t.avatar_url,alt:"Avatar"}})}),[],!1,null,null,null);e.default=component.exports},238:function(t,e,n){"use strict";n(234)},239:function(t,e,n){var r=n(37)(!1);r.push([t.i,'.body{--bg-opacity:1;background-color:#e6fffa;background-color:rgba(230,255,250,var(--bg-opacity))}.container{min-height:100vh;justify-content:center;align-items:center;text-align:center;margin-left:auto;margin-right:auto;display:flex}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=r},253:function(t,e,n){"use strict";n.r(e);n(9),n(72),n(22);var r=n(2),o=n(1).a.extend({data:function(){return{avatar_url:""}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/niggelgame").then((function(t){return t.json().then((function(t){return t.avatar_url}))}));case 2:t.avatar_url=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),l=(n(238),n(32)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-full max-h-full bg-teal-100"},[n("div",{staticClass:"container"},[n("div",[n("Logo",{attrs:{avatar_url:t.avatar_url}}),t._v(" "),n("h1",{staticClass:"title"},[t._v("niggelgame")]),t._v(" "),n("div",{staticClass:"links"},[n("NuxtLink",{staticClass:"button--green",attrs:{to:"/docs"}},[t._v("Documentation")]),t._v(" "),n("a",{staticClass:"button--grey",attrs:{href:"https://github.com/niggelgame",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n          GitHub\n        ")])],1),t._v(" "),n("div",{staticClass:"my-6 sm:my-10"})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(235).default})}}]);