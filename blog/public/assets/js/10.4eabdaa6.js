(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{118:function(t,e,i){},241:function(t,e,i){"use strict";var n=i(118);i.n(n).a},251:function(t,e,i){"use strict";i.r(e);var n={name:"BlogPostPreview",props:{item:{type:Object,required:!0}},computed:{formatPublishDate:function(){return new Date(this.item.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}},r=(i(241),i(1)),a=Object(r.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("time",[t._v(t._s(t.formatPublishDate))]),t._v(" "),i("h3",{staticClass:"blog-post__title"},[t._v(t._s(t.item.frontmatter.title))]),t._v(" "),t.item.frontmatter.excerpt?i("p",[t._v(t._s(t.item.frontmatter.excerpt))]):t._e(),t._v(" "),t.item.readingTime?i("p",[t._v("Estimated time: "+t._s(t.item.readingTime.text))]):t._e(),t._v(" "),i("router-link",{staticClass:"button blog-post__button",attrs:{to:t.item.path}},[t._v("Read More >")])],1)},[],!1,null,"20fb53b5",null);e.default=a.exports}}]);