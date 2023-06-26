"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[728],{812:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(689),a=n(87),u="MoviesList_list__xKiKf",c="MoviesList_title__sVjy2",i="MoviesList_item__n8d3i",s="MoviesList_link__5UpDO",o=n(184),l=function(e){var t=e.movies,n=e.titlePage,l=void 0===n?null:n,f=(0,r.TH)();return(0,o.jsxs)(o.Fragment,{children:[l&&(0,o.jsx)("h1",{className:c,children:l}),(0,o.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,n=e.title,r=e.name;return(0,o.jsx)("li",{className:i,children:(0,o.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:f},className:s,children:n||r})},t)}))})]})}},728:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(791),u=n(87),c=n(237),i=n(812),s={form:"SearchForm_form__o80os",input:"SearchForm_input__HOxJo",submit:"SearchForm_submit__tVo70"},o=n(184),l=function(e){var t=e.handleSubmit,n=e.inputSearch,u=e.handleInputChange,c=(0,a.useState)(!1),i=(0,r.Z)(c,2),l=i[0],f=i[1];return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n.trim()?(f(!1),t()):f(!0)},className:s.form,children:[(0,o.jsx)("input",{type:"text",name:"query",className:s.input,value:n,onChange:u,placeholder:"Enter movie name"}),(0,o.jsx)("button",{type:"submit",className:s.submit,children:"Search"}),l&&(0,o.jsx)("div",{className:s.error,children:"Please enter a movie name"})]})},f=function(){var e,t=(0,u.lr)(),n=(0,r.Z)(t,2),s=n[0],f=n[1],p=null!==(e=s.get("query"))&&void 0!==e?e:"",m=(0,a.useState)(null),v=(0,r.Z)(m,2),h=v[0],d=v[1],_=(0,a.useState)(null),g=(0,r.Z)(_,2),x=g[0],b=g[1],y=(0,a.useState)(p),S=(0,r.Z)(y,2),k=S[0],Z=S[1];(0,a.useEffect)((function(){""!==p&&(d(null),b(null),c.GC(p).then((function(e){d(e.results),b(e.total_results)})).catch(console.log))}),[p]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{handleSubmit:function(){f({query:k.toLowerCase().trim()})},inputSearch:k,handleInputChange:function(e){Z(e.currentTarget.value)}}),h&&(0,o.jsx)(i.Z,{movies:h}),0===x&&(0,o.jsx)("div",{children:"Not found movies"})]})}},237:function(e,t,n){n.d(t,{GC:function(){return l},M1:function(){return p},Pg:function(){return f},rj:function(){return o},tx:function(){return m}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i="6064d97228286d71f89b1fb6aaea0bd6",s="https://api.themoviedb.org/3/",o=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=728.14a85a2f.chunk.js.map