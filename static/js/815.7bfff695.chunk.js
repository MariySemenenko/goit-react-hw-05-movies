"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[815],{672:function(e,n,t){t.d(n,{O:function(){return p}});var r,a,u=t(689),c=t(168),s=t(686),i=t(87),o=(0,s.Z)(i.rU)(r||(r=(0,c.Z)(["\n  color: cornflowerblue;\n\n  &.active {\n    color: black;\n  }\n"]))),f=s.Z.li(a||(a=(0,c.Z)(["\n  padding-top: 10px;\n  list-style: none;\n"]))),l=t(184),p=function(e){var n=e.movies,t=(0,u.TH)();return(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.title,a=e.original_title,u=e.name;return(0,l.jsx)(f,{children:(0,l.jsx)(o,{to:"/movies/".concat(n),state:{from:t},children:r||u||a})},n)}))})})}},608:function(e,n,t){t.d(n,{QH:function(){return o},TA:function(){return l},Sm:function(){return v}});var r=t(861),a=t(439),u=t(687),c=t.n(u),s=t(791),i=t(373),o=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],o=(0,s.useState)(null),f=(0,a.Z)(o,2),l=f[0],p=f[1],v=(0,s.useState)(null),d=(0,a.Z)(v,2),h=d[0],g=d[1];return(0,s.useEffect)((function(){g(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Df)();case 3:n=e.sent,u(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p(e.t0.message);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:t,error:l,isLoading:h}},f=(t(137),t(689)),l=function(){var e=(0,s.useState)(null),n=(0,a.Z)(e,2),t=n[0],u=n[1],o=(0,s.useState)(null),l=(0,a.Z)(o,2),p=l[0],v=l[1],d=(0,s.useState)(null),h=(0,a.Z)(d,2),g=h[0],m=h[1],x=(0,f.UO)().movieId;(0,s.useEffect)((function(){Z(x)}),[x]);var Z=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,(0,i.TP)(n);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),v(e.t0.message);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();return{movie:t,error:p,isLoading:g}},p=(t(662),t(87)),v=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],o=(0,s.useState)(null),f=(0,a.Z)(o,2),l=f[0],v=f[1],d=(0,s.useState)(null),h=(0,a.Z)(d,2),g=h[0],m=h[1],x=(0,p.lr)(),Z=(0,a.Z)(x,2),w=Z[0],k=Z[1],b=w.get("query")||"";return(0,s.useEffect)((function(){m(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,b){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,i.Wf)(b);case 5:if(0!==(n=e.sent).length){e.next=8;break}return e.abrupt("return",alert("We not find movies"));case 8:u(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),v(e.t0.message);case 14:return e.prev=14,m(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[b]),{movies:t,error:l,isLoading:g,setSearchParams:k}}},137:function(e,n,t){t.d(n,{E:function(){return f}});var r=t(861),a=t(439),u=t(687),c=t.n(u),s=t(791),i=t(373),o=t(689),f=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],f=(0,s.useState)(null),l=(0,a.Z)(f,2),p=l[0],v=l[1],d=(0,s.useState)(null),h=(0,a.Z)(d,2),g=h[0],m=h[1],x=(0,o.UO)().movieId;(0,s.useEffect)((function(){Z(x)}),[x]);var Z=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,(0,i.zv)(n);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),v(e.t0.message);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();return{credit:t,error:p,isLoading:g}}},662:function(e,n,t){t.d(n,{v:function(){return f}});var r=t(861),a=t(439),u=t(687),c=t.n(u),s=t(373),i=t(791),o=t(689),f=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],f=(0,i.useState)(null),l=(0,a.Z)(f,2),p=l[0],v=l[1],d=(0,i.useState)(null),h=(0,a.Z)(d,2),g=h[0],m=h[1],x=(0,o.UO)().movieId;(0,i.useEffect)((function(){Z(x)}),[x]);var Z=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,(0,s.tx)(n);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),v(e.t0.message);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();return{reviews:t,error:p,isLoading:g}}},815:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r,a=t(608),u=t(665),c=t(672),s=t(168),i=t(686).Z.h1(r||(r=(0,s.Z)(["\n    font-size: 20px;\n    padding-left: 40px;\n    color: cornflowerblue;\n"]))),o=t(184),f=function(){var e=(0,a.QH)(),n=e.movies,t=e.error,r=e.isLoading;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:"Trending Movies"}),r&&(0,o.jsx)(u.a,{}),t&&(0,o.jsx)("p",{children:"Something went wrong"}),n.length>0&&(0,o.jsx)(c.O,{movies:n})]})}},373:function(e,n,t){t.d(n,{Df:function(){return i},TP:function(){return f},Wf:function(){return o},tx:function(){return p},zv:function(){return l}});var r=t(861),a=t(687),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="2fe1a8067af2c3048e3f8cd6829927fa",i=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/all/day?api_key=".concat(s));case 3:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US&external_source=imdb_id"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=815.7bfff695.chunk.js.map