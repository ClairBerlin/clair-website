var L=Object.defineProperty,E=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var j=(n,o,a)=>o in n?L(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,M=(n,o)=>{for(var a in o||(o={}))P.call(o,a)&&j(n,a,o[a]);if(O)for(var a of O(o))U.call(o,a)&&j(n,a,o[a]);return n},D=(n,o)=>E(n,G(o));import{o as i,e as X,w as p,d as u,a as e,u as d,Y as T,Z as Y,_ as Z,a6 as A,af as H,b as J,t as s,ag as K,X as Q,V as W,s as ee,R as te,q as se,G as v,v as $,S as oe,U as ae,c as r,g as y,F as z,l as ne,n as le}from"./vendor.2f240eb0.js";import{r as ie}from"./index.8fc35793.js";const re={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},de=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1),ce={class:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"},me={class:"hidden sm:block absolute top-0 right-0 pt-4 pr-4"},ue=e("span",{class:"sr-only"},"Close",-1),ge={class:"sm:flex sm:items-start"},pe={class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},he={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},fe={class:"mt-2"},ye={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},xe={props:{open:{type:Boolean,required:!0},modalTitle:{type:String,required:!0}},emits:["closeModal","deleteClicked"],setup(n,{emit:o}){const a=()=>o("closeModal"),c=()=>{o("deleteClicked"),a()};return(m,h)=>(i(),X(d(W),{as:"template",show:n.open},{default:p(()=>[u(d(Q),{as:"div",class:"fixed z-10 inset-0 overflow-y-auto",onClose:a},{default:p(()=>[e("div",re,[u(d(T),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>[u(d(Y),{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),de,u(d(T),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:p(()=>[e("div",ce,[e("div",me,[e("button",{type:"button",class:"bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:a},[ue,u(d(Z),{class:"h-6 w-6","aria-hidden":"true"})])]),e("div",ge,[e("div",pe,[u(d(A),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),e("div",he,[u(d(H),{as:"h3",class:"text-lg leading-6 font-medium text-gray-900"},{default:p(()=>[J(s(m.$t(n.modalTitle)),1)]),_:1}),e("div",fe,[K(m.$slots,"default")])])]),e("div",ye,[e("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:c},s(m.$t("delete")),1),e("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm",onClick:a},s(m.$t("cancel")),1)])])]),_:3})])]),_:3})]),_:3},8,["show"]))}},ve={key:0,class:"bg-white shadow-md sm:rounded-md"},_e={class:"max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8"},be={class:"text-3xl font-bold leading-tight text-gray-900"},we={key:1},$e={key:2,class:"mt-8"},ke={class:"text-sm text-gray-500"},Ce={class:"text-black"},Oe={class:"flex justify-end items-center"},je={class:"flex"},Me={class:"ring-1 ring-gray-300 rounded-md bg-white text-md overflow-hidden"},De={class:"min-w-full divide-y divide-gray-200"},Te={class:"bg-gray-50"},ze={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},Be={scope:"col",class:"sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},Re={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider hidden md:table-cell"},Se={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},Ne={class:"px-2 sm:px-6 py-4 whitespace-nowrap"},Ve={class:"flex"},Ie={class:"text-gray-700 text-sm"},qe={class:"sm:px-6 py-4 whitespace-nowrap"},Fe={class:"hidden md:table-cell px-2 sm:px-6 py-4 whitespace-nowrap"},Le={class:"px-2 sm:px-6 py-4 whitespace-nowrap"},Ee={class:"flex flex-col sm:flex-row"},Xe={setup(n){const o=ee(),a=te(),c=se(),m=v([]),h=v(),B=$(()=>{var t;return((t=h==null?void 0:h.value)==null?void 0:t.name)||"\u2026"}),f=$(()=>o.params.orgId);oe(async()=>k()),ae(f,()=>k());const _=v(!0),R=$(()=>c.getters["authuser/getMembershipByOrgId"](o.params.id)),x=()=>{var t;return((t=R.value)==null?void 0:t.role)==="O"},b=v(!1),S=()=>b.value=!0,N=async()=>{await c.dispatch("jv/delete",`organizations/${f.value}`),a.push({name:"org-management"})},V=()=>console.log("TODO: open invite modal"),I=()=>console.log("TODO: open modal to confirm removal"),q=()=>console.log("TODO: open modal to change role"),F=(t,g)=>ie(Object.values(t).find(l=>l.user_name===g).role),k=async()=>{m.value=[],_.value=!0,h.value=await c.dispatch("jv/get",`organizations/${f.value}`);const t=await c.dispatch("jv/get",`organizations/${f.value}/users`),g=await c.dispatch("jv/get",`organizations/${f.value}/memberships`),l=Object.keys(t).map(async w=>{const C=await c.dispatch("jv/get",`users/${w}`);m.value.push(D(M({},C),{role:F(g,C.username)}))});await Promise.all(l),_.value=!1};return(t,g)=>(i(),r(z,null,[t.$route.meta.title?(i(),r("header",ve,[e("div",_e,[e("h1",be,s(t.$t("org.members"))+" "+s(t.$t("of"))+" "+s(d(B)),1)])])):y("",!0),_.value?(i(),r("div",we,s(t.$t("loading...")),1)):(i(),r("div",$e,[u(xe,{open:b.value,onCloseModal:g[0]||(g[0]=l=>b.value=!1),onDeleteClicked:N,"modal-title":"delete-org-modal.title"},{default:p(()=>[e("p",ke,s(t.$t("delete-org-modal.message")),1)]),_:1},8,["open"]),e("div",Ce,[e("div",Oe,[e("div",je,[x?(i(),r("div",{key:0,class:"btn-sm m-2 gray-button font-semibold",onClick:S},s(t.$t("org.delete")),1)):y("",!0),x?(i(),r("div",{key:1,class:"btn-sm m-2 mr-0 gray-button font-semibold",onClick:V},s(t.$t("org.invite")),1)):y("",!0)])]),e("div",Me,[e("table",De,[e("thead",Te,[e("tr",null,[e("th",ze,s(t.$t("name")),1),e("th",Be,s(t.$t("email")),1),e("th",Re,s(t.$t("role.singular")),1),e("th",Se,s(t.$t("actions")),1)])]),e("tbody",null,[(i(!0),r(z,null,ne(m.value,(l,w)=>(i(),r("tr",{key:l.id,class:le([w%2==0?"bg-white":"bg-gray-50"])},[e("td",Ne,[e("div",Ve,s(l.first_name)+" "+s(l.last_name),1),e("div",Ie,s(l.username),1)]),e("td",qe,s(l.email),1),e("td",Fe,s(t.$t(l.role)),1),e("td",Le,[e("div",Ee,[x?(i(),r("div",{key:0,class:"btn-sm m-2 gray-button font-semibold w-max",onClick:q},s(t.$t("role.change")),1)):y("",!0),x?(i(),r("div",{key:1,class:"btn-sm m-2 mr-0 gray-button font-semibold w-max",onClick:I},s(t.$t("remove")),1)):y("",!0)])])],2))),128))])])])])]))],64))}};export{Xe as default};
