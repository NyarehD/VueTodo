(function(t){function e(e){for(var o,l,d=e[0],c=e[1],i=e[2],u=0,b=[];u<d.length;u++)l=d[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&b.push(n[l][0]),n[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);s&&s(e);while(b.length)b.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,d=1;d<a.length;d++){var c=a[d];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var o={},n={app:0},r=[];function l(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=o,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(a,o,function(e){return t[e]}.bind(null,o));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=e,d=d.slice();for(var i=0;i<d.length;i++)e(d[i]);var s=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"4a77":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23"),n={class:"container"},r={class:"row justify-content-center"},l={class:"col-5"},d={class:"card"},c=Object(o["d"])("div",{class:"card-header"},[Object(o["d"])("h1",null,"Todo List")],-1),i={class:"card-body"},s={class:"d-flex justify-content-start my-2"},u={key:0,class:"badge rounded-pill bg-primary"},b={key:1,class:"badge rounded-pill bg-success float-end"},p={class:"list-group rounded"},v=["onDblclickCapture"],f={key:0,class:"col-9"},h=["onUpdate:modelValue","onKeypress"],j={key:1,class:"col-9"},O=["id","onUpdate:modelValue"],g=["for"],m=["onClick"];function k(t,e,a,k,y,_){var w=Object(o["l"])("Input");return Object(o["h"])(),Object(o["c"])("div",n,[Object(o["d"])("div",r,[Object(o["d"])("div",l,[Object(o["d"])("div",d,[c,Object(o["d"])("div",i,[Object(o["f"])(w,{onAdd:_.addTodo},null,8,["onAdd"]),Object(o["d"])("div",s,[_.doneTotal!==y.todoList.length?(Object(o["h"])(),Object(o["c"])("span",u,"Done "+Object(o["m"])(_.doneTotal),1)):(Object(o["h"])(),Object(o["c"])("span",b,"All Done, Good Job"))]),Object(o["d"])("ul",p,[(Object(o["h"])(!0),Object(o["c"])(o["a"],null,Object(o["k"])(y.todoList,(function(t){return Object(o["h"])(),Object(o["c"])("li",{key:t.id,class:Object(o["g"])(["list-group-item created d-flex",{deleted:t.isDelete}]),onDblclickCapture:function(e){return t.isEditing=!0}},[t.isEditing?(Object(o["h"])(),Object(o["c"])("div",f,[Object(o["p"])(Object(o["d"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(e){return t.task=e},onKeypress:Object(o["q"])((function(e){return t.isEditing=!1}),["enter"])},null,40,h),[[o["o"],t.task]])])):(Object(o["h"])(),Object(o["c"])("div",j,[Object(o["p"])(Object(o["d"])("input",{type:"checkbox",class:"form-check-input me-3",id:"todoId"+t.id,"onUpdate:modelValue":function(e){return t.isDone=e}},null,8,O),[[o["n"],t.isDone]]),Object(o["d"])("label",{for:"todoId"+t.id,class:Object(o["g"])(["form-label",{done:t.isDone}])},Object(o["m"])(t.task),11,g)])),Object(o["d"])("button",{class:"btn btn-danger btn-sm col-3",onClick:function(e){return _.removeTodo(t.id)}},"Delete",8,m)],42,v)})),128))])])])])])])}a("d81d"),a("4de4"),a("d3b7");var y={class:"hello"},_=Object(o["e"])('<p data-v-379548a4> For a guide and recipes on how to configure / customize this project,<br data-v-379548a4> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>vue-cli documentation</a>. </p><h3 data-v-379548a4>Installed CLI Plugins</h3><ul data-v-379548a4><li data-v-379548a4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-379548a4>babel</a></li></ul><h3 data-v-379548a4>Essential Links</h3><ul data-v-379548a4><li data-v-379548a4><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-379548a4>Core Docs</a></li><li data-v-379548a4><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>Forum</a></li><li data-v-379548a4><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>Community Chat</a></li><li data-v-379548a4><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-379548a4>Twitter</a></li><li data-v-379548a4><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>News</a></li></ul><h3 data-v-379548a4>Ecosystem</h3><ul data-v-379548a4><li data-v-379548a4><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>vue-router</a></li><li data-v-379548a4><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>vuex</a></li><li data-v-379548a4><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-379548a4>vue-devtools</a></li><li data-v-379548a4><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>vue-loader</a></li><li data-v-379548a4><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-379548a4>awesome-vue</a></li></ul>',7);function w(t,e,a,n,r,l){return Object(o["h"])(),Object(o["c"])("div",y,[Object(o["d"])("h1",null,Object(o["m"])(a.msg),1),_])}var D={name:"HelloWorld",props:{msg:String}},x=(a("5cd2"),a("6b0d")),T=a.n(x);const L=T()(D,[["render",w],["__scopeId","data-v-379548a4"]]);var C=L,I={class:"row"},P={class:"col-9"},E={class:"col-3"};function S(t,e,a,n,r,l){return Object(o["h"])(),Object(o["c"])("form",null,[Object(o["d"])("div",I,[Object(o["d"])("div",P,[Object(o["p"])(Object(o["d"])("input",{type:"text",class:"form-control rounded-pill","onUpdate:modelValue":e[0]||(e[0]=function(t){return r.todo=t})},null,512),[[o["o"],r.todo]])]),Object(o["d"])("div",E,[Object(o["d"])("button",{onClick:e[1]||(e[1]=Object(o["r"])((function(){return l.add&&l.add.apply(l,arguments)}),["prevent"])),class:"btn btn-success rounded-pill"},"Add Task")])])])}var A={name:"Input",data:function(){return{todo:""}},emits:["add"],methods:{add:function(){this.$emit("add",this.todo),this.todo=""}}};const U=T()(A,[["render",S]]);var V=U,M={name:"App",components:{Input:V,HelloWorld:C},data:function(){return{todoList:[{id:0,task:"Do something",isDone:!1,isDelete:!1,isEditing:!1}]}},methods:{addTodo:function(t){var e=this.todoList.length;this.todoList.push({id:e,task:t,isDone:!1,isDelete:!1,isEditing:!1})},removeTodo:function(t){var e=this;this.todoList.map((function(e){e.id===t&&(e.isDelete=!0)})),setTimeout((function(){return e.todoList=e.todoList.filter((function(e){return e.id!==t}))}),500)}},computed:{doneTotal:function(){return this.todoList.filter((function(t){return t.isDone})).length}}};a("b345");const J=T()(M,[["render",k]]);var F=J;a("f9e3"),a("77ed");Object(o["b"])(F).mount("#app")},"5b63":function(t,e,a){},"5cd2":function(t,e,a){"use strict";a("5b63")},b345:function(t,e,a){"use strict";a("4a77")}});
//# sourceMappingURL=app.696c3896.js.map