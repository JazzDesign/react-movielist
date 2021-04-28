(this.webpackJsonpmovie_list=this.webpackJsonpmovie_list||[]).push([[0],{13:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),s=i(5),r=i.n(s),a=i(4),l=(i(13),[{id:"1",title:"Oceans 8",category:"Comedy",likes:4,dislikes:1},{id:"2",title:"Midnight Sun",category:"Comedy",likes:2,dislikes:0},{id:"3",title:"Les indestructibles 2",category:"Animation",likes:3,dislikes:1},{id:"4",title:"Sans un bruit",category:"Thriller",likes:6,dislikes:6},{id:"5",title:"Creed II",category:"Drame",likes:16,dislikes:2},{id:"6",title:"Pulp Fiction",category:"Thriller",likes:11,dislikes:3},{id:"7",title:"Pulp Fiction",category:"Thriller",likes:12333,dislikes:32},{id:"8",title:"Seven",category:"Thriller",likes:2,dislikes:1},{id:"9",title:"Inception",category:"Thriller",likes:2,dislikes:1},{id:"10",title:"Gone Girl",category:"Thriller",likes:22,dislikes:12}]),o=new Promise((function(e,t){return setTimeout(e,100,l)})),d=i(2),u=i(3),j=Object(u.b)({name:"movies",initialState:[],reducers:{addMovies:function(e,t){t.payload.map((function(t){return e.push(t)}))},deleteMovie:function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))},incrementLikes:function(e,t){var i=e.findIndex((function(e){return e.id===t.payload.id}));e[i].likes+=1},incrementDislikes:function(e,t){var i=e.findIndex((function(e){return e.id===t.payload.id}));e[i].dislikes+=1}}}),b=j.actions,g=b.addMovies,m=b.deleteMovie,h=b.incrementLikes,O=b.incrementDislikes,f=j.reducer,p=(i(18),Object(u.b)({name:"category",initialState:{category:"All"},reducers:{updateCategory:function(e,t){e.category=t.payload}}})),v=p.actions.updateCategory,x=p.reducer,k=i(1),y=function(e){return e.category};function N(e){var t=e.categories,i=Object(d.b)(),n=Object(d.c)(y);return Object(k.jsxs)("section",{children:[Object(k.jsxs)("h2",{children:["Your selection is: ",n.category," "]}),Object(k.jsxs)("select",{name:"select",onChange:function(e){console.log(e.target.value),i(v(e.target.value))},children:[Object(k.jsx)("option",{value:"All",children:"All"}),t.map((function(e){return Object(k.jsx)("option",{value:e.category,children:e.category},e.id)}))]})]})}function _(e){var t=e.movie,i=Object(d.b)();return Object(k.jsxs)("div",{className:"grid-card",children:[Object(k.jsx)("div",{className:"grid-card__img",children:Object(k.jsx)("img",{src:"https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"Movie img"})}),Object(k.jsxs)("div",{className:"grid-card__details",children:[Object(k.jsx)("h4",{className:"grid-card__details--title",children:t.title}),Object(k.jsxs)("p",{className:"grid-card__details--likes",children:["Likes: ",t.likes,Object(k.jsx)("button",{className:"small-button",onClick:function(){i(h({id:t.id}))},children:"+"})]}),Object(k.jsxs)("p",{className:"grid-card__details--dislikes",children:["Dislikes: ",t.dislikes,Object(k.jsx)("button",{className:"small-button",onClick:function(){i(O({id:t.id}))},children:"-"})]}),Object(k.jsx)("div",{className:"grid-card__details--delete",children:Object(k.jsx)("button",{className:"big-button",onClick:function(){i(m({id:t.id}))},children:"Delete"})})]})]})}i(20),i(21);function M(e){for(var t=e.moviesPerPage,i=e.totalMovies,n=e.paginate,c=[],s=1;s<=Math.ceil(i/t);s++)c.push(s);return Object(k.jsxs)("nav",{className:"pagination",children:[Object(k.jsx)("button",{className:"pagination-button",onClick:function(){return n("back")},children:"Pr\xe9c\xe9dent "}),Object(k.jsx)("ul",{className:"pagination-list",children:c.map((function(e){return Object(k.jsx)("li",{children:e},e)}))}),Object(k.jsx)("button",{className:"pagination-button",onClick:function(){return n("next")},children:"Suivant "})]})}var C=function(e){return e.category};function S(e){var t=e.movies,i=Object(d.c)(C),c=Object(n.useState)(1),s=Object(a.a)(c,2),r=s[0],l=s[1],o=Object(n.useState)(4),u=Object(a.a)(o,1)[0],j=r*u,b=j-u,g=t.filter((function(e){return"All"===i.category?e:e.category===i.category})),m=g.slice(b,j);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"grid",children:m.map((function(e){return Object(k.jsx)(_,{movie:e},e.id)}))}),0!==t.length&&Object(k.jsx)(M,{moviesPerPage:u,totalMovies:g.length,paginate:function(e){r>1&&"back"===e&&l(r-1),r<Math.ceil(g.length/u)&&"next"===e&&(l(r+1),console.log("next"))}})]})}var P=function(e){return e.movies};var T=function(){var e=Object(d.b)(),t=Object(n.useState)(!1),i=Object(a.a)(t,2),c=i[0],s=i[1],r=Object(d.c)(P);Object(n.useEffect)((function(){s(!0),o.then((function(t){e(g(t))})),s(!1)}),[e]);var l,u,j=(u="category",(l=r).map((function(e){return e[u]})).map((function(e,t,i){return i.indexOf(e)===t&&t})).filter((function(e){return l[e]})).map((function(e){return l[e]})));return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)("div",{className:"app-wrapper",children:[Object(k.jsx)("h1",{children:"Movie List"}),Object(k.jsx)(N,{categories:j}),c||0===r.length?Object(k.jsx)("h1",{children:"No more movies :("}):Object(k.jsx)(S,{movies:r})]})})},A=Object(u.a)({reducer:{movies:f,category:x}});r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(d.a,{store:A,children:Object(k.jsx)(T,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f75c4e07.chunk.js.map