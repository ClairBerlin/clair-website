import{q as $,s as j,ak as z,D as V,G as v,S as C,v as p,r as N,o as l,c,a as e,t as s,g as B,u as o,d as f,an as D,b as x,w as M,al as b,am as y,F as S}from"./vendor.eafa4657.js";const F={key:0,class:"bg-white shadow-md sm:rounded-md"},T={class:"max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8"},E={class:"text-3xl font-bold leading-tight text-gray-900"},U={class:"max-w-sm sm:max-w-lg mt-8"},q={key:0,class:"shadow-md mt-4 rounded-md flex items-center bg-red-50 border-l-4 border-red-400 p-4"},G={class:"flex"},R={class:"flex-shrink-0"},A={class:"ml-3"},H=x(" Find their contact information here. "),J={key:1,class:"text-black p-4 card rounded-md ring-1 ring-gray-300 bg-white"},K={class:"form-control"},L={class:"label"},P={class:"label-text text-black font-bold"},Q=["placeholder"],W={class:"form-control py-4"},X={class:"label"},Y={class:"label-text text-black font-bold"},Z=["placeholder"],ae={setup(ee){const i=$(),a=j(),g=z(),{t:h}=V(),r=v(void 0),n=v(void 0);C(async()=>await i.dispatch("jv/get",`organizations/${a.params.orgId}`));const u=p(()=>i.getters["jv/get"]({_jv:{type:"Organization",id:a.params.orgId}})),w=p(()=>i.getters["authuser/getMembershipByOrgId"](a.params.orgId)),k=p(()=>{var t;return((t=w.value)==null?void 0:t.role)==="O"}),O=async()=>{if(r.value||n.value){let t={_jv:{type:"Organization",id:a.params.orgId}};r.value&&(t.name=r.value),n.value&&(t.description=n.value);try{await i.dispatch("jv/patch",[t,{url:`organizations/${a.params.orgId}/`}]),g.success(h("org.updateSuccess"))}catch{g.error(h("org.updateError"))}}};return(t,d)=>{var _;const I=N("router-link");return l(),c(S,null,[t.$route.meta.title?(l(),c("header",F,[e("div",T,[e("h1",E,s(t.$t("org.edit")),1)])])):B("",!0),e("div",U,[o(k)?(l(),c("div",J,[e("div",K,[e("label",L,[e("span",P,s(t.$t("org.name")),1)]),b(e("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=m=>r.value=m),placeholder:o(u).name,class:"input-bordered como-focus rounded-md bg-white text-gray-600"},null,8,Q),[[y,r.value,void 0,{trim:!0}]])]),e("div",W,[e("label",X,[e("span",Y,s(t.$t("description")),1)]),b(e("textarea",{type:"text","onUpdate:modelValue":d[1]||(d[1]=m=>n.value=m),placeholder:((_=o(u))==null?void 0:_.description)||"(optional)",class:"como-focus area rounded-md h-24 text-gray-600"},null,8,Z),[[y,n.value,void 0,{trim:!0}]])]),e("button",{class:"mt-2 btn gray-button font-semibold",onClick:O},s(t.$t("update")),1)])):(l(),c("div",q,[e("div",G,[e("div",R,[f(o(D),{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",A,[x(" Only the Owner of an organization can change the name and/or description. Contact the Owner of "+s(o(u).name)+". "+s(" ")+" ",1),f(I,{to:{name:"org-management-detail",params:{orgId:o(a).params.orgId}},class:"font-medium underline text-red-700 hover:text-red-600"},{default:M(()=>[H]),_:1},8,["to"])])])]))])],64)}}};export{ae as default};