import{C as F,Q,q as Z,ak as G,s as m,E as n,r as H,u as d,o as i,e as I,c,a as e,t,al as x,am as y,g as R,d as b,w as D,x as J,b as k,F as K,l as P,n as W,ag as X,a7 as Y}from"./vendor.d09266b0.js";import{_ as ee}from"./DeletionModal.6046e693.js";import{L as se}from"./index.fc726535.js";const te={key:1,class:"divide-y-2 divide-gray-300"},oe={class:"space-y-8 divide-y divide-gray-200"},de={class:"mt-6 sm:mt-5 space-y-6 sm:space-y-5"},ae={class:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"},ie={for:"site-name",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},re={class:"mt-1 sm:mt-0 sm:col-span-2"},le=["placeholder"],ne={class:"space-y-6 sm:space-y-5"},me={class:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"},ce={for:"description",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},ue={class:"mt-1 sm:mt-0 sm:col-span-2"},pe=["placeholder"],ge={class:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"},ve={for:"street-address",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},he={class:"mt-1 sm:mt-0 sm:col-span-2"},_e=["placeholder"],fe={class:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"},xe={for:"street-address2",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},ye={class:"mt-1 sm:mt-0 sm:col-span-2"},we=["placeholder"],be={class:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"},ke={for:"postal-code",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},$e={class:"mt-1 sm:mt-0 sm:col-span-2"},je=["placeholder"],Se={class:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"},Ce={for:"city",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},Re={class:"mt-1 sm:mt-0 sm:col-span-2"},De=["placeholder"],Ve={class:"pt-5"},Ie={class:"flex justify-end"},Le={key:0,class:"text-md mt-8 pt-8"},ze={class:"text-sm text-gray-500"},Oe={class:"flex justify-between items-center"},Ue={class:"font-bold text-xl"},Me={class:"flex flex-row"},Ne={class:"min-w-full divide-y divide-gray-200 ring-1 ring-gray-300 rounded-md bg-white overflow-hidden"},Be={class:"bg-gray-50"},Ee={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},Ae={scope:"col",class:"sm:px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"},Te=e("sup",null,"2",-1),qe=k("] "),Fe={scope:"col",class:"sm:px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"},Qe={scope:"col",class:"sm:px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider hidden md:table-cell"},Ze={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},Ge={class:"px-2 sm:px-6 py-4 whitespace-nowrap"},He={class:"px-2 sm:px-6 py-4 whitespace-nowrap text-right"},Je={class:"px-2 sm:px-6 py-4 whitespace-nowrap text-right"},Ke={class:"hidden md:table-cell px-2 sm:px-6 py-4 whitespace-nowrap text-right"},Pe={class:"px-2 sm:px-6 py-4 whitespace-nowrap"},We={class:"flex flex-col sm:flex-row"},Xe=["onClick"],Ye={key:1,class:"shadow-md mt-4 rounded-md max-w-sm flex items-center bg-yellow-50 border-l-4 border-yellow-400 p-4"},es={class:"flex"},ss={class:"flex-shrink-0"},ts={class:"ml-3"},rs={setup(os){const{t:$}=F(),U=Q(),r=Z(),j=G(),L=m(()=>r.getters["nav/isOrgContextLoading"]),u=m(()=>U.params.siteId),l=m(()=>r.getters["jv/get"]({_jv:{type:"Site",id:u.value}})),z=m(()=>l.value.address._jv.id),O=m(()=>{const s=r.getters["jv/get"]("Room",`$[?(@._jv.relationships.site.data.id=="${u.value}")]`);return Object.entries(s).map(([,w])=>w)}),M=m(()=>{var s;return!L.value&&((s=O.value)==null?void 0:s.length)>0}),S=m(()=>r.getters["nav/isOwner"]),V=n(!1),C=n(),N=()=>V.value=!0,B=async()=>{console.log(`Deleting room with ID ${C.value}`),await r.dispatch("jv/delete",`rooms/${C.value}`),r.commit("jv/deleteRecord",{_jv:{type:"Room",id:C.value}})},p=n(void 0),g=n(void 0),v=n(void 0),h=n(void 0),_=n(void 0),f=n(void 0),E=async()=>{let s={_jv:{type:"Site",id:u.value}};p.value&&(s.name=p.value),g.value&&(s.description=g.value);try{await r.dispatch("jv/patch",[s,{url:`sites/${u.value}/`}]),j.success($("site.updateSuccess"))}catch(a){j.error($("site.updateError")),console.log(a)}},A=async()=>{let s={_jv:{type:"Address",id:z.value}};v.value&&(s.street1=v.value),h.value&&(s.street2=h.value),_.value&&(s.zip=_.value),f.value&&(s.city=f.value);try{await r.dispatch("jv/patch",[s,{url:`addresses/${z.value}/`}]),j.success($("address.updateSuccess"))}catch{j.error($("address.updateError"))}},T=async s=>{s==null||s.preventDefault(),(p.value||g.value)&&(E(),p.value=void 0,g.value=void 0),(v.value||h.value||_.value||f.value)&&(A(),v.value=void 0,h.value=void 0,_.value=void 0,f.value=void 0)};return(s,a)=>{const w=H("router-link");return d(L)?(i(),I(se,{key:0})):(i(),c("div",te,[e("form",oe,[e("div",null,[e("div",de,[e("div",ae,[e("label",ie,t(s.$t("site.name")),1),e("div",re,[x(e("input",{type:"text",name:"site-name",id:"site-name","onUpdate:modelValue":a[0]||(a[0]=o=>p.value=o),placeholder:d(l).name,class:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"},null,8,le),[[y,p.value,void 0,{trim:!0}]])])])])]),e("div",ne,[e("div",me,[e("label",ce,t(s.$t("description"))+" ("+t(s.$t("optional"))+") ",1),e("div",ue,[x(e("textarea",{id:"description",name:"description",rows:"3","onUpdate:modelValue":a[1]||(a[1]=o=>g.value=o),placeholder:d(l).description||"-",class:"max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"},null,8,pe),[[y,g.value,void 0,{trim:!0}]])])]),e("div",ge,[e("label",ve,t(s.$t("address.street1")),1),e("div",he,[x(e("input",{type:"text",name:"street-address",id:"street-address",autocomplete:"street-address","onUpdate:modelValue":a[2]||(a[2]=o=>v.value=o),placeholder:d(l).address.street1,class:"block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"},null,8,_e),[[y,v.value,void 0,{trim:!0}]])])]),e("div",fe,[e("label",xe,t(s.$t("address.street2")),1),e("div",ye,[x(e("input",{type:"text",name:"street-address2",id:"street-address2","onUpdate:modelValue":a[3]||(a[3]=o=>h.value=o),placeholder:d(l).address.street2,autocomplete:"address-level4",class:"block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"},null,8,we),[[y,h.value,void 0,{trim:!0}]])])]),e("div",be,[e("label",ke,t(s.$t("address.zip")),1),e("div",$e,[x(e("input",{type:"text",name:"postal-code",id:"postal-code",autocomplete:"postal-code","onUpdate:modelValue":a[4]||(a[4]=o=>_.value=o),placeholder:d(l).address.zip,class:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"},null,8,je),[[y,_.value,void 0,{trim:!0}]])])])]),e("div",Se,[e("label",Ce,t(s.$t("address.city")),1),e("div",Re,[x(e("input",{type:"text",name:"city",id:"city",autocomplete:"address-level2","onUpdate:modelValue":a[5]||(a[5]=o=>f.value=o),placeholder:d(l).address.city,class:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"},null,8,De),[[y,f.value,void 0,{trim:!0}]])])]),e("div",Ve,[e("div",Ie,[d(S)?(i(),c("button",{key:0,type:"submit",class:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:T},t(s.$t("site.update")),1)):R("",!0)])])]),d(M)?(i(),c("div",Le,[b(ee,{open:V.value,onCloseModal:a[6]||(a[6]=o=>V.value=!1),onDeleteClicked:B,"modal-title":"delete-room-modal.title"},{default:D(()=>[e("p",ze,t(s.$t("delete-room-modal.message")),1)]),_:1},8,["open"]),e("div",Oe,[e("h2",Ue,t(s.$t("rooms"))+" "+t(s.$t("of"))+" "+t(d(l).name),1),e("div",Me,[d(S)?(i(),I(w,{key:0,class:"btn-sm m-2 mr-0 gray-button font-semibold w-max",to:{name:"addRoom",params:{siteId:d(u)}}},{default:D(()=>[b(d(J),{class:"w-4 h-4 mr-2"}),e("span",null,t(s.$t("room.add")),1)]),_:1},8,["to"])):R("",!0)])]),e("table",Ne,[e("thead",Be,[e("tr",null,[e("th",Ee,t(s.$t("room.name")),1),e("th",Ae,[k(t(s.$t("room.size"))+" [m",1),Te,qe]),e("th",Fe,t(s.$t("room.height"))+" [m] ",1),e("th",Qe,t(s.$t("room.maxOccupancy")),1),e("th",Ze,t(s.$t("action")),1)])]),e("tbody",null,[(i(!0),c(K,null,P(d(O),(o,q)=>(i(),c("tr",{key:o._jv.id,class:W([q%2==0?"bg-white":"bg-gray-50"])},[e("td",Ge,[b(w,{class:"como-link",to:{name:"room",params:{roomId:o._jv.id}}},{default:D(()=>[k(t(o.name),1)]),_:2},1032,["to"])]),e("td",He,t(o.size_sqm||"-"),1),e("td",Je,t(o.height_m||"-"),1),e("td",Ke,t(o.max_occupancy||"-"),1),e("td",Pe,[e("div",We,[d(S)?(i(),c("div",{key:0,class:"btn-sm m-2 mr-0 gray-button font-semibold",onClick:()=>{N(),C.value=o._jv.id}},[b(d(X),{class:"w-4 h-4 mr-2"}),e("span",null,t(s.$t("remove")),1)],8,Xe)):R("",!0)])])],2))),128))])])])):(i(),c("div",Ye,[e("div",es,[e("div",ss,[b(d(Y),{class:"h-5 w-5 text-yellow-400","aria-hidden":"true"})]),e("div",ts,[k(t(s.$t("site.noRooms"))+". ",1),d(S)?(i(),I(w,{key:0,class:"font-medium underline text-yellow-700 hover:text-yellow-600",to:{name:"addRoom",params:{siteId:d(u)}}},{default:D(()=>[k(t(s.$t("room.add"))+".",1)]),_:1},8,["to"])):R("",!0)])])]))]))}}};export{rs as default};
