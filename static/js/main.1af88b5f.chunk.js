(this["webpackJsonpmy-component"]=this["webpackJsonpmy-component"]||[]).push([[0],{14:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),r=(c(14),c(9)),o=c(8),d=c.n(o),l=(c(27),c(28),c(0)),j={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}};var h=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];function a(e){return Object(l.jsxs)("div",{className:"flip-box",children:[Object(l.jsxs)("div",{className:"front",style:{backgroundImage:"url(".concat(e.img,")")},children:[Object(l.jsxs)("div",{className:"content-heading ",children:[Object(l.jsx)("h4",{children:e.description}),Object(l.jsx)("span",{className:"click-for-more"})]}),Object(l.jsx)("div",{className:"content-description"}),Object(l.jsx)("div",{className:"content-author"})]}),Object(l.jsxs)("div",{className:"back",children:[Object(l.jsx)("div",{className:"content-title",children:e.title}),Object(l.jsxs)("div",{className:"content-author",children:[Object(l.jsxs)("h5",{children:["Author: ",e.author]}),Object(l.jsx)("p",{children:e.date})]}),Object(l.jsx)("div",{className:"content-body",children:e.content}),Object(l.jsx)("div",{className:"read-more",children:Object(l.jsx)("button",{className:"button",children:Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("a",{href:e.url,children:" Read more"})," "]})})}),Object(l.jsx)("div",{className:"content-blog"})]})]},e.id)}return Object(n.useEffect)((function(){fetch("https://newscatcher.p.rapidapi.com/v1/search_free?q=Elon%20Musk&lang=en&media=True",{method:"GET",headers:{"x-rapidapi-key":"a623ad50c1mshc8f94022e42a524p1969e2jsnab3ad3e80503","x-rapidapi-host":"newscatcher.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){s(e.articles)}))}),[]),0===c.length?Object(l.jsx)("h1",{className:"fifth",style:{textAlign:"center"},children:"Loading..."}):Object(l.jsxs)("div",{className:"carousel-container",children:[Object(l.jsxs)("div",{className:"h2",children:[Object(l.jsx)("h2",{children:"BLOG & NEWS"}),Object(l.jsx)("div",{className:"border"})]}),Object(l.jsx)(d.a,{responsive:j,children:c.slice(0,20).map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(a,{img:c[t].media,id:c[t]._id,description:c[t].title,content:c[t].summary.length>100?c[t].summary.substring(0,300)+"...":c[t].summary,author:null==c[t].author||void 0===c[t].author?"Capacity Bay":c[t].author,date:c[t].published_date,url:c[t].link})})}))})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.1af88b5f.chunk.js.map