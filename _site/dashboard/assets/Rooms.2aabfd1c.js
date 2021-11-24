import{s as O,q as M,v as p,G as h,S as I,U as z,r as D,o as l,c as n,t as s,u,d as i,w as _,a as e,b as r,F as V,l as B,n as F,ag as N,g as L,a7 as S}from"./vendor.7fd933d8.js";import{_ as q}from"./DeletionModal.71b63de9.js";const P={key:0},E={key:1,class:"ring-1 ring-gray-300 rounded-md bg-white text-md overflow-hidden mt-8"},G={class:"text-sm text-gray-500"},T={class:"min-w-full divide-y divide-gray-200"},U={class:"bg-gray-50"},A={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},H={scope:"col",class:"sm:px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"},J=e("sup",null,"2",-1),K=r("] "),Q={scope:"col",class:"sm:px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"},W={scope:"col",class:"sm:px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider hidden md:table-cell"},X={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},Y={scope:"col",class:"sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},Z={class:"px-2 sm:px-6 py-4 whitespace-nowrap"},ee={class:"px-2 sm:px-6 py-4 whitespace-nowrap text-right"},te={class:"px-2 sm:px-6 py-4 whitespace-nowrap text-right"},se={class:"hidden md:table-cell px-2 sm:px-6 py-4 whitespace-nowrap text-right"},oe={class:"hidden md:table-cell px-2 sm:px-6 py-4 whitespace-nowrap"},ae={class:"px-2 sm:px-6 py-4 whitespace-nowrap"},le={class:"flex flex-col sm:flex-row"},ne=["onClick"],ie={key:2,class:"shadow-md mt-4 rounded-md max-w-sm flex items-center bg-yellow-50 border-l-4 border-yellow-400 p-4"},re={class:"flex"},de={class:"flex-shrink-0"},ce={class:"ml-3"},ue={setup(me){const f=O(),c=M(),v=p(()=>f.params.orgId),g=h(void 0),k=p(()=>{var t;return((t=g.value)==null?void 0:t.length)>0}),x=h(!0),y=h(!1),b=h(),$=()=>y.value=!0,j=p(()=>c.getters["authuser/getMembershipByOrgId"](f.params.orgId)),R=p(()=>{var t;return((t=j.value)==null?void 0:t.role)==="O"}),C=async()=>{await c.dispatch("jv/delete",`rooms/${b.value}`),w()};async function w(){x.value=!0;const t=await c.dispatch("jv/get",["rooms",{params:{"filter[organization]":v.value}}]),a=Object.entries(t);console.log(`Organization has ${a.length} room(s).`),g.value=a.map(([o,m])=>m);const d=a.map(([o,m])=>(console.log(`Fetch related objects for room ${o}.`),c.dispatch("jv/getRelated",`rooms/${o}`)));await Promise.all(d),x.value=!1}return I(async()=>w()),z(v,()=>w()),(t,a)=>{const d=D("router-link");return x.value?(l(),n("div",P,s(t.$t("loading...")),1)):u(k)?(l(),n("div",E,[i(q,{open:y.value,onCloseModal:a[0]||(a[0]=o=>y.value=!1),onDeleteClicked:C,"modal-title":"delete-room-modal.title"},{default:_(()=>[e("p",G,s(t.$t("delete-room-modal.message")),1)]),_:1},8,["open"]),e("table",T,[e("thead",U,[e("tr",null,[e("th",A,s(t.$t("room.name")),1),e("th",H,[r(s(t.$t("room.size"))+" [m",1),J,K]),e("th",Q,s(t.$t("room.height"))+" [m] ",1),e("th",W,s(t.$t("room.maxOccupancy")),1),e("th",X,s(t.$t("site.singular")),1),e("th",Y,s(t.$t("action")),1)])]),e("tbody",null,[(l(!0),n(V,null,B(g.value,(o,m)=>(l(),n("tr",{key:o._jv.id,class:F([m%2==0?"bg-white":"bg-gray-50"])},[e("td",Z,[i(d,{class:"como-link",to:{name:"room",params:{roomId:o._jv.id}}},{default:_(()=>[r(s(o.name),1)]),_:2},1032,["to"])]),e("td",ee,s(o.size_sqm||"-"),1),e("td",te,s(o.height_m||"-"),1),e("td",se,s(o.max_occupancy||"-"),1),e("td",oe,[i(d,{class:"como-link",to:{name:"site",params:{siteId:o.site._jv.id}}},{default:_(()=>[r(s(o.site.name),1)]),_:2},1032,["to"])]),e("td",ae,[e("div",le,[u(R)?(l(),n("div",{key:0,class:"btn-sm gray-button font-semibold w-max",onClick:()=>{$(),b.value=o._jv.id}},[i(u(N),{class:"w-4 h-4 mr-2"}),e("span",null,s(t.$t("remove")),1)],8,ne)):L("",!0)])])],2))),128))])])])):(l(),n("div",ie,[e("div",re,[e("div",de,[i(u(S),{class:"h-5 w-5 text-yellow-400","aria-hidden":"true"})]),e("div",ce,[r(s(t.$t("room.noRoom"))+". ",1),i(d,{to:"sites",class:"font-medium underline text-yellow-700 hover:text-yellow-600"},{default:_(()=>[r(s(t.$t("room.siteForRoom")),1)]),_:1})])])]))}}};export{ue as default};