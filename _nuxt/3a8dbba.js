(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{271:function(t,e,r){var content=r(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("598612c0",content,!0,{sourceMap:!1})},272:function(t,e,r){"use strict";r(271)},273:function(t,e,r){var n=r(69)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap);"]),n.push([t.i,'*{font-family:"Prompt",sans-serif}',""]),t.exports=n},274:function(t,e,r){"use strict";r.r(e);var n={},o=(r(272),r(59)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"warning"}},[r("b-navbar-brand",{attrs:{href:"/"}},[t._v("AMEZI")]),t._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"https://www.facebook.com/AMEZIVSG",target:"1"}},[t._v("Facebook")]),t._v(" "),r("b-nav-item",{attrs:{href:"https://www.youtube.com/channel/UCqdP4CqnoDWiKp74KaSU-Tg/featured",target:"2"}},[t._v("Youtube")])],1),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),t._v(" "),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("em",[t._v("User")])]},proxy:!0}])},[t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,r){"use strict";r.r(e);var n=r(25),o=(r(58),{components:{nevbar:r(274).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("posts").fetch();case 3:return n=e.sent,e.abrupt("return",{posts:n});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){console.log("THIS.POSTS",this.posts)}}),l=r(59),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nevbar"),t._v(" "),r("br"),t._v(" "),r("b-container",[r("b-row",t._l(t.posts,(function(e){return r("b-col",{key:e.slug},[r("b-card",{staticClass:"auto",staticStyle:{"max-width":"50rem"},attrs:{title:e.title,"img-src":e.image,"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[t._v("\n          "+t._s(e.description)+"\n        ")]),t._v(" "),r("b-button",{attrs:{to:{name:"posts-slug",params:{slug:e.slug}},variant:"primary"}},[t._v("Read More!")])],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nevbar:r(274).default})}}]);