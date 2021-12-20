import{R as D,q as M,s as d,E as L,o as a,c as l,a as e,t,u as o,g as c,e as N,d as g,w as z,ag as x,ah as B,F as _,l as R,n as S}from"./vendor.d09266b0.js";import{r as T}from"./index.bf84c9e9.js";import{_ as I}from"./DeletionModal.6046e693.js";import{L as V}from"./index.fc726535.js";const E={key:0,class:"bg-white shadow-md sm:rounded-md"},F={class:"max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8"},q={class:"text-3xl font-bold leading-tight text-gray-900"},A={key:2,class:"mt-8"},G={class:"text-sm text-gray-500"},H={class:"text-black"},J={class:"flex justify-end items-center"},K={class:"flex"},P={class:"ring-1 ring-gray-300 rounded-md bg-white text-md overflow-hidden"},Q={class:"min-w-full divide-y divide-gray-200"},U={class:"bg-gray-50"},W={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},X={scope:"col",class:"sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},Y={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider hidden md:table-cell"},Z={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},ee={class:"px-2 sm:px-6 py-4 whitespace-nowrap"},te={class:"flex"},se={class:"text-gray-700 text-sm"},oe={class:"sm:px-6 py-4 whitespace-nowrap"},ae={class:"hidden md:table-cell px-2 sm:px-6 py-4 whitespace-nowrap"},ne={class:"px-2 sm:px-6 py-4 whitespace-nowrap"},le={class:"flex flex-col sm:flex-row"},ge={setup(re){const v=D(),r=M(),i=d(()=>r.getters["nav/getOrgMembership"]),f=d(()=>(i==null?void 0:i.value.orgName)||"\u2026"),y=d(()=>{const s=r.getters["jv/get"]("Membership",`$[?(@.organization_name=="${i==null?void 0:i.value.orgName}")]`);return Object.entries(s).map(([,n])=>n)}),p=d(()=>r.state.nav.currentOrgId),w=d(()=>r.getters["nav/isOrgContextLoading"]),m=d(()=>r.getters["nav/isOwner"]),u=L(!1),b=()=>u.value=!0,k=async()=>{console.log(`Deleting organization with ID ${p.value}`),await r.dispatch("jv/delete",`organizations/${p.value}`),r.commit("jv/deleteRecord",{_jv:{type:"Organization",id:p.value}}),v.push({name:"org-management"})},$=()=>console.log("TODO: open invite modal"),O=()=>console.log("TODO: open modal to confirm removal"),j=()=>console.log("TODO: open modal to change role");return(s,h)=>(a(),l(_,null,[s.$route.meta.title?(a(),l("header",E,[e("div",F,[e("h1",q,t(s.$t("org.members"))+" "+t(s.$t("of"))+" "+t(o(f)),1)])])):c("",!0),o(w)?(a(),N(V,{key:1})):(a(),l("div",A,[g(I,{open:u.value,onCloseModal:h[0]||(h[0]=n=>u.value=!1),onDeleteClicked:k,"modal-title":"delete-org-modal.title"},{default:z(()=>[e("p",G,t(s.$t("delete-org-modal.message")),1)]),_:1},8,["open"]),e("div",H,[e("div",J,[e("div",K,[o(m)?(a(),l("div",{key:0,class:"m-2 gray-button font-semibold",onClick:b},[g(o(x),{class:"w-4 h-4 mr-2"}),e("span",null,t(s.$t("org.delete")),1)])):c("",!0),o(m)?(a(),l("div",{key:1,class:"m-2 mr-0 gray-button font-semibold",onClick:$},[g(o(B),{class:"w-4 h-4 mr-2"}),e("span",null,t(s.$t("org.invite")),1)])):c("",!0)])]),e("div",P,[e("table",Q,[e("thead",U,[e("tr",null,[e("th",W,t(s.$t("name")),1),e("th",X,t(s.$t("email")),1),e("th",Y,t(s.$t("role.singular")),1),e("th",Z,t(s.$t("actions")),1)])]),e("tbody",null,[(a(!0),l(_,null,R(o(y),(n,C)=>(a(),l("tr",{key:n._jv.id,class:S([C%2==0?"bg-white":"bg-gray-50"])},[e("td",ee,[e("div",te,t(n.user.first_name)+" "+t(n.user.last_name),1),e("div",se,t(n.user.username),1)]),e("td",oe,t(n.user.email),1),e("td",ae,t(s.$t(o(T)(n.role))),1),e("td",ne,[e("div",le,[o(m)?(a(),l("div",{key:0,class:"btn-sm m-2 gray-button font-semibold w-max",onClick:j},t(s.$t("role.change")),1)):c("",!0),o(m)?(a(),l("div",{key:1,class:"btn-sm m-2 mr-0 gray-button font-semibold w-max",onClick:O},[g(o(x),{class:"w-4 h-4 mr-2"}),e("span",null,t(s.$t("remove")),1)])):c("",!0)])])],2))),128))])])])])]))],64))}};export{ge as default};
