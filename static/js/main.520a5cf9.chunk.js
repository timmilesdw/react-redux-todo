(this["webpackJsonpreact-redux-todo"]=this["webpackJsonpreact-redux-todo"]||[]).push([[0],{163:function(e,t,n){e.exports=n.p+"static/media/logo192.acec03b2.png"},173:function(e,t,n){e.exports=n(327)},326:function(e,t,n){},327:function(e,t,n){"use strict";n.r(t);var a,o,r=n(0),c=n.n(r),l=n(8),i=n.n(l),d=n(169),u=n.n(d),s=n(61),m=n(337),p=n(339),f=n(118),E=function(){return c.a.createElement(m.a.Header,{style:{backgroundColor:"#039be5"}},c.a.createElement(p.b,{align:"center"},c.a.createElement(s.a,{to:""},c.a.createElement(f.a,{shape:"round",size:"large"},"Home")),c.a.createElement(s.a,{to:"todos"},c.a.createElement(f.a,{shape:"round",size:"large"},"Todos"))))},y=n(54),b=n(70),h=n(333),T=n(332),g=n(335),v=n(60),j=n(69),O=n(44),w=n(62),x=[{id:1,title:"Yo!",description:"Try adding some todos!",completed:!1}];!function(e){e[e.AddTodo=0]="AddTodo",e[e.DeleteTodo=1]="DeleteTodo",e[e.CompleteTodo=2]="CompleteTodo"}(o||(o={}));var C=(a={},Object(O.a)(a,o.AddTodo,(function(e,t){var n=t.payload;return[].concat(Object(w.a)(e),[n])})),Object(O.a)(a,o.DeleteTodo,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n.id}))})),Object(O.a)(a,o.CompleteTodo,(function(e,t){var n=t.payload;return e.map((function(e){return e.id===n.id?Object(y.a)({},e,{completed:!e.completed}):e}))})),Object(O.a)(a,"default",(function(e){return e})),a),k=function(){var e=Object(j.b)();return{createTodo:function(t){return e({type:o.AddTodo,payload:Object(y.a)({},t,{id:Math.round(100*Math.random()),completed:!1})})},deleteTodo:function(t){return e({type:o.DeleteTodo,payload:{id:t}})},completeTodo:function(t){return e({type:o.CompleteTodo,payload:{id:t}})}}},A=function(){var e=Object(v.d)(),t=k(),n=h.a.useForm(),a=Object(b.a)(n,1)[0];return c.a.createElement(T.a,{title:"Add todo",style:{width:300,marginTop:"25px"}},c.a.createElement(h.a,{layout:"vertical",name:"basic",form:a,initialValues:{remember:!0},onFinish:function(n){t.createTodo(n),e.show("Todo is succesfully created",{type:"success"}),a.resetFields()},onFinishFailed:function(t){t.errorFields&&t.errorFields.map((function(t){t.errors.map((function(t){e.show(t,{type:"error"})}))}))}},c.a.createElement(h.a.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Please input your todos title"}]},c.a.createElement(g.a,{placeholder:"Watch a movie"})),c.a.createElement(h.a.Item,{label:"Description",name:"description"},c.a.createElement(g.a,{placeholder:"Not pretty sure which"})),c.a.createElement(h.a.Item,null,c.a.createElement(f.a,{type:"primary",htmlType:"submit"},"Submit"))))},D=n(336),F=function(e){var t=e.id,n=e.title,a=e.description,o=e.completed,r=e.handleDelete,l=e.handleComplete;return c.a.createElement(T.a,{title:n,extra:c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{onClick:function(){l(t)},type:"link"},"Complete"),c.a.createElement(f.a,{onClick:function(){r(t)},type:"link"},"Delete"),o?c.a.createElement(D.a,null):null),style:{width:300},hoverable:!0},a?c.a.createElement("p",null,a):c.a.createElement("p",null,"no description here"))},M=n(74),I=n(334),N=n(117),R=n(163),S=n.n(R),z=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},H=function(e,t,n){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(n,")")},Y=function(){var e=Object(N.b)((function(){return{xys:[0,0,1],config:{mass:2,tension:150,friction:100}}})),t=Object(b.a)(e,2),n=t[0],a=t[1];return c.a.createElement(N.a.div,{onMouseMove:function(e){var t=e.clientX,n=e.clientY;return a({xys:z(t,n)})},onMouseLeave:function(){return a({xys:[0,0,1]})},style:{transform:n.xys.interpolate(H)}},c.a.createElement(I.a,{src:S.a,preview:!1}))},B=[{path:"/",component:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(Y,null),c.a.createElement(M.a,{align:"middle",justify:"center"},c.a.createElement("h1",null,"React Redux TodoApp")),c.a.createElement(M.a,{align:"middle",justify:"center"},c.a.createElement("p",null,"Simple 30 minutes todo app, created with Typescript, React and Redux")),c.a.createElement(M.a,{align:"middle",justify:"center"},c.a.createElement(s.a,{to:"todos"},c.a.createElement(f.a,{size:"large",type:"primary",shape:"round"},"To Todos"))))}},{path:"todos",component:function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],o=Object(j.c)((function(e){return e})),l=k(),i=function(e){l.deleteTodo(e),console.log("".concat(e," deleted"))},d=function(e){l.completeTodo(e),console.log("".concat(e," completed"))};return c.a.createElement("div",{className:"container todos"},c.a.createElement(f.a,{onClick:function(){return a(!n)}}," Add Todo "),n&&c.a.createElement(A,null),c.a.createElement("div",{className:"todos-grid"},o&&o.map((function(e,t){return c.a.createElement(F,Object.assign({key:t},Object(y.a)({},e,{handleDelete:i,handleComplete:d})))}))))}}],J=function(){return c.a.createElement(u.a,{style:{background:"none"}},c.a.createElement(E,null),c.a.createElement(s.b,{basepath:"react-redux-todo"},B.map((function(e,t){return c.a.createElement(e.component,{key:t,path:e.path})}))))},L=n(91),W=Object(L.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=C[t.type]||C.default;return n(e,t)})),X=n(338),q={position:v.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:v.c.SCALE};n(326);i.a.render(c.a.createElement(v.a,Object.assign({template:function(e){var t=e.message,n=e.options,a=e.style;return c.a.createElement(X.a,{style:Object(y.a)({},a),showIcon:!0,closable:!0,message:t,type:"info"===n.type?"info":"error"===n.type?"error":"warning"===n.type?"warning":"success"===n.type?"success":"info"},t)}},q),c.a.createElement(j.a,{store:W},c.a.createElement(J,null)),","),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.520a5cf9.chunk.js.map