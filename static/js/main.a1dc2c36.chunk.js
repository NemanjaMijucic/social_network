(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{13:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(24),i=s.n(n),l=s(3),j=(s(13),s(25)),r=s.n(j),o=s(7),d=s(0);var b=function(){var e={color:"white"};return Object(d.jsxs)("nav",{children:[Object(d.jsx)("h3",{children:"Social Network Page"}),Object(d.jsxs)("ul",{className:"nav-links",children:[Object(d.jsx)(o.b,{style:e,to:"/",children:Object(d.jsx)("li",{children:"Posts"})}),Object(d.jsx)(o.b,{style:e,to:"/create",children:Object(d.jsx)("li",{children:"Create"})})]})]})};var m=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(l.a)(n,2),j=i[0],r=i[1],b=Object(c.useState)(""),m=Object(l.a)(b,2),O=m[0],u=m[1],h=Object(c.useState)(!1),x=Object(l.a)(h,2),p=x[0],f=x[1],v=Object(c.useState)(""),g=Object(l.a)(v,2),N=g[0],S=g[1],w=Object(c.useState)(!1),k=Object(l.a)(w,2),y=k[0],C=k[1],D=Object(c.useState)(""),B=Object(l.a)(D,2),L=B[0],T=B[1],_=Object(c.useState)(!1),E=Object(l.a)(_,2),I=E[0],J=E[1],P=Object(c.useState)(""),A=Object(l.a)(P,2),M=A[0],q=A[1],z=""!==s,F=!z&&j,G=""!==O,H=!G&&p,K=""!==N,Q=!K&&y,R=""!==L,U=!R&&I,V=!1;z&&G&&K&&R&&(V=!0);var W=F?"post-form invalid":"post-form",X=H?"post-form invalid":"post-form",Y=Q?"post-form invalid":"post-form",Z=U?"post-form invalid":"post-form";return Object(d.jsx)("div",{className:"create",children:Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),V){var t={name:s,lastName:O,teg:N,comment:L,image:M};console.log(t),a(""),u(""),S(""),T("")}},children:[Object(d.jsxs)("div",{className:W,children:[Object(d.jsx)("label",{for:"name",children:"Name"}),Object(d.jsx)("input",{type:"text",id:"name",className:"text-input",placeholder:"name",onChange:function(e){a(e.target.value)},onBlur:function(){r(!0)},value:s}),F&&Object(d.jsx)("p",{className:"error-text",children:"name must not be empty"})]}),Object(d.jsxs)("div",{className:X,children:[Object(d.jsx)("label",{for:"lastname",children:"Last Name"}),Object(d.jsx)("input",{type:"text",id:"lastname",className:"text-input",placeholder:"last name",onChange:function(e){u(e.target.value)},onBlur:function(){f(!0)},value:O}),H&&Object(d.jsx)("p",{className:"error-text",children:"last name must not be empty"})]}),Object(d.jsxs)("div",{className:Y,children:[Object(d.jsx)("label",{for:"tags",children:"Tags"}),Object(d.jsx)("input",{type:"text",id:"tags",className:"text-input",placeholder:"tags",onChange:function(e){S(e.target.value)},onBlur:function(){C(!0)},value:N}),Q&&Object(d.jsx)("p",{className:"error-text",children:"tag must not be empty"})]}),Object(d.jsxs)("div",{className:Z,children:[Object(d.jsx)("label",{for:"comment",children:"Comment"}),Object(d.jsx)("input",{type:"text",id:"comment",className:"text-input",placeholder:"comment",onChange:function(e){T(e.target.value)},onBlur:function(){J(!0)},value:L}),U&&Object(d.jsx)("p",{className:"error-text",children:"comment must not be empty"})]}),Object(d.jsx)("div",{className:"post-form",children:Object(d.jsxs)("label",{for:"file",className:"label-file",children:["Image upload",Object(d.jsx)("input",{type:"file",id:"file",onChange:function(e){q(e.target.files[0])},className:"custom-file-upload"})]})}),Object(d.jsx)("div",{className:"post-form",children:Object(d.jsx)(o.b,{to:{pathname:"/",state:{name:s,lastName:O,teg:N,comment:L,image:M,date:new Date}},children:Object(d.jsx)("button",{type:"submit",className:"btn-submit",disabled:!V,children:"add post"})})})]})})},O=s(2),u=function(e){var t=Object(O.f)().state,s=Object(c.useState)(!1),a=Object(l.a)(s,2),n=a[0],i=a[1],j=Object(c.useState)(""),r=Object(l.a)(j,2),b=r[0],m=r[1],u=function(e){m(e.target.id),i(!0)},h=function(){i(!1)};return Object(d.jsxs)("div",{children:[e.posts.map((function(e){var t=new Date(e.publishDate).toLocaleDateString(),s=new Date(e.publishDate).toLocaleTimeString();return Object(d.jsxs)("div",{className:"post",children:[Object(d.jsx)(o.b,{to:{pathname:"id/".concat(e.id),state:{id:e.id,firstName:e.owner.firstName,lastName:e.owner.lastName,img:e.image,date:t,time:s,likes:e.likes,tags:e.tags,comment:e.text}},children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[e.owner.firstName," ",e.owner.lastName]}),Object(d.jsx)("img",{src:e.image,alt:""})]})}),!n&&Object(d.jsx)("button",{className:"detail-btn",id:e.id,onClick:u,children:"show details"}),n&&b===e.id?Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("p",{children:t+" "+s}),Object(d.jsxs)("p",{children:[" likes: ",e.likes]}),Object(d.jsx)("div",{children:e.tags.map((function(e){return Object(d.jsx)("button",{children:e})}))}),Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("button",{className:"detail-btn",onClick:h,children:"hide details"})]}):""]})})),t?Object(d.jsxs)("div",{className:"post",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsxs)("p",{children:[t.name," ",t.lastName]}),Object(d.jsx)("img",{src:t.image,alt:""})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("p",{children:t.date.toLocaleDateString()+" "+t.date.toLocaleTimeString()}),Object(d.jsx)("p",{children:t.name+" "+t.name}),Object(d.jsxs)("p",{children:[" likes ",t.name]}),Object(d.jsx)("div",{}),Object(d.jsx)("p",{children:t.comment})]})]}):""]})},h=(s(59),function(){var e=Object(O.f)().state;return Object(d.jsxs)("div",{className:"single-post",children:[Object(d.jsxs)("div",{className:"single-post-left",children:[Object(d.jsxs)("p",{children:[e.firstName," ",e.lastName]}),Object(d.jsx)("img",{src:e.img,alt:""})]}),Object(d.jsxs)("div",{className:"single-post-right",children:[Object(d.jsx)("p",{children:e.date+" "+e.time}),Object(d.jsxs)("p",{children:[" likes: ",e.likes]}),Object(d.jsx)("div",{children:e.tags.map((function(e){return Object(d.jsx)("button",{className:"tag_button",children:e})}))}),Object(d.jsx)("p",{children:e.comment}),Object(d.jsx)("form",{children:Object(d.jsx)("textarea",{placeholder:"add comment",rows:"4",cols:"50"})})]})]})});var x=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){r.a.get("https://dummyapi.io/data/v1/post?limit=10",{headers:{"app-id":"616e75e6a7d1af79dadb9732"}}).then((function(e){a(e.data.data.map((function(e){return e})))}))}),[]),Object(d.jsx)(o.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{className:"nav"}),Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/create/",component:m}),Object(d.jsx)(O.a,{path:"/id",component:h}),Object(d.jsx)(O.a,{path:"/",component:u,children:Object(d.jsx)(u,{posts:s},s.map((function(e){return e.id})))})]})})]})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a1dc2c36.chunk.js.map