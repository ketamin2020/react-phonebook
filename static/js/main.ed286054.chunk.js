(this.webpackJsonphomework_2=this.webpackJsonphomework_2||[]).push([[0],{14:function(e,t,n){e.exports={enter:"list-transition_enter__tnCkk",enterActive:"list-transition_enterActive__2Fjo8",exit:"list-transition_exit__15t5U",exitActive:"list-transition_exitActive__1I2q5"}},15:function(e,t,n){e.exports={appear:"phonebook-transition_appear__8uz0L",appearActive:"phonebook-transition_appearActive__3O6AR"}},16:function(e,t,n){e.exports={enter:"notification_enter__UIyZC",enterActive:"notification_enterActive__2ltee",exit:"notification_exit__8tGZv",exitActive:"notification_exitActive__2wuLT"}},19:function(e,t,n){e.exports=n(27)},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=n(17),l=n(1),s=n(2),u=n(6),m=n(5),f=n(29),p=n(30),v=n(13),h=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleAddContact=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(v.a)({},a,r))},e.handleSubmit=function(t){var n=e.state,a=n.name,r=n.number,c=e.props.createTask;t.preventDefault(),c(a,r),e.setState({name:"",number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"text",name:"name",required:!0,value:this.state.name,onChange:this.handleAddContact}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,"Name")),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"tel",name:"number",required:!0,value:this.state.number,onChange:this.handleAddContact}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,"Number ")),r.a.createElement("button",{className:"glow-on-hover",type:"submit"},"Add contact")))}}]),n}(a.Component),E=n(31),b=n(14),d=n.n(b),_=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.removeContact;return r.a.createElement(E.a,{component:"ul",className:"items"},t.map((function(e){var t=e.id,a=e.name,c=e.contact;return r.a.createElement(f.a,{key:t,timeout:400,classNames:d.a},r.a.createElement("li",{key:t,className:"list"},r.a.createElement("div",{className:"infoContact"},r.a.createElement("p",null,"Name: ",a)," ",r.a.createElement("p",null,"Tel. ",c)),r.a.createElement("button",{type:"button",className:"btn cross",onClick:function(){return n(t)}})))})))}}]),n}(a.Component),g=n(15),k=n.n(g);var C=function(e){var t=e.title,n=e.children;return r.a.createElement("section",null,r.a.createElement(f.a,{in:!0,appear:!0,key:t,timeout:1100,classNames:k.a,mountOnEnter:!0},r.a.createElement("h2",null,t)),n)};function y(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"text",value:t,required:!0,onChange:function(e){return n(e.target.value)}}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,"Search Contact "))}var N=function(){return r.a.createElement("div",{className:"notifi"},r.a.createElement("p",null,"Contact already exsist!"))},O=n(16),S=n.n(O),A=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:"",notification:!1},e.changeFilter=function(t){e.setState({filter:t})},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.showSortTask=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.createTask=function(t,n){if(e.state.contacts.some((function(e){return e.name===t})))return e.setState({notification:!0}),void setTimeout((function(){return e.setState({notification:!1})}),4e3);var a={id:Object(p.a)(),name:t,contact:n};e.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[a])}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.showSortTask(),t=this.state,n=t.contacts,a=t.filter,c=t.notification;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{in:c,classNames:S.a,timeout:1e3,unmountOnExit:!0},r.a.createElement(N,null)),r.a.createElement(C,{title:"Phonebook"},r.a.createElement(h,{createTask:this.createTask})),r.a.createElement(C,{title:n.length>0?"Contacts":"Do not have contacts"},n.length>1&&r.a.createElement(y,{value:a,onChangeFilter:this.changeFilter}),r.a.createElement(_,{items:e,removeContact:this.removeContact})))}}]),n}(a.Component);function j(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null))}n(26);o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ed286054.chunk.js.map