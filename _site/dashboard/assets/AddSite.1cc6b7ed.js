import{q as g,ak as k,s as S,R as j,D as V,v as $,G as l,o as U,c as A,a as e,t as a,al as d,am as n}from"./vendor.eafa4657.js";const I={class:"max-w-sm sm:max-w-lg"},D={class:"text-black p-4 card rounded-md shadow-md bg-white"},z={class:"form-control"},B={class:"label"},E={class:"label-text text-black font-bold"},N={class:"form-control py-4"},R={class:"label"},C={class:"label-text text-black font-bold"},T={class:"form-control"},q={class:"label"},G={class:"label-text text-black font-bold"},M={class:"form-control"},O={class:"label"},Z={class:"label-text text-black font-bold"},F={class:"form-control"},H={class:"label"},J={class:"label-text text-black font-bold"},K={class:"form-control"},L={class:"label"},P={class:"label-text text-black font-bold"},X={setup(Q){const f=g(),b=k(),_=S(),y=j(),{t:m}=V(),h=$(()=>_.params.orgId),r=l(void 0),i=l(void 0),u=l(void 0),c=l(void 0),p=l(void 0),v=l(void 0),x=async()=>{if(r.value&&u.value&&v.value&&p.value){const o=await w();let t={_jv:{type:"Site",relationships:{operator:{data:{type:"Organization",id:h.value}},address:{data:{type:"Address",id:o}}}},name:r.value};i.value&&(t.description=i.value);try{const{_jv:s}=await f.dispatch("jv/post",[t,{url:"sites/"}]);y.push({name:"sites",params:{siteId:s.id}})}catch{b.error(m("site.createError"))}}else b.error(m("site.missingNameAddress"))},w=async()=>{let o={_jv:{type:"Address"},street1:u.value,zip:p.value,city:v.value};c.value&&(o.street2=c.value);try{const{_jv:t}=await f.dispatch("jv/post",[o,{url:"/addresses/"}]);return t.id}catch(t){b.error(m("address.createError")),console.log(t)}};return(o,t)=>(U(),A("div",I,[e("div",D,[e("div",z,[e("label",B,[e("span",E,a(o.$t("site.name")),1)]),d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s),class:"input-bordered como-focus rounded bg-white text-gray-600"},null,512),[[n,r.value,void 0,{trim:!0}]])]),e("div",N,[e("label",R,[e("span",C,a(o.$t("description")),1)]),d(e("textarea",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>i.value=s),placeholder:"(optional)",class:"como-focus rounded h-24 text-gray-600"},null,512),[[n,i.value,void 0,{trim:!0}]])]),e("div",T,[e("label",q,[e("span",G,a(o.$t("address.street1")),1)]),d(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>u.value=s),class:"input-bordered como-focus rounded bg-white text-gray-600"},null,512),[[n,u.value,void 0,{trim:!0}]])]),e("div",M,[e("label",O,[e("span",Z,a(o.$t("address.street2")),1)]),d(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>c.value=s),class:"input-bordered como-focus rounded bg-white text-gray-600"},null,512),[[n,c.value,void 0,{trim:!0}]])]),e("div",F,[e("label",H,[e("span",J,a(o.$t("address.zip")),1)]),d(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=s=>p.value=s),class:"input-bordered como-focus rounded bg-white text-gray-600"},null,512),[[n,p.value,void 0,{trim:!0}]])]),e("div",K,[e("label",L,[e("span",P,a(o.$t("address.city")),1)]),d(e("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=s=>v.value=s),class:"input-bordered como-focus rounded bg-white text-gray-600"},null,512),[[n,v.value,void 0,{trim:!0}]])]),e("button",{class:"mt-2 btn gray-button font-semibold",onClick:x},a(o.$t("site.add")),1)])]))}};export{X as default};