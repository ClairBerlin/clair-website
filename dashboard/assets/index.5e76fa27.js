import{O as e}from"./vendor.ac9c094a.js";const n=t=>{switch(t.toLowerCase()){case"o":return"role.owner";case"i":return"role.inspector";default:return"-"}},s=2147483647,i=t=>t===s?"\u2014":e.unix(t).format("YYYY-MM-DD"),m=t=>t===s?"\u2014":e.unix(t).format("YYYY-MM-DD HH:mm"),o=t=>{if(t==null)return!1;{let r=e().unix();return t.from_timestamp_s<r&&t.to_timestamp_s>r}},c=t=>t.some(o);export{m as a,c as b,i as d,o as i,s as m,n as r};
