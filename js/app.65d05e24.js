(function(e){function t(t){for(var o,d,l=t[0],c=t[1],i=t[2],u=0,b=[];u<l.length;u++)d=l[u],Object.prototype.hasOwnProperty.call(n,d)&&n[d]&&b.push(n[d][0]),n[d]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);s&&s(t);while(b.length)b.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(o=!1)}o&&(r.splice(t--,1),e=d(d.s=a[0]))}return e}var o={},n={app:0},r=[];function d(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.m=e,d.c=o,d.d=function(e,t,a){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(a,o,function(t){return e[t]}.bind(null,o));return a},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/VueTodo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23"),n={class:"container"},r={class:"row justify-content-center"},d={class:"col-5"},l={class:"card"},c=Object(o["d"])("div",{class:"card-header"},[Object(o["d"])("h1",null,"Todo List")],-1),i={class:"card-body"},s={class:"d-flex justify-content-start my-2"},u={key:0,class:"badge rounded-pill bg-primary"},b={key:1,class:"badge rounded-pill bg-success float-end"},p={class:"list-group rounded"},v=["onDblclickCapture"],f={key:0,class:"col-9"},h=["onUpdate:modelValue","onKeypress"],j={key:1,class:"col-9"},O=["id","onUpdate:modelValue"],g=["for"],m=["onClick"];function k(e,t,a,k,y,_){var w=Object(o["l"])("Input");return Object(o["h"])(),Object(o["c"])("div",n,[Object(o["d"])("div",r,[Object(o["d"])("div",d,[Object(o["d"])("div",l,[c,Object(o["d"])("div",i,[Object(o["f"])(w,{onAdd:_.addTodo},null,8,["onAdd"]),Object(o["d"])("div",s,[_.doneTotal!==y.todoList.length?(Object(o["h"])(),Object(o["c"])("span",u,"Done "+Object(o["m"])(_.doneTotal),1)):(Object(o["h"])(),Object(o["c"])("span",b,"All Done, Good Job"))]),Object(o["d"])("ul",p,[(Object(o["h"])(!0),Object(o["c"])(o["a"],null,Object(o["k"])(y.todoList,(function(e){return Object(o["h"])(),Object(o["c"])("li",{key:e.id,class:Object(o["g"])(["list-group-item created d-flex",{deleted:e.isDelete}]),onDblclickCapture:function(t){return e.isEditing=!0}},[e.isEditing?(Object(o["h"])(),Object(o["c"])("div",f,[Object(o["p"])(Object(o["d"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(t){return e.task=t},onKeypress:Object(o["q"])((function(t){return e.isEditing=!1}),["enter"])},null,40,h),[[o["o"],e.task]])])):(Object(o["h"])(),Object(o["c"])("div",j,[Object(o["p"])(Object(o["d"])("input",{type:"checkbox",class:"form-check-input me-3",id:"todoId"+e.id,"onUpdate:modelValue":function(t){return e.isDone=t}},null,8,O),[[o["n"],e.isDone]]),Object(o["d"])("label",{for:"todoId"+e.id,class:Object(o["g"])(["form-label",{done:e.isDone}])},Object(o["m"])(e.task),11,g)])),Object(o["d"])("button",{class:"btn btn-danger btn-sm col-3",onClick:function(t){return _.removeTodo(e.id)}},"Delete",8,m)],42,v)})),128))])])])])])])}a("d81d"),a("4de4"),a("d3b7");var y={class:"hello"},_=Object(o["e"])('<p data-v-379548a4> For a guide and recipes on how to configure / customize this project,<br data-v-379548a4> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>vue-cli documentation</a>. </p><h3 data-v-379548a4>Installed CLI Plugins</h3><ul data-v-379548a4><li data-v-379548a4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-379548a4>babel</a></li></ul><h3 data-v-379548a4>Essential Links</h3><ul data-v-379548a4><li data-v-379548a4><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-379548a4>Core Docs</a></li><li data-v-379548a4><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>Forum</a></li><li data-v-379548a4><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>Community Chat</a></li><li data-v-379548a4><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-379548a4>Twitter</a></li><li data-v-379548a4><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>News</a></li></ul><h3 data-v-379548a4>Ecosystem</h3><ul data-v-379548a4><li data-v-379548a4><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>vue-router</a></li><li data-v-379548a4><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>vuex</a></li><li data-v-379548a4><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-379548a4>vue-devtools</a></li><li data-v-379548a4><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-379548a4>vue-loader</a></li><li data-v-379548a4><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-379548a4>awesome-vue</a></li></ul>',7);function w(e,t,a,n,r,d){return Object(o["h"])(),Object(o["c"])("div",y,[Object(o["d"])("h1",null,Object(o["m"])(a.msg),1),_])}var D={name:"HelloWorld",props:{msg:String}},T=(a("5cd2"),a("6b0d")),x=a.n(T);const L=x()(D,[["render",w],["__scopeId","data-v-379548a4"]]);var I=L,C={class:"row"},P={class:"col-9"},E={class:"col-3"};function S(e,t,a,n,r,d){return Object(o["h"])(),Object(o["c"])("form",null,[Object(o["d"])("div",C,[Object(o["d"])("div",P,[Object(o["p"])(Object(o["d"])("input",{type:"text",class:"form-control rounded-pill","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.todo=e})},null,512),[[o["o"],r.todo]])]),Object(o["d"])("div",E,[Object(o["d"])("button",{onClick:t[1]||(t[1]=Object(o["r"])((function(){return d.add&&d.add.apply(d,arguments)}),["prevent"])),class:"btn btn-success rounded-pill"},"Add Task")])])])}var V={name:"Input",data:function(){return{todo:""}},emits:["add"],methods:{add:function(){this.$emit("add",this.todo),this.todo=""}}};const A=x()(V,[["render",S]]);var U=A,M={name:"App",components:{Input:U,HelloWorld:I},data:function(){return{currentId:0,todoList:[{id:0,task:"Do something",isDone:!1,isDelete:!1,isEditing:!1}]}},methods:{addTodo:function(e){this.todoList.push({id:++this.currentId,task:e,isDone:!1,isDelete:!1,isEditing:!1})},removeTodo:function(e){var t=this;this.todoList.map((function(t){t.id===e&&(t.isDelete=!0)})),setTimeout((function(){return t.todoList=t.todoList.filter((function(t){return t.id!==e}))}),500)}},computed:{doneTotal:function(){return this.todoList.filter((function(e){return e.isDone})).length}}};a("a7fb");const J=x()(M,[["render",k]]);var F=J;a("f9e3"),a("77ed");Object(o["b"])(F).mount("#app")},"5b63":function(e,t,a){},"5cd2":function(e,t,a){"use strict";a("5b63")},a7fb:function(e,t,a){"use strict";a("b7fd")},b7fd:function(e,t,a){}});
//# sourceMappingURL=app.65d05e24.js.map