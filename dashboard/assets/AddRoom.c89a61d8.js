import{u as f,aj as w,Q as b,R as j,C as v,c,o as x,f as R,b as y,g as I,d as B}from"./vendor.2e3a8e12.js";import{_ as h}from"./RoomForm.31b22ca4.js";import"./TextInput.c2c3ea64.js";import"./camelCase.8465eaba.js";import"./SubmitButton.7152d9eb.js";const S={class:"max-w-sm sm:max-w-lg mt-8"},k={class:"bg-white rounded-md shadow-md p-6"},q={setup(C){const s=f(),n=w(),m=b(),d=j(),{t:u}=v(),o=c(()=>m.params.siteId),i=c(()=>s.getters["nav/isOwner"]),p=async({name:a,description:r,size:e,height:t,capacity:l})=>{const _={_jv:{type:"Room",relationships:{site:{data:{type:"Site",id:o.value}}}},name:a,description:r,size_sqm:(e==null?void 0:e.replace(",","."))||void 0,height_m:(t==null?void 0:t.replace(",","."))||void 0,max_occupancy:l||void 0};try{await s.dispatch("jv/post",[_,{url:"rooms/"}]),d.push({name:"site",params:{siteId:o.value}})}catch{n.error(u("room.createError"))}};return(a,r)=>(x(),R("div",S,[y("div",k,[I(h,{"allow-edit":B(i),"button-text":"room.add","on-submit":p},null,8,["allow-edit"])])]))}};export{q as default};
