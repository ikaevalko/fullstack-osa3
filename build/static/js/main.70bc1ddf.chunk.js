(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(14),r=t(2),u=t(0),c=t.n(u),o=t(13),l=t.n(o),i=t(3),m=t.n(i),d="/api/persons",f=function(){return m.a.get(d).then((function(e){return e.data}))},s=function(e){return m.a.post(d,e).then((function(e){return e.data}))},b=function(e){m.a.delete("".concat(d,"/").concat(e))},h=function(e){return m.a.put("".concat(d,"/").concat(e.id),e).then((function(e){return e.data}))},g=function(e){var n=e.person;return c.a.createElement(c.a.Fragment,null,n.name," ",n.number)},p=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:e.addPerson},"name: ",c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange}),c.a.createElement("br",null),"number: ",c.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange}),c.a.createElement("br",null),c.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.persons,t=e.handleRemove;return c.a.createElement(c.a.Fragment,null,n.map((function(e){return c.a.createElement("div",{key:e.name},c.a.createElement(g,{person:e}),c.a.createElement("button",{onClick:function(){return t(e)}},"delete"))})))},v=function(e){return c.a.createElement(c.a.Fragment,null,"filter shown with ",c.a.createElement("input",{value:e.filter,onChange:e.handleFiltering}))},w=function(e){var n=e.message;return null===n?null:c.a.createElement("div",{style:{background:"lightgreen",fontSize:16,borderRadius:5,padding:10,marginBottom:10}},n)},j=function(e){var n=e.message;return null===n?null:c.a.createElement("div",{style:{background:"#ff4d4d",fontSize:16,borderRadius:5,padding:10,marginBottom:10}},n)},O=function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],o=n[1],l=Object(u.useState)(""),i=Object(r.a)(l,2),m=i[0],d=i[1],g=Object(u.useState)(""),O=Object(r.a)(g,2),C=O[0],S=O[1],N=Object(u.useState)(""),k=Object(r.a)(N,2),y=k[0],F=k[1],R=Object(u.useState)(null),T=Object(r.a)(R,2),B=T[0],D=T[1],P=Object(u.useState)(null),z=Object(r.a)(P,2),A=z[0],I=z[1],J=Object(u.useState)(!1),L=Object(r.a)(J,2),x=L[0],q=L[1],G=t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));Object(u.useEffect)((function(){f().then((function(e){return o(e)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Phonebook"),x?c.a.createElement(j,{message:A}):c.a.createElement(w,{message:B}),c.a.createElement(v,{filter:y,handleFiltering:function(e){F(e.target.value)}}),c.a.createElement("h2",null,"Add a new"),c.a.createElement(p,{addPerson:function(e){e.preventDefault();var n=!1;(t.forEach((function(e){if(e.name===m&&(n=!0,window.confirm("".concat(m," is already added to phonebook. Replace the old number with a new one?")))){var r=Object(a.a)({},e,{number:C});h(r).then((function(e){o(t.map((function(n){return n.id!==r.id?n:e})))})).catch((function(e){q(!0),I("Information of ".concat(r.name," has already been removed from server")),setTimeout((function(){I(null)}),5e3)})),q(!1),D("Replaced number of ".concat(r.name)),setTimeout((function(){D(null)}),5e3)}})),n)||(s({name:m,number:C}).then((function(e){return o(t.concat(e))})).catch((function(e){q(!0),I(e.response.data),console.log("nut")})),q(!1),D("Added ".concat(m)),setTimeout((function(){D(null)}),5e3));d(""),S(""),console.log("nut2")},handleNameChange:function(e){d(e.target.value)},handleNumberChange:function(e){S(e.target.value)},newName:m,newNumber:C}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(E,{persons:G,handleRemove:function(e){window.confirm("Delete ".concat(e.name," ?"))&&(b(e.id),o(t.filter((function(n){return n.id!==e.id}))),D("Deleted ".concat(e.name)),setTimeout((function(){D(null)}),5e3))}}))};l.a.render(c.a.createElement(O,null),document.getElementById("root"));n.default=O}},[[15,1,2]]]);
//# sourceMappingURL=main.70bc1ddf.chunk.js.map