(function(e){function t(t){for(var a,s,i=t[0],u=t[1],c=t[2],d=0,l=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&l.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0a12850c"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var c=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/table-auth/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("vTable",{attrs:{users_data:e.USERS}}),n("popupAdd",{on:{"new-row":e.newRow}}),n("popupEdit",{on:{"edited-row":e.editedRow}})],1)},o=[],s=n("5530"),i=(n("7db0"),n("b0c0"),n("2f62")),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"v-table"},[a("div",{staticClass:"v-table__header"},[a("p",{on:{click:e.sortByName}},[e._v(" Name "),a("img",{attrs:{src:n("e596"),alt:"Значок сортировки"}})]),a("p",{on:{click:e.sortByPointsEarned}},[e._v(" Points Earned "),a("img",{attrs:{src:n("e596"),alt:"Значок сортировки"}})]),a("p",{on:{click:e.sortByPointsSpent}},[e._v(" Points Spent "),a("img",{attrs:{src:n("e596"),alt:"Значок сортировки"}})]),a("p",{on:{click:e.sortByDate}},[e._v(" Registration date "),a("img",{attrs:{src:n("e596"),alt:"Значок сортировки"}})]),a("button",{staticClass:"button-add",on:{click:e.showAddPopup}})]),a("div",{staticClass:"v-table__body"},e._l(e.paginatedUsers,(function(t){return a("vTableRow",{key:t.id,attrs:{row_data:t},on:{"edit-row":e.editRow,"remove-row":e.removeRow}})})),1),a("div",{staticClass:"v-table__pagination"},e._l(e.pages,(function(t){return a("div",{key:t,staticClass:"page",class:{page__selected:t===e.pageNumber},on:{click:function(n){return e.pageClick(t)}}},[e._v(" "+e._s(t)+" ")])})),0)])},c=[],d=(n("fb6a"),n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-table-row"},[n("div",{staticClass:"row row-name"},[e._v(e._s(e.row_data.name))]),n("div",{staticClass:"row row-earned"},[e._v(e._s(e.row_data.points_earned))]),n("div",{staticClass:"row row-spent"},[e._v(e._s(e.row_data.points_spent))]),n("div",{staticClass:"row row-date"},[e._v(e._s(e.row_data.registration_date))]),n("button",{staticClass:"row-edit",on:{click:function(t){return e.$emit("edit-row",e.row_data)}}}),n("button",{staticClass:"row-delete",on:{click:function(t){return e.$emit("remove-row",e.row_data.id)}}})])}),p=[],l={name:"v-table-row",props:{row_data:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},methods:{}},m=l,f=(n("d76d"),n("2877")),_=Object(f["a"])(m,d,p,!1,null,null,null),v=_.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"popup-add"},[a("div",{staticClass:"popup-add__content"},[a("img",{staticClass:"popup-add__close",attrs:{src:n("cf5a"),alt:"Иконка выхода"},on:{click:e.close}}),a("h3",{staticClass:"popup-add__header"},[e._v("Добавление строки")]),a("form",{staticClass:"popup-add__form",attrs:{name:"add"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("input",{attrs:{type:"text",name:"name",placeholder:"Name",required:""}}),a("input",{attrs:{type:"number",name:"points_earned",placeholder:"Points Earned",required:""}}),a("input",{attrs:{type:"number",name:"points_spent",placeholder:"Points Spent",required:""}}),a("input",{attrs:{type:"date",name:"date",required:""}}),a("button",{attrs:{type:"submit"}},[e._v("Submit")])])])])},b=[],w={name:"popup-add",data:function(){return{}},computed:{},methods:{open:function(){document.querySelector(".popup-add").style.display="flex"},close:function(){document.querySelector(".popup-add").style.display="none",document.forms.add.reset()},submit:function(){var e=document.forms.add,t={name:e.elements.name.value,points_earned:e.elements.points_earned.value,points_spent:e.elements.points_spent.value,registration_date:e.elements.date.value};this.$emit("new-row",t)}}},y=w,g=(n("7d24"),Object(f["a"])(y,h,b,!1,null,null,null)),E=g.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"popup-edit"},[a("div",{staticClass:"popup-edit__content"},[a("img",{staticClass:"popup-edit__close",attrs:{src:n("cf5a"),alt:"Иконка выхода"},on:{click:e.close}}),a("h3",{staticClass:"popup-edit__header"},[e._v("Изменение строки")]),a("form",{staticClass:"popup-edit__form",attrs:{name:"edit"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("input",{attrs:{type:"text",name:"name",placeholder:"Name",required:""}}),a("input",{attrs:{type:"number",name:"points_earned",placeholder:"Points Earned",required:""}}),a("input",{attrs:{type:"number",name:"points_spent",placeholder:"Points Spent",required:""}}),a("input",{attrs:{type:"date",name:"date",placeholder:"Date",required:""}}),a("input",{staticClass:"input-id",attrs:{type:"text",name:"id",value:"id",readonly:""}}),a("button",{attrs:{type:"submit"}},[e._v("Submit")])])])])},A=[],C={name:"popup-edit",data:function(){return{}},computed:{},methods:{open:function(){document.querySelector(".popup-edit").style.display="flex"},close:function(){document.querySelector(".popup-edit").style.display="none",document.forms.edit.reset()},submit:function(){var e=document.forms.edit,t={name:e.elements.name.value,points_earned:e.elements.points_earned.value,points_spent:e.elements.points_spent.value,registration_date:e.elements.date.value};this.$emit("edited-row",t)}}},P=C,O=(n("6a35"),Object(f["a"])(P,S,A,!1,null,null,null)),R=O.exports,j={name:"v-table",components:{vTableRow:v},props:{users_data:{type:Array,default:function(){return[]}}},data:function(){return{usersPerPage:20,pageNumber:1}},computed:{pages:function(){return Math.ceil(this.users_data.length/this.usersPerPage)},paginatedUsers:function(){var e=(this.pageNumber-1)*this.usersPerPage,t=e+this.usersPerPage;return this.users_data.slice(e,t)}},methods:{pageClick:function(e){this.pageNumber=e},sortByName:function(){this.users_data.sort((function(e,t){return e.name.localeCompare(t.name)}))},sortByPointsEarned:function(){this.users_data.sort((function(e,t){return e.points_earned-t.points_earned}))},sortByPointsSpent:function(){this.users_data.sort((function(e,t){return e.points_spent-t.points_spent}))},sortByDate:function(){this.users_data.sort((function(e,t){return e.registration_date.localeCompare(t.registration_date)}))},removeRow:function(e){this.users_data=this.users_data.filter((function(t){return t.id!==e}))},editRow:function(e){var t=document.forms.edit;t.elements.id.value=e.id,t.elements.name.value=e.name,t.elements.points_earned.value=e.points_earned,t.elements.points_spent.value=e.points_spent,t.elements.date.value=e.registration_date,R.methods.open()},showAddPopup:function(){E.methods.open()}}},T=j,k=(n("99e0"),Object(f["a"])(T,u,c,!1,null,null,null)),x=k.exports,q={name:"app",components:{vTable:x,popupAdd:E,popupEdit:R},data:function(){return{}},methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])(["GET_USERS_FROM_API"])),{},{newRow:function(e){e.id=e.points_earned+e.points_spent+Math.floor(1e3*Math.random())+1,this.USERS.unshift(e),document.querySelector(".popup-add").style.display="none",document.forms.add.reset()},editedRow:function(){var e=document.forms.edit,t=this.USERS.find((function(t){return t.id==e.elements.id.value}));t.name=e.elements.name.value,t.points_earned=e.elements.points_earned.value,t.points_spent=e.elements.points_spent.value,t.registration_date=e.elements.date.value,R.methods.close()}}),computed:Object(s["a"])({},Object(i["c"])(["USERS"])),mounted:function(){this.GET_USERS_FROM_API()}},U=q,B=(n("034f"),Object(f["a"])(U,r,o,!1,null,null,null)),M=B.exports,N=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},G=[],D={name:"Home",components:{}},I=D,J=Object(f["a"])(I,$,G,!1,null,null,null),F=J.exports;a["a"].use(N["a"]);var Q=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],V=new N["a"]({routes:Q}),L=V,Y=n("bc3a"),K=n.n(Y);a["a"].use(i["a"]);var X=new i["a"].Store({state:{users:[]},mutations:{SET_USERS_TO_VUEX:function(e,t){e.users=t}},actions:{GET_USERS_FROM_API:function(e){var t=e.commit;return K()("http://localhost:3000/users",{method:"GET"}).then((function(e){t("SET_USERS_TO_VUEX",e.data)}))}},getters:{USERS:function(e){return e.users}}}),Z=X;a["a"].config.productionTip=!1,new a["a"]({router:L,store:Z,render:function(e){return e(M)}}).$mount("#app")},"6a35":function(e,t,n){"use strict";n("dca8")},"7d24":function(e,t,n){"use strict";n("d982")},"85ec":function(e,t,n){},"99e0":function(e,t,n){"use strict";n("f8b7")},cf5a:function(e,t,n){e.exports=n.p+"img/close.41450a58.svg"},d76d:function(e,t,n){"use strict";n("e1e6")},d982:function(e,t,n){},dca8:function(e,t,n){},e1e6:function(e,t,n){},e596:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAcElEQVRIx+3VsQ3AIAwF0evYzTMhsREdu9GRAkW4Jf5FCt8ATxTYhuxXNZqGWaw4tZkwdZgQ9TKDEaEOUyjfqeoYwFH1DjKmYw41sds3Gd0xm+r3TJZpEn1I2YjIhla2RoSLTbhqhctfeI6EBzKT9QBDLGJB1XTqkwAAAABJRU5ErkJggg=="},f8b7:function(e,t,n){}});
//# sourceMappingURL=app.66b4996a.js.map