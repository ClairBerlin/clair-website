import{o as m,c as f,a as t,u as o,b as $,r as A,d as l,w as v,P as ne,n as S,e as O,f as R,g as E,t as _,h as oe,i as ae,T as H,j as re,k as ie,F as N,l as T,m as le,p as de,q as D,s as C,v as w,x as U,y as ce,z as ue,A as me,B as ge,C as pe,D as q,E as j,G as L,H as he,L as fe,I as _e,J as ve,K as be,M as ye,N as xe,O as we,Q as Se,R as K,S as P,U as G,V as $e,W as Oe,X as Ie,Y as M,Z as Ae,_ as Ee,$ as ke,a0 as Re,a1 as Ne,a2 as Te,a3 as De,a4 as ze,a5 as Ce,a6 as Le,a7 as je,a8 as k,a9 as Pe,aa as Me,ab as Ve,ac as Fe,ad as Be,ae as He,af as Ue}from"./vendor.7fd933d8.js";const qe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};qe();var Ke="/dashboard/assets/logo.c9cc220c.svg";const Ge={class:"flex items-center flex-shrink-0 px-4 py-0.5 mb-4"},Ze=["src"],We=t("div",{class:"text-xl text-black font-bold"},[$(" CO"),t("sub",null,"2"),$(),t("br"),$("Monitoring ")],-1),Z={setup(e){return(n,r)=>(m(),f("div",Ge,[t("img",{class:"h-12 w-auto px-4",src:o(Ke),alt:"COMo logo"},null,8,Ze),We]))}},Ye={class:"w-full"},Xe={class:"flex items-center"},Je={class:"text-left"},Qe={class:"shadow-lg rounded-lg ring-1 ring-gray-300"},et={class:"relative bg-white text-xs rounded-lg"},tt={class:"flex items-center pl-4 pr-2 py-2 justify-between"},st={class:"font-semibold text-gray-500"},nt={class:"flex"},ot={key:2,class:"w-6"},at={class:"font-medium text-gray-900 whitespace-nowrap"},W={props:{icon:{type:Function,default:void 0},title:{type:String,required:!0},contextTitle:{type:String,default:""},popOverAbove:{type:Boolean,default:!1},options:{type:Array,required:!0}},setup(e){const n=()=>"text-gray-500 group-hover:text-gray-600 mr-2 flex-shrink-0 h-4 w-4";return(r,c)=>{const s=A("router-link");return m(),f("div",Ye,[l(o(de),{class:"relative"},{default:v(({open:i})=>[l(o(ne),{class:S([i?"":"text-opacity-90","w-full inline-flex items-center px-2 py-4 text-sm font-medium text-black bg-orange-700 rounded-md group hover:text-opacity-100 hover:bg-gray-100 como-focus justify-between"])},{default:v(()=>[t("div",Xe,[e.icon?(m(),O(R(e.icon),{key:0,class:S(["text-gray-500 group-hover:text-gray-600","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"})):E("",!0),t("span",Je,_(e.title),1)]),(m(),O(R(e.popOverAbove?o(oe):o(ae)),{class:S([i?"":"text-opacity-70","w-5 h-5 ml-2 transition duration-150 ease-in-out group-hover:text-opacity-80"]),"aria-hidden":"true"},null,8,["class"]))]),_:2},1032,["class"]),l(H,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:v(()=>[l(o(re),{class:S([e.popOverAbove?"top-[-9rem]":"top-16","w-full absolute z-10"])},{default:v(({close:a})=>[t("div",Qe,[t("div",et,[t("div",tt,[t("div",st,_(r.$t(e.contextTitle)),1),l(o(ie),{class:"h-4 w-4 text-gray-600 cursor-pointer",onClick:a},null,8,["onClick"])]),(m(!0),f(N,null,T(e.options,d=>(m(),O(s,{key:d.name,to:{name:d.route,params:d.params},onClick:a,class:"flex items-center px-4 py-2 transition duration-150 ease-in-out hover:bg-gray-100 como-focus border-t border-gray-200 cursor-pointer last:rounded-b-md"},{default:v(()=>[t("div",nt,[d.selected?(m(),O(o(le),{key:0,class:S(n())},null,8,["class"])):d.icon?(m(),O(R(d.icon),{key:1,class:S(n()),"aria-hidden":"true"},null,8,["class"])):(m(),f("div",ot)),t("p",at,_((d==null?void 0:d.icon)?r.$t(d.name):d.name),1)])]),_:2},1032,["to","onClick"]))),128))])])]),_:1},8,["class"])]),_:1})]),_:1})])}}},Y={setup(e){const n=D(),r=C(),c=w(()=>r.params.orgId),s=w(()=>typeof c.value=="string"),i=w(()=>s.value?n.getters["authuser/getMembershipByOrgId"](c.value):void 0),a=w(()=>{var g;const h=(g=i.value)==null?void 0:g.orgName;return h||"\u2014\u2014\u2014"}),d=w(()=>n.getters["authuser/getMemberships"].map(g=>{var I;return{selected:g.orgId===((I=i.value)==null?void 0:I.orgId),name:g.orgName,route:"overview",params:{orgId:g.orgId}}})),x=[{icon:U,name:"org.manage",route:"org-management",params:{}},{icon:ce,name:"org.create",route:"org-management-add",params:{}}],u=w(()=>[...d.value,...x]),p=U;return(h,g)=>(m(),O(W,{"context-title":"org.switch",title:o(a),icon:o(p),options:o(u)},null,8,["title","icon","options"]))}},X={setup(e){const n=D(),r=w(()=>{const{firstName:i,lastName:a}=n.state.authuser;return i&&a?i+" "+a:"\u2026"}),c=ue,s=[{icon:me,name:"user.change-email",route:"change-email",params:{}},{icon:ge,name:"user.change-password",route:"change-password",params:{}},{icon:pe,name:"user.logout",route:"logout",params:{}}];return(i,a)=>(m(),O(W,{"context-title":"user.settings",title:o(r),options:s,icon:o(c),"pop-over-above":""},null,8,["title","icon"]))}},rt={class:"relative"},it={class:"w-full inline-flex truncate font-medium text-gray-700"},lt={class:"truncate"},dt={class:"ml-3 truncate"},ct={class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},ut={class:"flex"},J={setup(e){const n="preferredlanguage",r=[{id:1,name:"Deutsch - DE",short:"\u{1F1E9}\u{1F1EA}",locale:"de",unavailable:!1},{id:2,name:"English - EN",short:"\u{1F1EC}\u{1F1E7}",locale:"en",unavailable:!1},{id:3,name:"T\xFCrk\xE7e - TR",short:"\u{1F1F9}\u{1F1F7}",locale:"tr",unavailable:!0}],{locale:c}=q({useScope:"global"}),s=d=>{j.set(n,d),c.value=d,Se.locale(d)},i=r.find(d=>d.locale===j.get(n))||r[0],a=L(i);return he(()=>s(a.value.locale)),(d,x)=>(m(),O(o(we),{as:"div",modelValue:a.value,"onUpdate:modelValue":x[0]||(x[0]=u=>a.value=u)},{default:v(()=>[l(o(fe),{class:"block text-sm font-medium text-gray-700"}),t("div",rt,[l(o(ve),{class:"relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},{default:v(()=>[t("span",it,[t("span",lt,_(a.value.short),1),t("span",dt,_(a.value.name),1)]),t("span",ct,[l(o(_e),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),l(H,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:v(()=>[l(o(be),{class:"absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"},{default:v(()=>[(m(),f(N,null,T(r,u=>l(o(ye),{as:"template",key:u.id,value:u,disabled:u.unavailable},{default:v(({active:p,selected:h})=>[t("li",{class:S([p?"text-white bg-indigo-500 font-medium":"text-gray-900","cursor-default select-none relative py-2 pl-3 pr-9"])},[t("div",ut,[t("span",{class:S([h?"font-semibold":"font-normal","truncate"])},_(u.short),3),t("span",{class:S([p?"text-white":u.unavailable?"text-gray-400":"text-gray-700","ml-2 truncate"])},_(u.name),3)]),h?(m(),f("span",{key:0,class:S([p?"text-white":"text-indigo-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[l(o(xe),{class:"h-5 w-5","aria-hidden":"true"})],2)):E("",!0)],2)]),_:2},1032,["value","disabled"])),64))]),_:1})]),_:1})])]),_:1},8,["modelValue"]))}},mt={class:"h-screen flex overflow-hidden bg-gray-100"},gt={class:"relative flex-1 flex flex-col max-w-xs w-full bg-white"},pt={class:"absolute top-0 right-0 -mr-12 pt-2"},ht=t("span",{class:"sr-only"},"Close sidebar",-1),ft={class:"flex-1 h-0 pt-5 pb-4 overflow-y-auto"},_t=t("div",{class:"w-full px-3 border-b border-gray-200"},null,-1),vt={class:"mt-1 flex-1 px-2 space-y-1"},bt=t("div",{class:"w-full px-3 my-1 border-b border-gray-200"},null,-1),yt={key:0},xt=t("div",{class:"w-full px-3 my-1 border-b border-gray-200"},null,-1),wt=t("div",{class:"flex-shrink-0 w-14"},null,-1),St={class:"hidden lg:flex lg:flex-shrink-0"},$t={class:"flex flex-col w-64"},Ot={class:"flex-1 flex flex-col min-h-0 border-r border-gray-200 shadow-md bg-white"},It={class:"flex-1 flex mx-2 px-1 flex-col pt-6 pb-1 overflow-y-auto"},At=t("div",{class:"w-full px-3 border-b border-gray-200"},null,-1),Et={class:"mt-1 flex-1 bg-white space-y-1"},kt=t("div",{class:"w-full px-3 my-1 border-b border-gray-200"},null,-1),Rt={key:0},Nt=t("div",{class:"w-full px-3 my-1 border-b border-gray-200"},null,-1),Tt={class:"flex flex-col w-0 flex-1 overflow-hidden"},Dt={class:"lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3"},zt=t("span",{class:"sr-only"},"Open sidebar",-1),Ct={class:"flex-1 relative z-0 overflow-y-auto focus:outline-none"},Lt={key:0,class:"max-w-screen-xl sm:py-6 mx-auto sm:px-6 rounded-md"},jt={setup(e){const n=D(),r=C(),c=K(),s=[{name:"overview",routeName:"overview",icon:ke},{name:"team",routeName:"org-management-detail",icon:Re},{name:"sites",routeName:"sites",icon:Ne},{name:"rooms",routeName:"rooms",icon:Te},{name:"nodes",routeName:"sensors",icon:De}],i=p=>r.name===p,a=L(!1),d=w(()=>r.params.orgId),x=w(()=>n.getters["authuser/isLoading"]),u=w(()=>typeof d.value=="string");return P(async()=>{await n.dispatch("authuser/fetchAuthenticatedUser")}),G(()=>r.params.orgId,async p=>{u.value?(console.log(`Organization changed to orgId ${p}. Fetching related data...`),n.dispatch("jv/get",`organizations/${p}`),c.push({name:"",params:{orgId:p}})):console.log("Entering a route outside of an organization context.")}),(p,h)=>{const g=A("router-link"),I=A("router-view");return m(),f("div",mt,[l(o($e),{as:"template",show:a.value},{default:v(()=>[l(o(Ie),{as:"div",class:"fixed inset-0 flex z-40 lg:hidden",onClose:h[1]||(h[1]=b=>a.value=!1)},{default:v(()=>[l(o(M),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:v(()=>[l(o(Ae),{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})]),_:1}),l(o(M),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:v(()=>[t("div",gt,[l(o(M),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:v(()=>[t("div",pt,[t("button",{type:"button",class:"ml-1 flex items-center justify-center h-10 w-10 rounded-full como-focus",onClick:h[0]||(h[0]=b=>a.value=!1)},[ht,l(o(Ee),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),t("div",ft,[l(Z),_t,t("nav",vt,[l(Y),l(J,{class:"py-1"}),bt,o(u)?(m(),f("div",yt,[(m(),f(N,null,T(s,b=>l(g,{key:b.name,to:{name:b.routeName,params:{orgId:o(d)}},class:S([i(b.routeName)?"bg-indigo-50 text-indigo-900":"text-gray-700 hover:bg-gray-100 hover:text-gray-900","group flex items-center px-2 py-2 text-base font-medium rounded-md como-focus"])},{default:v(()=>[(m(),O(R(b.icon),{class:S([i(b.routeName)?"text-indigo-900":"text-gray-500 group-hover:text-gray-600","mr-4 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),$(" "+_(p.$t(b.name)),1)]),_:2},1032,["to","class"])),64))])):E("",!0),xt,l(X)])])])]),_:1}),wt]),_:1})]),_:1},8,["show"]),t("div",St,[t("div",$t,[t("div",Ot,[t("div",It,[l(Z),At,t("nav",Et,[l(Y),l(J,{class:"py-1"}),kt,o(u)?(m(),f("div",Rt,[(m(),f(N,null,T(s,b=>l(g,{key:b.name,to:{name:b.routeName,params:{orgId:o(d)}},class:S([i(b.routeName)?"bg-indigo-50 text-indigo-900 font-bold":"text-gray-700 hover:bg-gray-100 hover:text-gray-900","group flex items-center my-1 px-2 py-4 text-sm font-medium rounded-md como-focus"])},{default:v(()=>[(m(),O(R(b.icon),{class:S([i(b.routeName)?"text-indigo-900":"text-gray-500 group-hover:text-gray-600","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),$(" "+_(p.$t(b.name)),1)]),_:2},1032,["to","class"])),64))])):E("",!0)]),Nt,l(X,{class:"w-full"})])])])]),t("div",Tt,[t("div",Dt,[t("button",{type:"button",class:"-ml-0.5 -mt-0.5 mb-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 como-focus",onClick:h[2]||(h[2]=b=>a.value=!0)},[zt,l(o(Oe),{class:"h-6 w-6","aria-hidden":"true"})])]),t("main",Ct,[o(x)?E("",!0):(m(),f("div",Lt,[l(I)]))])])])}}},Pt="modulepreload",Q={},Mt="/dashboard/",y=function(n,r){return!r||r.length===0?n():Promise.all(r.map(c=>{if(c=`${Mt}${c}`,c in Q)return;Q[c]=!0;const s=c.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${i}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":Pt,s||(a.as="script",a.crossOrigin=""),a.href=c,document.head.appendChild(a),s)return new Promise((d,x)=>{a.addEventListener("load",d),a.addEventListener("error",x)})})).then(()=>n())},Vt={class:"flex justify-between font-bold"},Ft={class:"flex flex-col text-black"},Bt=["data-tip"],Ht={class:"mt-6 flex justify-between"},Ut={class:"flex flex-col"},qt={class:"text-gray-900 text-lg font-bold"},Kt=t("sub",null,"2",-1),Gt={class:"text-right mt-2"},Zt={class:"text-5xl font-black tracking-tight"},Wt=t("div",{class:"text-2xl font-bold tracking-tight leading-3"},"ppm",-1),Yt={width:"40",height:"100",viewBox:"0 0 40 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Xt=t("path",{d:"M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V94C40 97.3137 37.3137 100 34 100H6C2.68629 100 0 97.3137 0 94V6Z",fill:"black"},null,-1),Jt=["cy","fill"],Qt={class:"mt-8"},es=t("sub",null,"2",-1),ts={props:{installationId:{type:String,required:!0},sensorName:{type:String,required:!0},sensorId:{type:String,required:!0},roomName:{type:String,required:!0},roomId:{type:String,required:!0},isPublic:{type:Boolean,required:!0},latestMeasurement:{type:String,default:""}},setup(e){const n=e,{t:r}=q(),c=u=>r(u?"This installation is public.":"This installation is not public."),s=parseInt((n==null?void 0:n.latestMeasurement)||"0"),i=()=>s?s<=800?"#7DBF70":s<=1200?"#EBAC56":"#E1665E":"#9CA3AF",d=(()=>s?s<=800?"75":s<=1200?"50":"25":"-100")(),x=i();return(u,p)=>{const h=A("router-link");return m(),f("div",{class:S([o(s)?o(s)<=800?"bg-[#7DBF70]":o(s)<=1200?"bg-[#EBAC56]":"bg-[#E1665E]":"bg-gray-400","max-w-xs rounded-md shadow-md hover:shadow-lg drop-shadow-md hover:drop-shadow-lg p-8 ring-1 ring-gray-300 ring-opacity-50 text-black"])},[t("div",Vt,[t("div",Ft,[l(h,{to:{name:"sensor",params:{sensorId:e.sensorId}},class:"underline text-2xl hover:text-gray-900 hover:no-underline"},{default:v(()=>[$(_(e.sensorName),1)]),_:1},8,["to"]),l(h,{to:{name:"room",params:{roomId:e.roomId}},class:"underline text-xl hover:text-gray-900 hover:no-underline"},{default:v(()=>[$(_(e.roomName),1)]),_:1},8,["to"])]),t("div",{"data-tip":c(e.isPublic),class:"tooltip h-8 w-8"},[e.isPublic?(m(),O(o(ze),{key:0})):(m(),O(o(Ce),{key:1}))],8,Bt)]),t("div",Ht,[t("div",Ut,[t("div",qt,[$(_(u.$t("Latest"))+" CO",1),Kt,$(" "+_(u.$t("Value")),1)]),t("div",Gt,[t("div",Zt,_(e.latestMeasurement||"-"),1),Wt])]),t("div",null,[(m(),f("svg",Yt,[Xt,t("circle",{cx:"20",cy:o(d),r:"14",fill:o(x)},null,8,Jt)]))])]),t("div",Qt,[l(h,{to:{name:"installation",params:{installationId:e.installationId}},class:"bg-black hover:ring hover:ring-gray-300 shadow-md drop-shadow-md flex p-2 w-full rounded-lg text-lg text-gray-300 font-semibold items-center justify-center"},{default:v(()=>[l(o(Le),{class:"w-5 h-5 mr-3"}),t("span",null,[$(_(u.$t("View"))+" CO",1),es,$(" "+_(u.$t("Chart")),1)])]),_:1},8,["to"])])],2)}}},ss={key:0},ns={key:1,class:"mx-2"},os={class:"font-bold text-xl mt-8"},as={class:""},rs={key:0},is={role:"list",class:"grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"},ls={key:1,class:"shadow-md mt-4 rounded-md max-w-sm flex items-center bg-yellow-50 border-l-4 border-yellow-400 p-4"},ds={class:"flex"},cs={class:"flex-shrink-0"},us={class:"ml-3"},ms=$(" Click here to add one "),gs={setup(e){const n=C(),r=D(),c=L(!0),s=w(()=>n.params.orgId);P(async()=>x()),G(s,()=>x());const i=L(void 0),a=w(()=>{var u;return(u=i.value)==null?void 0:u.filter(p=>p.from_timestamp_s<=p.query_timestamp_s&&p.to_timestamp_s>=p.query_timestamp_s)}),d=w(()=>{var u;return!!((u=a==null?void 0:a.value)==null?void 0:u.length)}),x=async()=>{c.value=!0;const u=await r.dispatch("jv/get",["installations",{params:{"filter[organization]":s.value}}]),p=Object.entries(u);i.value=p.map(([,g])=>g);const h=p.map(([g,I])=>(console.log(`Get related objects for installation ${g}.`),r.dispatch("jv/getRelated",`installations/${g}`).then(()=>{typeof I.room=="object"&&r.dispatch("jv/getRelated",`rooms/${I.room._jv.id}`)})));await Promise.all(h),c.value=!1};return(u,p)=>{const h=A("router-link");return c.value?(m(),f("div",ss,_(u.$t("loading...")),1)):(m(),f("div",ns,[t("h2",os,_(u.$t("Active Installations")),1),t("div",as,[o(d)?(m(),f("div",rs,[t("ul",is,[(m(!0),f(N,null,T(o(a),g=>{var I,b,V,F,B;return m(),f("li",{key:g._jv.id,class:"col-span-1 mt-4"},[l(ts,{"installation-id":g._jv.id,"sensor-name":((I=g.node)==null?void 0:I.alias)||((b=g.node)==null?void 0:b.eui64),"sensor-id":g.node._jv.id,"room-name":(V=g.room)==null?void 0:V.name,"room-id":g.room._jv.id,"is-public":g==null?void 0:g.is_public,"latest-measurement":(B=(F=g==null?void 0:g.latest_sample)==null?void 0:F.co2_ppm)==null?void 0:B.toString()},null,8,["installation-id","sensor-name","sensor-id","room-name","room-id","is-public","latest-measurement"])])}),128))])])):(m(),f("div",ls,[t("div",ds,[t("div",cs,[l(o(je),{class:"h-5 w-5 text-yellow-400","aria-hidden":"true"})]),t("div",us,[$(_(u.$t("org.noInstallations"))+" "+_(" "),1),l(h,{to:"#",class:"font-medium underline text-yellow-700 hover:text-yellow-600"},{default:v(()=>[ms]),_:1})])])]))])]))}}},ps={key:0,class:"bg-white shadow-md sm:rounded-md"},hs={class:"max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8"},fs={class:"text-3xl font-bold leading-tight text-gray-900"},_s={class:"max-w-screen-xl py-6 mx-auto rounded-md"},ee={setup(e){const n=C(),r=K(),c=D(),s=w(()=>n.params.orgId),i=w(()=>typeof s.value=="string"),a=w(()=>i.value?c.getters["jv/get"]({_jv:{type:"Organization",id:s.value}}):{name:"org.none"});return P(()=>{if(n.name==="dashboard"){const d=c.getters["authuser/getMemberships"];if((d==null?void 0:d.length)>0){const x=d[0].orgId;r.push({name:"overview",params:{orgId:x}})}else r.push({name:"org-management-add"})}}),(d,x)=>{const u=A("router-view");return m(),f("div",null,[d.$route.meta.title?(m(),f("header",ps,[t("div",hs,[t("h1",fs,_(o(a).name)+" \u2013 "+_(d.$t(o(n).meta.title)),1)])])):E("",!0),t("div",_s,[l(u)])])}}},vs=()=>y(()=>import("./Organizations.4525f6f9.js"),["assets/Organizations.4525f6f9.js","assets/vendor.7fd933d8.js","assets/index.a564b57a.js"]),bs=()=>y(()=>import("./Organization.6a0c1aab.js"),["assets/Organization.6a0c1aab.js","assets/vendor.7fd933d8.js","assets/index.a564b57a.js","assets/DeletionModal.71b63de9.js"]),ys=()=>y(()=>import("./AddOrganization.2e35c7b0.js"),["assets/AddOrganization.2e35c7b0.js","assets/vendor.7fd933d8.js"]),xs=()=>y(()=>import("./EditOrganization.88c5a6dd.js"),["assets/EditOrganization.88c5a6dd.js","assets/vendor.7fd933d8.js"]),ws=()=>y(()=>import("./NotFound.204fe921.js"),["assets/NotFound.204fe921.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.7fd933d8.js"]),Ss=()=>y(()=>import("./Sites.d13d94e1.js"),["assets/Sites.d13d94e1.js","assets/vendor.7fd933d8.js","assets/DeletionModal.71b63de9.js"]),$s=()=>y(()=>import("./Site.70868077.js"),["assets/Site.70868077.js","assets/vendor.7fd933d8.js","assets/DeletionModal.71b63de9.js"]),Os=()=>y(()=>import("./AddSite.d986ad1a.js"),["assets/AddSite.d986ad1a.js","assets/vendor.7fd933d8.js"]),Is=()=>y(()=>import("./AddRoom.8865f4cf.js"),["assets/AddRoom.8865f4cf.js","assets/vendor.7fd933d8.js"]),As=()=>y(()=>import("./Rooms.2aabfd1c.js"),["assets/Rooms.2aabfd1c.js","assets/vendor.7fd933d8.js","assets/DeletionModal.71b63de9.js"]),Es=()=>y(()=>import("./Room.a6a2b764.js"),["assets/Room.a6a2b764.js","assets/vendor.7fd933d8.js","assets/index.a564b57a.js"]),ks=()=>y(()=>import("./Installation.4d66a686.js"),["assets/Installation.4d66a686.js","assets/vendor.7fd933d8.js"]),Rs=()=>y(()=>import("./AddInstallation.dd3068ad.js"),["assets/AddInstallation.dd3068ad.js","assets/AddInstallation.7104e370.css","assets/vendor.7fd933d8.js","assets/index.a564b57a.js"]),Ns=()=>y(()=>import("./Sensors.8792b0f7.js"),["assets/Sensors.8792b0f7.js","assets/vendor.7fd933d8.js"]),Ts=()=>y(()=>import("./Sensor.b14283a7.js"),["assets/Sensor.b14283a7.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.7fd933d8.js"]),Ds=()=>y(()=>import("./AddSensor.2438b7a4.js"),["assets/AddSensor.2438b7a4.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.7fd933d8.js"]),zs=()=>y(()=>import("./Logout.051197b8.js"),["assets/Logout.051197b8.js","assets/vendor.7fd933d8.js"]),Cs=[{path:"/",redirect:"/dashboard"},{path:"/dashboard",name:"dashboard",component:ee},{path:"/dashboard/:orgId",name:"home",component:ee,props:!0,meta:{title:"org.singular"},children:[{path:"",name:"overview",component:gs,meta:{title:"overview"}},{path:"installation/:installationId",name:"installation",component:ks,meta:{title:"installation.details"}},{path:"sites",name:"sites",component:Ss,meta:{title:"sites"}},{path:"sites/addSite",name:"addSite",component:Os,meta:{title:"site.add"}},{path:"sites/:siteId",name:"site",component:$s,meta:{title:"site.details"}},{path:"sites/:siteId/addRoom",name:"addRoom",component:Is,meta:{title:"room.add"}},{path:"rooms",name:"rooms",component:As,meta:{title:"rooms"}},{path:"rooms/:roomId",name:"room",component:Es,meta:{title:"room.details"}},{path:"rooms/:roomId/addInstallation",name:"addInstallation",component:Rs,meta:{title:"installation.add"}},{path:"sensors",name:"sensors",component:Ns,meta:{title:"nodes"}},{path:"addSensor",name:"addSensor",component:Ds,meta:{title:"node.add"}},{path:"sensors/:sensorId",name:"sensor",component:Ts,meta:{title:"node.details"}}]},{path:"/org-management",name:"org-management",meta:{title:"org.manage"},component:vs},{path:"/org-management/:orgId",name:"org-management-detail",meta:{title:"org.detail"},component:bs},{path:"/org-management/:orgId/edit",name:"org-management-edit",meta:{title:"org.edit"},component:xs},{path:"/org-management/add",name:"org-management-add",meta:{title:"org.add"},component:ys},{path:"/accounts/email",name:"change-email",beforeEnter(){window.location.href="/accounts/email"}},{path:"/accounts/password/change",name:"change-password",beforeEnter(){window.location.href="/accounts/password/change"}},{path:"/logout",name:"logout",meta:{title:"user.logout"},component:zs},{path:"/:pathMatch(.*)",component:ws}];function Ls(){return{error:void 0,userIsLoading:!0,membershipsAreLoading:!0,id:void 0,email:void 0,firstName:void 0,lastName:void 0,userName:void 0,memberships:[]}}const js={logout(){return k.post("/api/v1/auth/logout/")},async fetchMemberships(e){e.commit("START_MEMBERSHIPSLOADING");try{const n=e.getters.getId,r=await e.dispatch("jv/get",`users/${n}/memberships`,{root:!0}),c=Object.keys(r).map(s=>{const i=r[s],a=i._jv.attrs;return{id:s,role:a.role,orgName:a.organization_name,orgId:i._jv.relationships.organization.data.id}});e.commit("SET_MEMBERSHIPS",c||[])}catch(n){throw e.commit("MARK_ERROR"),n}finally{e.commit("STOP_MEMBERSHIPSLOADING")}},async fetchAuthenticatedUser(e){e.commit("START_USERLOADING");try{const r=(await k.get("/api/v1/auth/user")).data.data.id,c=await e.dispatch("jv/get",`users/${r}/`,{root:!0});e.commit("SET_ID",r),e.commit("SET_AUTHUSER",c._jv.attrs),await e.dispatch("fetchMemberships"),e.commit("MARK_SUCCESS")}catch(n){throw e.commit("MARK_ERROR"),n}finally{e.commit("STOP_USERLOADING")}}},Ps={isLoggedIn(e){return e.id!==null&&j.get("csrftoken")},isLoading(e){return e.userIsLoading||e.membershipsAreLoading},isError(e){return e.error},getId(e){return e.id?e.id:void 0},getInfo(e){return e.id?{id:e.id,email:e.email,firstName:e.firstName,lastName:e.lastName,userName:e.userName}:void 0},getMemberships(e){return e.id?e.memberships:[]},getMembershipByOrgId:e=>n=>e.memberships.find(r=>r.orgId===n)},Ms={START_USERLOADING(e){e.userIsLoading=!0},STOP_USERLOADING(e){e.userIsLoading=!1},START_MEMBERSHIPSLOADING(e){e.membershipsAreLoading=!0},STOP_MEMBERSHIPSLOADING(e){e.membershipsAreLoading=!1},MARK_ERROR(e){e.error=!0},MARK_SUCCESS(e){e.error=!1},SET_ID(e,n){e.id=n},SET_AUTHUSER(e,{email:n,first_name:r,last_name:c,username:s}){e.email=n,e.firstName=r,e.lastName=c,e.userName=s},SET_MEMBERSHIPS(e,n){e.memberships=[],e.memberships.push(...n)}},Vs={namespaced:!0,actions:js,getters:Ps,mutations:Ms,state:Ls};k.defaults.xsrfHeaderName="X-CSRFToken";k.defaults.xsrfCookieName="csrftoken";const te=k.create({baseURL:"/api/v1/",headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json, application/json, text/plain, */*"},xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFTOKEN"}),se=e=>{console.log(e),e.response.status===401&&(window.location.href=window.location.origin+"/accounts/login/"),Promise.reject(e)};te.interceptors.response.use(e=>e,e=>se(e));k.interceptors.response.use(e=>e,e=>se(e));const Fs=Pe({modules:{authuser:Vs,jv:Me(te)}}),Bs="Latest",Hs="View",Us="Chart",qs="Value",Ks="Action",Gs="Actions",Zs="Add",Ws={city:"City",createError:"Failed to create the address!",singular:"Address",street1:"Street and Number",street2:"Routing Extension",zip:"Zip-Code",updateError:"Failed to update the address!",updateSuccess:"Address has been updated!"},Ys="Cancel",Xs="Day",Js="Description",Qs="Edit",en="Email",tn="Inspect",sn={add:"Add Installation",addInRoom:"Add Installation in Room",details:"Installation Details",errorCreate:"Failed to create the installation!",errorInvalidEnd:"The end time is earlier than the start time or otherwise invalid!",errorNoSensor:"No sensor selected for the installation!",errorNoStart:"No start time provided!",errorOverlappingEnd:"The end time is in conflict with an existing installation!",errorOverlappingStart:"The start time is in conflict with an existing installation!",errorTerminate:"Failed to terminate the selected installation!",from:"Installation Date and Time",installedOn:"Installed on",isPublic:"Data public?",makePublic:"Make installation data public?",otherInstallations:"Other installations of sensor",removedOn:"Removed on",selectSensor:"Select Sensor...",successCreate:"Successfully set up installation!",successTerminate:"Successfully terminated the selected installation!",terminate:"Terminate Installation",to:"Uninstallation Date and Time"},nn="Installations",on="Leave",an="Month",rn="Name",ln="Next",dn={add:"Add a sensor",details:"Sensor Details",errorNotOwner:"You are not permitted to make any changes to the inventory of the selected organization!",identifier:"Sensor-ID",name:"Sensor Name",noNodes:"The selected organization has no sensors.",singular:"Sensor",model:"Model",sampleCount:"Samples"},cn="Sensors",un="Now",mn="of",gn="ongoing",pn="optional",hn="Options",fn={add:"Add Organization",addNode:"Register a Sensor",addSite:"Add a Site",all:"All your Organizations",create:"Create Organization",createError:"Failed to create the organization!",delete:"Delete Organization",details:"Organization Details",edit:"Edit Organization",invite:"Invite Members",manage:"Manage Organizations",members:"Members",name:"Organization Name",noInstallations:"This organization has no active installations.",none:"No Organization",noSite:"The selected organization has no sites",plural:"Organizations",singular:"Organization",switch:"Switch Organization",updateError:"Failed to update the organization!",updateSuccess:"Organization details have been updated!"},_n="Overview",vn="CO2-Concentration [PPM]",bn="Previous",yn="Remove",xn={assistant:"Assistant",change:"Change Role",inspector:"Inspector",owner:"Owner",singular:"Role",your:"Your Role"},wn={add:"Add Room",addInstallation:"Add Installation",addRoomToSite:"Add Room to Site",createError:"Failed to create the room!",details:"Room Details",height:"Height",maxOccupancy:"Maximum Occupancy [Persons]",name:"Room Name",noInstallations:"There are no sensors installed in the selected room",noRoom:"The selected organization has no rooms",sensor:"Sensor",singular:"Room",siteForRoom:"Select a site to add a room.",size:"Size",updateError:"Failed to update the room!",updateSuccess:"Room details have been updated!"},Sn="Rooms",$n="Select",On={add:"Add Site",createError:"Failed to create the site!",details:"Site Details",missingNameAddress:"Site name and address must be provided!",name:"Site Name",noRooms:"This site has no rooms",singular:"Site",update:"Update",updateError:"Failed to update the site!",updateSuccess:"Sites details have been updated!"},In="Sites",An="Team",En="Time",kn="Update",Rn={"change-email":"Change your email","change-password":"Change password",logout:"Logout",plural:"Users",settings:"User Settings",singular:"User"},Nn="Week";var Tn={"404":{home:"Back to home",msg:"Oops! Nothing to see here"},"This installation is public.":"This installation is public.","This installation is not public.":"This installation is not public.","Active Installations":"Active Installations",Latest:Bs,View:Hs,Chart:Us,Value:qs,action:Ks,actions:Gs,add:Zs,address:Ws,cancel:Ys,day:Xs,delete:"Delete","delete-org-modal":{message:"Are you sure you want to delete this organization? This action cannot be undone!",title:"Delete Organization"},"delete-room-modal":{message:"Are you sure you want to delete this room? This action cannot be undone!",title:"Delete Room"},"delete-site-modal":{message:"Are you sure you want to delete this site? This action cannot be undone!",title:"Delete Site"},description:Js,edit:Qs,email:en,inspect:tn,installation:sn,installations:nn,leave:on,"loading...":"loading...","logging-out":"You are being logged out",month:an,name:rn,next:ln,node:dn,nodes:cn,now:un,of:mn,ongoing:gn,optional:pn,options:hn,org:fn,overview:_n,ppm:vn,previous:bn,remove:yn,role:xn,room:wn,rooms:Sn,select:$n,site:On,sites:In,team:An,time:En,update:kn,user:Rn,week:Nn};const Dn="Aktueller",zn="Zum",Cn="Diagramm",Ln="Wert",jn="Aktion",Pn="Aktionen",Mn="Hinzuf\xFCgen",Vn={city:"Stadt",createError:"Fehler beim Anlegen der Adresse!",singular:"Adresse",street1:"Stra\xDFe und Hausnummer",street2:"Adressdetails",zip:"Postleitzahl",updateError:"Fehler beim Aktualisieren der Addresse!",updateSuccess:"Adresse wurde erfolgreich aktualisiert!"},Fn="Abbrechen",Bn="Tag",Hn="Beschreibung",Un="Bearbeiten",qn="E-Mail",Kn="Verlassen",Gn="Details",Zn={add:"Installation Hinzuf\xFCgen",addInRoom:"Installation hinzuf\xFCgen im Raum",details:"Installationsdetails",errorCreate:"Fehler beim Anlegen der Installation!",errorInvalidEnd:"Der Endzeitpunkt liegt vor dem Anfangszeitpunkt oder ist anderweitig ung\xFCltig!",errorNoSensor:"Kein Sensor f\xFCr die Installation ausgew\xE4hlt!",errorNoStart:"Kein Anfangszeitpunkt angegeben!",errorOverlappingEnd:"Der Endzeitpunkt steht in Konflikt mit einer anderen Installation!",errorOverlappingStart:"Der Anfangszeitpunkt steht in Konflikt mit einer anderen Installation!",errorTerminate:"Fehler beim beenden der Installation!",from:"Datum und Zeit der Installation",installedOn:"installiert am",isPublic:"Daten \xF6ffentlich?",makePublic:"Installationsdate ver\xF6ffentlichen?",otherInstallations:"Andere Installationen des Sensors",removedOn:"Entfernt am",selectSensor:"Sensor w\xE4hlen...",successCreate:"Installation wurde erfolgreich angelegt!",successTerminate:"Installation wurde erfolgreich beendet!",terminate:"Installation beenden",to:"Datum und Zeit der Deinstallation"},Wn="Installationen",Yn="Monat",Xn="Name",Jn="Weiter",Qn={add:"Sensor hinzuf\xFCgen",details:"Sensordetails",errorNotOwner:"Sie sind nicht berechtigt, \xC4nderungen am Inventar der gew\xE4hlten Organisation vorzunehmen!",identifier:"Sensor-ID",name:"Sensorname",noNodes:"Die gew\xE4hlte Organisation verf\xFCgt \xFCber keine Sensoren.",singular:"Sensor",model:"Modell",sampleCount:"Messwerte"},eo="Sensoren",to="Jetzt",so="von",no="laufend",oo="optional",ao="Optionen",ro={add:"Organisation hinzuf\xFCgen",addNode:"Sensor registrieren",addSite:"Ort hinzuf\xFCgen",all:"All Ihre Organisationen",create:"Organisation hinzuf\xFCgen",createError:"Fehler beim Anlegen der Organisation!",delete:"Organisation l\xF6schen",details:"Organisationsdetails",edit:"Organisation editieren",invite:"Mitglieder einladen",manage:"Organisationen verwalten",members:"Mitglieder",name:"Organisationsname",noInstallations:"Diese Organisation hat keine aktiven Installationen.",none:"Keine Organisation",noSite:"Die gew\xE4hlte Organisation verf\xFCgt \xFCber keine Orte",plural:"Organisationen",singular:"Organisation",switch:"Organisation wechseln",updateError:"Fehler beim Aktualisieren der Organisation!",updateSucces:"Details der Organisation wurden erfolgreich aktualsiert."},io="\xDCberblick",lo="Zur\xFCck",co="CO2 Gehalt in ppm",uo="Entfernen",mo={assistant:"Assistent",change:"Rolle \xE4ndern",inspector:"Inspekteur",owner:"Besitzer",singular:"Rolle",your:"Ihre Rolle"},go={add:"Raum hinzuf\xFCgen",addInstallation:"Installation hinzuf\xFCgen",addRoomToSite:"Raum hinzuf\xFCgen zum Ort",createError:"Fehler beim Anlegen des Raumes!",details:"Raumdetails",height:"H\xF6he",maxOccupancy:"Maximale Belegung [Personen]",name:"Raumname",noInstallations:"Im gew\xE4hlten Raum sind keine Sensoren installiert",noRoom:"Die gew\xE4hlte Organisation hat keine R\xE4ume",sensor:"Sensor",singular:"Raum",siteForRoom:"W\xE4hlen Sie einen Ort aus, um in diesem R\xE4ume anzulegen",size:"Gr\xF6\xDFe",updateError:"Fehler beim Aktualisieren des Raums!",updateSuccess:"Raumdetails wurden erfolgreich akualisiert!"},po="R\xE4ume",ho="Ausw\xE4hlen",fo={add:"Ort hinzuf\xFCgen",createError:"Fehler beim Anlegen des Orts!",details:"Ort-Details",missingNameAddress:"Name und Adresse des Orts m\xFCssen angegeben werden!",name:"Name des Orts",noRooms:"Dieser Ort hat noch keine R\xE4ume.",singular:"Ort",update:"Aktualisieren",updateError:"Fehler beim Aktualisieren des Orts!",updateSuccess:"Details des Orts wurden erfolgreich akualisiert!"},_o="Orte",vo="Team",bo="Zeit",yo="Aktualisieren",xo={"change-email":"Email-Adresse \xE4ndern","change-password":"Passwort \xE4ndern",logout:"Ausloggen",plural:"Nutzer",settings:"Nutzereinstellungen",singular:"Nutzer"},wo="Woche";var So={"404":{home:"Zur\xFCck zur Startseite",msg:"Huch! Hier ist nichts"},"This installation is public.":"Diese Installation ist \xF6ffentlich.","This installation is not public.":"Diese Installation ist nicht \xF6ffentlich.","Active Installations":"Aktive Installationen",Latest:Dn,View:zn,Chart:Cn,Value:Ln,action:jn,actions:Pn,add:Mn,address:Vn,cancel:Fn,day:Bn,delete:"L\xF6schen","delete-org-modal":{message:"Sind Sie sicher, dass Sie diese Organisation gel\xF6scht werden soll? Diese Aktion kann nicht r\xFCckg\xE4nging gemacht werden!",title:"Organisation l\xF6schen"},"delete-room-modal":{message:"Sind Sie sicher, dass Sie diesen Raum l\xF6schen m\xF6chten? Diese Aktion kann nicht r\xFCckg\xE4nging gemacht werden!",title:"Raum l\xF6schen"},"delete-site-modal":{message:"Sind Sie sicher, dass Sie diesen Ort l\xF6schen m\xF6chten? Diese Aktion kann nicht r\xFCckg\xE4nging gemacht werden!",title:"Ort l\xF6schen"},description:Hn,edit:Un,email:qn,leave:Kn,"loading...":"l\xE4dt...","logging-out":"Sie werden ausgeloggt...",inspect:Gn,installation:Zn,installations:Wn,month:Yn,name:Xn,next:Jn,node:Qn,nodes:eo,now:to,of:so,ongoing:no,optional:oo,options:ao,org:ro,overview:io,previous:lo,ppm:co,remove:uo,role:mo,room:go,rooms:po,select:ho,site:fo,sites:_o,team:vo,time:bo,update:yo,user:xo,week:wo},$o={en:Tn,de:So};const Oo=Ve({history:Fe(),routes:Cs}),Io=Be.exports.createI18n({locale:"de",fallbackLocale:["de","en"],messages:$o}),z=He(jt);z.use(Oo);z.use(Fs);z.use(Io);z.use(Ue);z.mount("#app");
