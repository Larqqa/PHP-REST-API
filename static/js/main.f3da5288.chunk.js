(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},21:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),c=a(13),u=a.n(c),o=a(3),l=(a(21),a(14)),i=a(2),m=a.n(i),d="https://login-backend-rest-api.herokuapp.com/",g=function(e){return m.a.post(d,{action:"login",obj:e}).then(function(e){return e.data})},p=function(e){return m.a.post(d,{action:"logout",obj:e}).then(function(e){return e.data})},f=function(e){return m.a.post(d,{action:"create",obj:e}).then(function(e){return e.data})},E=function(e){return m.a.put(d,e).then(function(e){return e.data})},b=function(e){return m.a.post(d,{action:"delete",obj:e}).then(function(e){return e.data})},v=function(e){var t=e.u,a=e.setUser,n=e.setMessage,r=e.setMessageStatus,c=e.setTimer;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"logged"},s.a.createElement("h3",null,"Logged in as user ",t.username),s.a.createElement("button",{className:"btnAction",onClick:function(){var e={id:t.id};p(e).then(function(){a(),r("success"),n("Logged out!"),c(2e3)}).catch(function(e){n(e),r("error"),c(2e3)})}},"log out")),s.a.createElement("form",{id:"editName",value:t.id,onSubmit:function(e){e.preventDefault();var s={id:t.id,loginKey:t.loginKey,username:e.target[0].value};E(s).then(function(e){"object"===typeof e?(a(Object(l.a)({},t,{username:e.username})),n("Username changed to ".concat(e.username,"!")),r("success"),c(2e3)):(n(e),r("alert"),c(2e3))})}},s.a.createElement("p",null,"Change name"),s.a.createElement("input",{placeholder:t.username?t.username:"Username",required:!0}),s.a.createElement("button",null,"Send")),s.a.createElement("form",{id:"editPassword",onSubmit:function(e){e.preventDefault();var a={id:t.id,loginKey:t.loginKey,password:e.target[0].value,newPassword:e.target[1].value};E(a).then(function(e){"object"===typeof e?(n(e.mes),r("success"),c(2e3)):(n(e),r("error"),c(2e3))})}},s.a.createElement("p",null,"Change password"),s.a.createElement("input",{placeholder:"Old Password",type:"password",required:!0}),s.a.createElement("input",{placeholder:"New Password",type:"password",required:!0}),s.a.createElement("button",null,"Send")),s.a.createElement("div",{className:"delete"},s.a.createElement("p",null,"Delete user"),s.a.createElement("button",{onClick:function(e){if(e.preventDefault(),window.confirm("Are you sure you want to delete your account? This is permanent!")){var s={id:t.id,loginKey:t.loginKey};b(s).then(function(e){a(),n(e),r("alert"),c(2e3)})}}},"Delete User")))},h=function(e){var t=e.user,a=e.setUser,n=e.setMessage,r=e.setMessageStatus,c=e.setTimer,u=e.resetRegister;return t?(u(),s.a.createElement(v,{u:t,setUser:a,setMessage:n,setMessageStatus:r,setTimer:c})):[s.a.createElement(s.a.Fragment,null)]},w=function(e){var t=e.setUser,a=e.setMessage,n=e.setMessageStatus,r=e.setTimer;return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{id:"register",className:"hide",onSubmit:function(e){e.preventDefault();var s={username:e.target[0].value,password:e.target[1].value};f(s).then(function(e){"object"===typeof e?(t(e),a("User ".concat(e.username," created!")),n("success"),r(2e3)):(a(e),n("alert"),r(2e3))}).catch(function(e){a(e),n("error"),r(2e3)})}},s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Username",required:!0}),s.a.createElement("input",{placeholder:"Password",type:"password",required:!0})),s.a.createElement("button",null,"Register")))},y=function(e){var t=e.setUser,a=e.setMessage,n=e.setMessageStatus,r=e.setTimer;return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{id:"login",onSubmit:function(e){e.preventDefault();var s={username:e.target[0].value,password:e.target[1].value};g(s).then(function(e){"object"===typeof e?(t(e),a("Logged in as ".concat(e.username)),n("success"),r(2e3)):(a(e),n("error"),r(2e3))}).catch(function(e){a(e),n("error"),r(2e3)})}},s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Username",required:!0}),s.a.createElement("input",{placeholder:"Password",type:"password",required:!0})),s.a.createElement("button",null,"Login")))};var j=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],u=Object(r.useState)(!0),l=Object(o.a)(u,2),i=l[0],m=l[1],d=Object(r.useState)(),g=Object(o.a)(d,2),p=g[0],f=g[1],E=Object(r.useState)("success"),b=Object(o.a)(E,2),v=b[0],j=b[1],S=Object(r.useState)(!1),M=Object(o.a)(S,2),O=M[0],U=M[1],N=Object(r.useState)(),T=Object(o.a)(N,2),L=T[0],k=T[1],A=function(e){"true"===e.target.value?(m(!0),document.getElementById("register").classList.add("hide"),document.getElementById("login").classList.remove("hide")):(m(!1),document.getElementById("register").classList.remove("hide"),document.getElementById("login").classList.add("hide"))},q=function(e){O&&clearTimeout(n),U(!0),k("show"),n=setTimeout(function(){k(),setTimeout(function(){f(null)},51),U(!1)},e)};return s.a.createElement("div",{className:"App"},s.a.createElement("span",{id:"messages",className:"".concat(v," ").concat(L)},s.a.createElement("p",null,p)),s.a.createElement("div",{className:a?"userPage":"userActions"},!a&&s.a.createElement("div",{className:"selectors"},s.a.createElement("button",{onClick:A,value:!0,className:i?"btnAction active":"btnAction"},"Login"),s.a.createElement("button",{onClick:A,value:!1,className:i?"btnAction":"btnAction active"},"Register")),a?s.a.createElement(h,{user:a,setUser:c,setMessage:f,setMessageStatus:j,setTimer:q,resetRegister:function(){i||m(!0)}}):s.a.createElement(s.a.Fragment,null,s.a.createElement(w,{setUser:c,setMessage:f,setMessageStatus:j,setTimer:q}),s.a.createElement(y,{setUser:c,setMessage:f,setMessageStatus:j,setTimer:q}))))};u.a.render(s.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f3da5288.chunk.js.map