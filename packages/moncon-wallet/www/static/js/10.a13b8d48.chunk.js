(this["webpackJsonpsmartwallet-pwa"]=this["webpackJsonpsmartwallet-pwa"]||[]).push([[10],{149:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var r=o(114),n="rgba(255, 255, 255, 0.74)",i=Object(r.a)((function(t){return{root:{fontFamily:"Roboto",fontStyle:"normal",boxSizing:"border-box",margin:"0",padding:0,background:"#272727",position:"relative","& label.Mui-focused":{color:n},"& .MuiInput-underline:after":{borderBottomColor:n},"& .MuiInput-underline:before":{borderBottomColor:n},"& .MuiFilledInput-underline:after":{borderBottomColor:n},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:n}},"&.Mui-focused":{color:"rgba(255, 255, 255, 0.74)"},"& .MuiFormLabel-root":{color:"rgba(255, 255, 255, 0.74)",fontSize:"1.6rem"}},field:{"& .MuiInputBase-input":{color:"#ffff !important",fontSize:"1.8rem !important"},"& label.Mui-focused":{color:n},"& .MuiInput-underline:after":{borderBottomColor:n},"& .MuiInput-underline:before":{borderBottomColor:n},"& .MuiFilledInput-underline:after":{borderBottomColor:n},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:n}},"&.Mui-focused":{color:"rgba(255, 255, 255, 0.74)"},"& .MuiFormLabel-root":{color:"rgba(255, 255, 255, 0.74)",fontSize:"1.6rem"}},return:{color:"#ffff",display:"flex",textAlign:"left",marginTop:"15px",cursor:"pointer",marginLeft:"15px",fontSize:"1.6rem"},buttonBlue:{margin:"30px",borderRadius:"4px",fontSize:"14px",fontWeight:600,padding:"12px 31px 14px",background:"#03DAC5",color:"#fff",cursor:"pointer","@media screen and (max-width: 800px)":{margin:"30px 100px",borderRadius:"4px",fontSize:"14px",fontWeight:600,padding:"12px 31px 14px",background:"#03DAC5",color:"#fff",cursor:"pointer"},"&:hover":{backgroundColor:"#03C1AE",boxShadow:"none"}},link:{fontSize:"14px",lineHeight:"20px",color:"#00C4B4 !important"},proofSubtitle:{fontWeight:500,fontSize:"14px",lineHeight:"24px",color:"rgba(255, 255, 255, 0.84)",paddingTop:"10px"},title:{marginLeft:"15px",fontWeight:"bold",fontSize:"2rem",marginTop:"40px",lineHeight:"24px",color:"#ffff"},input:{fontSize:"1.8rem !important",lineHeight:"24px !important",width:"100% !important",color:"#ffff !important","&.Mui-focused":{color:"#ffff !important"},"& .MuiFormLabel-root":{color:"#ffff !important"}}}}))},150:function(t,e,o){"use strict";o(0);var r=o(1);e.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})})}},360:function(t,e,o){"use strict";o.r(e);var r=o(31),n=o(0),i=o(41),a=o(119),l=o(173),u=o(167),c=o(149),s=o(8),d=o(150),f=o(42),p=o(17),b=o(1);e.default=function(){var t=Object(c.a)(),e=Object(f.useToasts)().addToast,o=Object(n.useState)(""),m=Object(r.a)(o,2),x=m[0],g=m[1],h=Object(s.g)(),j=Object(i.b)(),O=Object(i.c)((function(t){return t.UserReducer[p.d].value})),M=function(t){t.preventDefault();var o={id:p.d};x&&(o.value=x),localStorage.hasOwnProperty(p.d)&&localStorage.removeItem(p.d),j({type:"update",payload:o}),setTimeout((function(){return h.push("/identity")}),500),e("Has been added successfully",{appearance:"success",autoDismiss:!0,autoDismissTimeout:2e3})};Object(n.useEffect)((function(){g(O)}),[O]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",textAlign:"center",position:"absolute",left:0,top:0,right:0,bottom:0,color:"rgba(0, 0, 0, 0.6)",fontSize:"20px",background:"#272727",fontWeight:500},children:Object(b.jsxs)(a.a,{className:t.root,children:[Object(b.jsxs)("div",{onClick:function(){h.length<=2?h.push("/identity"):h.goBack()},className:t.return,children:[Object(b.jsx)(d.a,{})," ",Object(b.jsx)("p",{style:{marginLeft:"15px"},children:"Return"})]}),Object(b.jsx)("h1",{className:t.title,children:"Date Birth"}),Object(b.jsxs)("form",{onSubmit:M,className:t.root,noValidate:!0,autoComplete:"off",children:[Object(b.jsx)(l.a,{style:{marginTop:"20px"},type:"date",InputProps:{className:t.input},value:x,onChange:function(t){return g(t.target.value)},id:"standard-secondary"}),Object(b.jsx)("br",{}),Object(b.jsx)(u.a,{onClick:M,className:t.buttonBlue,variant:"contained",color:"primary",type:"submit",children:"ADD CLAIM"})]})]})})})}}}]);
//# sourceMappingURL=10.a13b8d48.chunk.js.map