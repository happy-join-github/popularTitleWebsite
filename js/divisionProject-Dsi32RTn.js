import{r as a,H as e,p as l,q as u,z as t,u as n,F as s,s as v,k as o,D as d,E as r,G as i,I as c}from"./vendor-0eqES6wC.js";import{a as p}from"./advancedProblem-BIoIn0V2.js";import{_ as m,m as b}from"./index-1kcOvSsv.js";const k={class:"app"},y={key:0},h={class:"titleArea"},f={class:"Area"},A={colspan:"5"},C={id:"time"},g={class:"minute"},I={class:"second"},U=["onUpdate:modelValue","disabled"],j={key:1},_={class:"contentArea"},x={class:"Area"},V=["onUpdate:modelValue"],w=m({__name:"divisionProject",setup(m){const w=c(),P=a([]),B=a(!0),D=a([]),O=a(!0),S=b.BankUrl,T=a(0),q=a([]),z=a(0),E=a(0),F=a([]);let G;const H=()=>{O.value=!1,G=setInterval((()=>{0===E.value?0===z.value?(clearInterval(G),O.value=!1,L()):(z.value--,E.value=59):E.value--}),1e3)},J=()=>{O.value=!0,clearInterval(G)},L=()=>{B.value=!1,O.value=!0,(()=>{for(let a=0;a<P.value.length;a++)for(let e=0;e<P.value[a].length;e++)P.value[a][e]!==D.value[a][e]&&(T.value++,q.value.push([F.value[a][e],P.value[a][e]]))})(),fetch(S+"/UserInp2Back3",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:T.value,errorList:q.value,date:Date.now()})})},N=(a,e)=>P.value[a][e]===D.value[a][e],K=()=>{B.value=!0,Q()},M=()=>{w.push("/")},Q=()=>{const a=p();F.value=a.listbackup,D.value=a.answer,z.value=a.datatime[1],E.value=a.datatime[2],P.value=F.value.map((()=>new Array(F.value[0].length).fill("")))};return e((()=>{Q()})),(a,e)=>(o(),l("div",k,[B.value?(o(),l("div",y,[u("div",h,[u("table",f,[u("thead",null,[u("tr",null,[u("td",A,[e[2]||(e[2]=t("请在方框中填入合适的数字 ")),u("span",C,[u("span",g,n(z.value<10?"0"+z.value:z.value),1),e[0]||(e[0]=t(" 分 ")),u("span",I,n(E.value<10?"0"+E.value:E.value),1),e[1]||(e[1]=t(" 秒 "))])])])]),u("tbody",null,[(o(!0),l(s,null,v(F.value,((a,i)=>(o(),l("tr",{key:i},[(o(!0),l(s,null,v(a,((a,s)=>(o(),l("td",{key:a.id},[u("span",null,n(a.result)+"÷",1),u("span",null,n(a.a?a.a:a.b),1),e[3]||(e[3]=t(" = ")),d(u("input",{type:"text","onUpdate:modelValue":a=>P.value[i][s]=a,disabled:O.value},null,8,U),[[r,P.value[i][s],void 0,{number:!0}]])])))),128))])))),128))])])]),u("div",{class:"submitArea"},[u("button",{onClick:H},"计时并开始答题"),u("button",{onClick:J},"停止计时"),u("button",{onClick:L},"提交答案"),u("button",{onClick:M},"返回首页")])])):(o(),l("div",j,[u("div",_,[u("table",x,[e[5]||(e[5]=u("thead",null,[u("tr",null,[u("td",{colspan:"5"},[t(" 请查看作答结果, "),u("span",{class:"green"},"绿色为正确"),t(", "),u("span",{class:"red"},"红色错误")])])],-1)),u("tbody",null,[(o(!0),l(s,null,v(F.value,((a,c)=>(o(),l("tr",{key:c},[(o(!0),l(s,null,v(a,((a,s)=>(o(),l("td",{key:a.id,class:i({red:!N(c,s),green:N(c,s)})},[u("span",null,n(a.result)+"÷",1),u("span",null,n(a.a?a.a:a.b),1),e[4]||(e[4]=t(" = ")),d(u("input",{type:"text","onUpdate:modelValue":a=>P.value[c][s]=a,readonly:""},null,8,V),[[r,P.value[c][s],void 0,{number:!0}]])],2)))),128))])))),128))])])]),u("div",{class:"submitArea"},[u("button",{onClick:K},"再练习一遍"),u("button",{onClick:M},"返回首页")])]))]))}},[["__scopeId","data-v-c57c464c"]]);export{w as default};