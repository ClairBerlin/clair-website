import{q as w,ak as g,R as k,C as S,s as j,E as l,o as V,c as $,a as e,t as a,al as d,am as n}from"./vendor.d09266b0.js";const U={class:"max-w-sm sm:max-w-lg"},A={class:"text-black p-4 card rounded-md shadow-md bg-white"},I={class:"form-control"},E={class:"label"},z={class:"label-text text-black font-bold"},B={class:"form-control py-4"},C={class:"label"},D={class:"label-text text-black font-bold"},N={class:"form-control"},O={class:"label"},R={class:"label-text text-black font-bold"},T={class:"form-control"},q={class:"label"},M={class:"label-text text-black font-bold"},Z={class:"form-control"},F={class:"label"},G={class:"label-text text-black font-bold"},H={class:"form-control"},J={class:"label"},K={class:"label-text text-black font-bold"},Q={setup(L){const b=w(),m=g(),_=k(),{t:f}=S(),y=j(()=>b.state.nav.currentOrgId),r=l(void 0),i=l(void 0),c=l(void 0),u=l(void 0),p=l(void 0),v=l(void 0),h=async()=>{if(r.value&&c.value&&v.value&&p.value){const o=await x();let t={_jv:{type:"Site",relationships:{operator:{data:{type:"Organization",id:y.value}},address:{data:{type:"Address",id:o}}}},name:r.value};i.value&&(t.description=i.value);try{const{_jv:s}=await b.dispatch("jv/post",[t,{url:"sites/"}]);_.push({name:"sites",params:{siteId:s.id}})}catch{m.error(f("site.createError"))}}else m.error(f("site.missingNameAddress"))},x=async()=>{let o={_jv:{type:"Address"},street1:c.value,zip:p.value,city:v.value};u.value&&(o.street2=u.value);try{const{_jv:t}=await b.dispatch("jv/post",[o,{url:"/addresses/"}]);return t.id}catch(t){m.error(f("address.createError")),console.log(t)}};return(o,t)=>(V(),$("div",U,[e("div",A,[e("div",I,[e("label",E,[e("span",z,a(o.$t("site.name")),1)]),d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s),class:"input-bordered como-focus rounded bg-white text-gray-600"},null,512),[[n,r.value,void 0,{trim:!0}]])]),e("div",B,[e("label",C,[e("span",D,a(o.$t("description")),1)]),d(e("textarea",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>i.value=s),placeholder:"(optional)",class:"como-focus rounded h-24 text-gray-600"},null,512),[[n,i.value,void 0,{trim:!0}]])]),e("div",N,[e("label",O,[e("span",R,a(o.$t("address.street1")),1)]),d(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>c.value=s),class:"input-bordered como-focus rounded bg-white text-gray-600"},null,512),[[n,c.value,void 0,{trim:!0}]])]),e("div",T,[e("label",q,[e("span",M,a(o.$t("address.street2")),1)]),d(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>u.value=s),class:"input-bordered como-focus rounded bg-white text-gray-600"},null,512),[[n,u.value,void 0,{trim:!0}]])]),e("div",Z,[e("label",F,[e("span",G,a(o.$t("address.zip")),1)]),d(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=s=>p.value=s),class:"input-bordered como-focus rounded bg-white text-gray-600"},null,512),[[n,p.value,void 0,{trim:!0}]])]),e("div",H,[e("label",J,[e("span",K,a(o.$t("address.city")),1)]),d(e("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=s=>v.value=s),class:"input-bordered como-focus rounded bg-white text-gray-600"},null,512),[[n,v.value,void 0,{trim:!0}]])]),e("button",{class:"mt-2 btn gray-button font-semibold",onClick:h},a(o.$t("site.add")),1)])]))}};export{Q as default};
