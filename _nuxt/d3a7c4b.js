(window.webpackJsonp=window.webpackJsonp||[]).push([[19,17],{247:function(t,e,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("2305255d",content,!0,{sourceMap:!1})},253:function(t,e,n){"use strict";n.r(e);var r=n(249),o=n(261),c=n(262),l=n(263),d=n(258),f={components:{Button:r.default,slideImages:o.default,googleMap:c.default,googleReview:l.default,whatsApp:d.default},props:{list:{type:Array}}},h=n(16),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list?n("section",t._l(t.list,(function(e,r){return n("div",{key:"f_"+r,class:r>0?"next":""},[e.name?n("h2",{staticClass:"text-center"},[t._v(t._s(e.name))]):t._e(),t._v(" "),e.slides?n("div",[n("slide-images",{attrs:{list:e.slides}})],1):t._e(),t._v(" "),e.whatsApp?n("whats-app",{attrs:{text:e.whatsApp.text}}):t._e(),t._v(" "),e.googleMap?n("div",[n("google-map",{attrs:{lat:e.googleMap.lat,long:e.googleMap.long}}),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"text-center"},[n("Button",{attrs:{url:"https://www.google.com/maps/dir/?api=1&destination=princes%20street%20hostel&destination_place_id=ChIJ_SVfZmPHh0gREqcwzgqtAo4",label:"Get Direction"}})],1)],1):t._e(),t._v(" "),e.googleReview?n("div",[n("google-review",{attrs:{placeID:e.googleReview.placeID}})],1):t._e()],1)})),0):t._e()}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,n){"use strict";n(247)},257:function(t,e,n){var r=n(51)(!1);r.push([t.i,".whatsapp-wrapper[data-v-963f3b72]{text-align:center}.whatsapp-wrapper .whatsapp-icon[data-v-963f3b72]{height:48px;width:48px;margin:0 auto}",""]),t.exports=r},258:function(t,e,n){"use strict";n.r(e);var r={props:["text"]},o=(n(256),n(16)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whatsapp-wrapper"},[n("div",{staticClass:"text",domProps:{innerHTML:t._s(t.text)}}),t._v(" "),n("div",{staticClass:"whatsapp-icon"},[n("a",{attrs:{href:"https://wa.me/447553137828?text=faq%20page%20-%20",rel:"noopener",title:"Whatsapp",target:"_blank"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"#25D366",d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}})])])])])}),[],!1,null,"963f3b72",null);e.default=component.exports},269:function(t,e,n){"use strict";n(27),n(25),n(31),n(44),n(26),n(45);var r,o,c=n(17),l=n(9),d=(n(62),n(32),n(60),n(10),n(47),n(48),n(105),n(35),n(77),n(24)),f=n(81);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var o,c,l,path,d,f,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.store,c=t.route,l=t.error,e.prev=1,path=c.path,d=c.name,o.dispatch("setNextLink",{path:path,name:d}),"/"==(f="/"==c.fullPath?"/index":c.fullPath).slice(-1)&&(f=path.substr(0,f.length-1)),e.next=8,n(270)("./data".concat(f,".json"));case 8:if(data=e.sent,!r){e.next=12;break}return e.next=12,r;case 12:return o.dispatch("setPageData",data),data.body||(data.body=null),data.extras||(data.extras=null),e.abrupt("return",data);case 18:e.prev=18,e.t0=e.catch(1),console.error("ERROR",e.t0.message);case 21:o.dispatch("setLoading",!1),l({statusCode:404});case 23:case"end":return e.stop()}}),e,null,[[1,18]])})))()},head:function(){return{title:this.removeHTMLTags(this.pageData.headTitle),meta:[{name:"description",content:this.removeHTMLTags(this.pageData.desc)},{property:"og:title",content:this.removeHTMLTags(this.pageData.title)},{property:"og:url",content:"".concat(this.WEB_ADDRESS).concat(this.$route.path)},{property:"og:description",content:this.removeHTMLTags(this.pageData.desc)},{property:"og:image",content:this.pageData.metaImage},{name:"twitter:title",content:this.removeHTMLTags(this.pageData.title)},{name:"twitter:description",content:this.removeHTMLTags(this.pageData.desc)},{name:"twitter:image",content:this.pageData.metaImage}]}},computed:m({},Object(d.b)(["initiated","loading","pageData","nextLink","company","WEB_ADDRESS","GA_CODE"])),methods:{removeHTMLTags:function(s){return s?s.replace(/<(.|\n)*?>/g,""):""},fadeOut:function(t,e,n){var o=this;r=f.a.fadeOut(document.querySelector("#footer"),!0).then((function(){return f.a.fadeOut(document.querySelector(".container"),!0)})).then((function(){return f.a.fadeOut(document.querySelector(".banner-info"),!0)})).then((function(){return f.a.fadeOut(document.querySelector(".logo"),!0)})).then((function(){return f.a.fadeOut(document.querySelector("#header"),!0)})).then((function(){o.$store.dispatch("setLoading",!0),r=null,n&&n()}))}},mounted:function(){this.$store.dispatch("setLoading",!1),window.scrollTo(0,0),f.a.setOpacity(document.querySelector(".logo"),0),f.a.setOpacity(document.querySelector("#header"),0),f.a.setOpacity(document.querySelector(".banner-info"),0),f.a.setOpacity(document.querySelector(".container"),0),f.a.setOpacity(document.querySelector("#footer"),0),f.a.fadeIn(document.querySelector(".logo")).then((function(){return f.a.fadeIn(document.querySelector("#header"))})).then((function(){return f.a.fadeIn(document.querySelector(".banner-info"))})).then((function(){return f.a.fadeIn(document.querySelector(".container"))})).then((function(){return f.a.fadeIn(document.querySelector("#footer"))}))},beforeRouteUpdate:(o=Object(l.a)(regeneratorRuntime.mark((function t(e,n,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=3;break}return t.next=3,r;case 3:o();case 4:case"end":return t.stop()}}),t)}))),function(t,e,n){return o.apply(this,arguments)}),beforeRouteLeave:function(t,e,n){this.$store.dispatch("setPageData",m({},this.pageData)),this.fadeOut(t,e,n)},watch:{nextLink:function(t,e){e&&e.name==t.name&&e.path!=t.path&&(this.$store.dispatch("setPageData",m({},this.pageData)),this.fadeOut(t,this.$route))}}}},270:function(t,e,n){var map={"./data/contact-us.json":[290,24],"./data/faq.json":[291,25],"./data/index.json":[292,26],"./data/rooms.json":[293,27],"./data/terms-and-conditions.json":[294,28]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(map)},r.id=270,t.exports=r},318:function(t,e,n){"use strict";n.r(e);var r=n(269),body=n(268),o=n(253),c={components:{Body:body.default,Extras:o.default},mixins:[r.a]},l=n(16),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.body?n("Body",{attrs:{list:t.body}}):t._e(),t._v(" "),t.extras?n("Extras",{attrs:{list:t.extras}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Body:n(268).default,Extras:n(253).default})}}]);