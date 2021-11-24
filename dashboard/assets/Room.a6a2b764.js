import{s as L,q as P,ak as E,D as G,v as y,G as m,S as A,r as H,o as i,c as r,t as a,a as t,al as b,am as w,u as l,b as h,g as R,e as T,w as C,F as Q,l as J,n as K,d as z,a7 as W,Q as B}from"./vendor.7fd933d8.js";import{d as F}from"./index.a564b57a.js";const X={key:0},Y={key:1},Z={class:"max-w-sm sm:max-w-lg"},tt={class:"text-black mt-2 p-4 card rounded-md shadow-md ring-1 ring-gray-300 bg-white"},et={class:"form-control"},st={class:"label"},ot={class:"label-text text-black font-bold"},at=["placeholder"],lt={class:"form-control py-4"},nt={class:"label"},it={class:"label-text text-black font-bold"},dt=["placeholder"],rt={class:"form-control"},ct={class:"label"},mt={class:"label-text text-black font-bold"},ut=t("sup",null,"2",-1),pt=h("] "),ht=["placeholder"],_t={class:"form-control"},vt={class:"label"},xt={class:"label-text text-black font-bold"},gt=["placeholder"],ft={class:"form-control"},yt={class:"label"},bt={class:"label-text text-black font-bold"},wt=["placeholder"],kt={key:0,class:"ring-1 ring-gray-300 rounded-md bg-white text-md overflow-hidden mt-8"},$t={class:"flex justify-end items-center"},jt={class:"flex flex-row"},It={class:"min-w-full divide-y divide-gray-200"},Rt={class:"bg-gray-50"},Vt={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},Ot={scope:"col",class:"sm:px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"},Ct={scope:"col",class:"sm:px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider"},Dt={scope:"col",class:"sm:px-6 py-3 text-right text-xs font-medium text-gray-500 tracking-wider hidden md:table-cell"},Tt={scope:"col",class:"px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"},zt={class:"px-2 sm:px-6 py-4 whitespace-nowrap"},Bt={class:"px-2 sm:px-6 py-4 whitespace-nowrap text-right"},Ft={class:"px-2 sm:px-6 py-4 whitespace-nowrap text-right"},Mt={class:"px-2 sm:px-6 py-4 whitespace-nowrap text-right"},Nt={class:"px-2 sm:px-6 py-4 whitespace-nowrap"},St={class:"flex flex-col sm:flex-row"},Ut={class:"flex flex-row"},qt=["onClick"],Lt={key:1,class:"flex"},Pt={class:"flex-shrink-0"},Et={class:"ml-3"},Jt={setup(Gt){const D=L(),d=P(),k=E(),{t:$}=G(),n=y(()=>D.params.roomId),u=y(()=>d.getters["jv/get"]({_jv:{type:"Room",id:n.value}})),_=m(void 0),v=m(void 0),x=m(void 0),g=m(void 0),f=m(void 0),V=m([]),M=y(()=>{var e;return!j.value&&((e=V.value)==null?void 0:e.length)>0}),j=m(!0),N=y(()=>d.getters["authuser/getMembershipByOrgId"](D.params.orgId)),I=y(()=>{var e;return((e=N.value)==null?void 0:e.role)==="O"}),S=e=>{if(e==null)return!1;{let s=B().unix();return e.from_timestamp_s<s&&e.to_timestamp_s>s}},U=async()=>{if(_.value||v.value||x.value||g.value||f.value){let e={_jv:{type:"Room",id:n.value}};_.value&&(e.name=_.value),v.value&&(e.description=v.value),x.value&&(e.size_sqm=x.value),g.value&&(e.height_m=g.value),f.value&&(e.max_occupancy=f.value);try{await d.dispatch("jv/patch",[e,{url:`rooms/${n.value}/`}]),O(),k.success($("room.updateSuccess"))}catch(s){k.error($("room.updateError")),console.log(s)}}},q=async e=>{const s={_jv:{type:"Installation",id:e},to_timestamp_s:B().unix()};try{await d.dispatch("jv/patch",[s,{url:`installations/${e}/`}]),k.success($("installation.successTerminate")),O()}catch(c){k.error($("installation.errorTerminate")),console.log(c)}},O=async()=>{var o;j.value=!0,typeof((o=u.value)==null?void 0:o.name)=="undefined"&&(console.log(`Room with ID ${n.value} has not been loaded yet; fetching...`),await d.dispatch("jv/get",`rooms/${n.value}/`)),console.log(`Fetch related objects for room ${n.value}.`),await d.dispatch("jv/getRelated",`rooms/${n.value}`);const e=await d.dispatch("jv/get",`rooms/${n.value}/installations`),s=Object.entries(e);console.log(`Fetched ${s.length} installations`),V.value=s.map(([,p])=>p);const c=s.map(([p])=>(console.log(`Get related objects for installation ${p}.`),d.dispatch("jv/getRelated",`installations/${p}`)));await Promise.all(c),j.value=!1};return A(async()=>O()),(e,s)=>{const c=H("router-link");return j.value?(i(),r("div",X,a(e.$t("loading...")),1)):(i(),r("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[t("label",st,[t("span",ot,a(e.$t("room.name")),1)]),b(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=o=>_.value=o),placeholder:l(u).name,class:"input-bordered como-focus rounded bg-white text-gray-600"},null,8,at),[[w,_.value,void 0,{trim:!0}]])]),t("div",lt,[t("label",nt,[t("span",it,a(e.$t("description")),1)]),b(t("textarea",{type:"text","onUpdate:modelValue":s[1]||(s[1]=o=>v.value=o),placeholder:l(u).description,class:"como-focus rounded h-24 text-gray-600"},null,8,dt),[[w,v.value,void 0,{trim:!0}]])]),t("div",rt,[t("label",ct,[t("span",mt,[h(a(e.$t("room.size"))+" [m",1),ut,pt])]),b(t("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=o=>x.value=o),placeholder:l(u).size_sqm,class:"input-bordered como-focus rounded bg-white text-gray-600"},null,8,ht),[[w,x.value,void 0,{trim:!0}]])]),t("div",_t,[t("label",vt,[t("span",xt,a(e.$t("room.height"))+" [m] ",1)]),b(t("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=o=>g.value=o),placeholder:l(u).height_m,class:"input-bordered como-focus rounded bg-white text-gray-600"},null,8,gt),[[w,g.value,void 0,{trim:!0}]])]),t("div",ft,[t("label",yt,[t("span",bt,a(e.$t("room.maxOccupancy")),1)]),b(t("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=o=>f.value=o),placeholder:l(u).max_occupancy,class:"input-bordered como-focus rounded bg-white text-gray-600"},null,8,wt),[[w,f.value,void 0,{trim:!0}]])]),l(I)?(i(),r("button",{key:0,class:"mt-2 btn gray-button font-semibold",onClick:U},a(e.$t("update")),1)):R("",!0)])]),l(M)?(i(),r("div",kt,[t("div",$t,[t("div",jt,[l(I)?(i(),T(c,{key:0,class:"btn-sm m-2 mr-0 gray-button font-semibold w-max",to:{name:"addInstallation",params:{roomId:l(n)}}},{default:C(()=>[h(a(e.$t("installation.add")),1)]),_:1},8,["to"])):R("",!0)])]),t("table",It,[t("thead",Rt,[t("tr",null,[t("th",Vt,a(e.$t("room.sensor")),1),t("th",Ot,a(e.$t("installation.isPublic")),1),t("th",Ct,a(e.$t("installation.installedOn")),1),t("th",Dt,a(e.$t("installation.removedOn")),1),t("th",Tt,a(e.$t("actions")),1)])]),t("tbody",null,[(i(!0),r(Q,null,J(V.value,(o,p)=>(i(),r("tr",{key:o._jv.id,class:K([p%2==0?"bg-white":"bg-gray-50"])},[t("td",zt,a(o.node.alias),1),t("td",Bt,a(o.is_public),1),t("td",Ft,a(l(F)(o.from_timestamp_s)),1),t("td",Mt,a(l(F)(o.to_timestamp_s)),1),t("td",Nt,[t("div",St,[t("div",Ut,[z(c,{class:"btn-sm m-2 mr-0 gray-button font-semibold w-max",to:{name:"installation",params:{installationId:o._jv.id}}},{default:C(()=>[h(a(e.$t("inspect")),1)]),_:2},1032,["to"])]),l(I)&&S(o)?(i(),r("div",{key:0,class:"btn-sm m-2 mr-0 gray-button font-semibold w-max",onClick:At=>q(o._jv.id)},a(e.$t("installation.terminate")),9,qt)):R("",!0)])])],2))),128))])])])):(i(),r("div",Lt,[t("div",Pt,[z(l(W),{class:"h-5 w-5 text-yellow-400","aria-hidden":"true"})]),t("div",Et,[h(a(e.$t("room.noInstallations"))+" ",1),l(I)?(i(),T(c,{key:0,class:"font-medium underline text-yellow-700 hover:text-yellow-600",to:{name:"addInstallation",params:{roomId:l(n)}}},{default:C(()=>[h(a(e.$t("room.addInstallation"))+". ",1)]),_:1},8,["to"])):R("",!0)])]))]))}}};export{Jt as default};