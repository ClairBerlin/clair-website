import{u as v,aj as h,R as y,C as f,c as i,o as g,f as b,b as x,g as I,d as S}from"./vendor.2e3a8e12.js";import{_ as O}from"./SiteForm.f431c358.js";import"./TextInput.c2c3ea64.js";import"./camelCase.8465eaba.js";import"./SubmitButton.7152d9eb.js";const A={class:"max-w-sm sm:max-w-lg mt-8"},B={class:"bg-white rounded-md shadow-md p-6"},V={setup(E){const c=v(),n=h(),u=y(),{t:d}=f(),p=i(()=>c.state.nav.currentOrgId),m=i(()=>c.getters["nav/isOwner"]),l=async({name:t,description:e,street1:a,street2:r,zip:s,city:o})=>{const j=await w({street1:a,street2:r,zip:s,city:o});_({name:t,description:e,addressId:j})},_=async({name:t,description:e,addressId:a})=>{let r={_jv:{type:"Site",relationships:{operator:{data:{type:"Organization",id:p.value}},address:{data:{type:"Address",id:a}}}},name:t,description:e};try{const{_jv:s}=await c.dispatch("jv/post",[r,{url:"sites/"}]);u.push({name:"sites",params:{siteId:s.id}})}catch{n.error(d("site.createError"))}},w=async({street1:t,street2:e,zip:a,city:r})=>{let s={_jv:{type:"Address"},street1:t,street2:e,zip:a,city:r};try{const{_jv:o}=await c.dispatch("jv/post",[s,{url:"/addresses/"}]);return o.id}catch(o){n.error(d("address.createError")),console.log(o)}};return(t,e)=>(g(),b("div",A,[x("div",B,[I(O,{"allow-edit":S(m),"button-text":"site.add","on-submit":l},null,8,["allow-edit"])])]))}};export{V as default};
