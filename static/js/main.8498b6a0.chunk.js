(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),c=a(14),u=a.n(c),o=a(3),l=(a(22),a(4)),i=a(15),m=a(2),d=a.n(m),g="https://login-backend-rest-api.herokuapp.com/",p={search:function(e){return d.a.get("".concat(g,"?username=").concat(e)).then(function(e){return e.data})},login:function(e){return d.a.post(g,{action:"login",obj:e}).then(function(e){return e.data})},logout:function(e){return d.a.post(g,{action:"logout",obj:e}).then(function(e){return e.data})},create:function(e){return d.a.post(g,{action:"create",obj:e}).then(function(e){return e.data})},update:function(e){return d.a.put(g,e).then(function(e){return e.data})},del:function(e){return d.a.post(g,{action:"delete",obj:e}).then(function(e){return e.data})}},f=function(e){var t,a=e.u,n=e.setUser,r=e.setMessage,c=e.setMessageStatus,u=e.setTimer;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"logged"},s.a.createElement("h3",null,"Logged in as user ",a.username),s.a.createElement("button",{className:"btnAction",onClick:function(){var e={id:a.id};p.logout(e).then(function(){n(),c("success"),r("Logged out!"),u(2e3)}).catch(function(e){r(e),c("error"),u(2e3)})}},"log out")),s.a.createElement("form",{id:"editName",value:a.id,onSubmit:function(e){e.preventDefault();var t={id:a.id,loginKey:a.loginKey,username:e.target[0].value};p.update(t).then(function(e){"object"===typeof e?(n(Object(i.a)({},a,{username:e.username})),r("Username changed to ".concat(e.username,"!")),c("success"),u(2e3)):(r(e),c("alert"),u(2e3))})}},s.a.createElement("p",null,"Change name"),s.a.createElement("input",(t={placeholder:"Username"},Object(l.a)(t,"placeholder",a.username),Object(l.a)(t,"required",!0),t)),s.a.createElement("button",null,"Send")),s.a.createElement("form",{id:"editPassword",onSubmit:function(e){e.preventDefault();var t={id:a.id,loginKey:a.loginKey,password:e.target[0].value,newPassword:e.target[1].value};p.update(t).then(function(e){"object"===typeof e?(r(e.mes),c("success"),u(2e3)):(r(e),c("error"),u(2e3))})}},s.a.createElement("p",null,"Change password"),s.a.createElement("input",{placeholder:"Old Password",type:"password",required:!0}),s.a.createElement("input",{placeholder:"New Password",type:"password",required:!0}),s.a.createElement("button",null,"Send")),s.a.createElement("div",{className:"delete"},s.a.createElement("p",null,"Delete user"),s.a.createElement("button",{onClick:function(e){if(e.preventDefault(),window.confirm("Are you sure you want to delete your account? This is permanent!")){var t={id:a.id,loginKey:a.loginKey};p.del(t).then(function(e){n(),r(e),c("alert"),u(2e3)})}}},"Delete User")))},E=function(e){var t=e.user,a=e.setUser,n=e.setMessage,r=e.setMessageStatus,c=e.setTimer,u=e.resetRegister;return t?(u(),s.a.createElement(f,{u:t,setUser:a,setMessage:n,setMessageStatus:r,setTimer:c})):[s.a.createElement(s.a.Fragment,null)]},b=function(e){var t=e.setUser,a=e.setMessage,n=e.setMessageStatus,r=e.setTimer;return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{id:"register",className:"hide",onSubmit:function(e){e.preventDefault();var s={username:e.target[0].value,password:e.target[1].value};p.create(s).then(function(e){"object"===typeof e?(t(e),a("User ".concat(e.username," created!")),n("success"),r(2e3)):(a(e),n("alert"),r(2e3))}).catch(function(e){a(e),n("error"),r(2e3)})}},s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Username",required:!0}),s.a.createElement("input",{placeholder:"Password",type:"password",required:!0})),s.a.createElement("button",null,"Register")))},h=function(e){var t=e.setUser,a=e.setMessage,n=e.setMessageStatus,r=e.setTimer;return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{id:"login",onSubmit:function(e){e.preventDefault();var s={username:e.target[0].value,password:e.target[1].value};p.login(s).then(function(e){"object"===typeof e?(t(e),a("Logged in as ".concat(e.username)),n("success"),r(2e3)):(a(e),n("error"),r(2e3))}).catch(function(e){a(e),n("error"),r(2e3)})}},s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Username",required:!0}),s.a.createElement("input",{placeholder:"Password",type:"password",required:!0})),s.a.createElement("button",null,"Login")))};var v=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],u=Object(r.useState)(!0),l=Object(o.a)(u,2),i=l[0],m=l[1],d=Object(r.useState)(),g=Object(o.a)(d,2),f=g[0],v=g[1],w=Object(r.useState)("success"),j=Object(o.a)(w,2),y=j[0],S=j[1],M=Object(r.useState)(!1),O=Object(o.a)(M,2),U=O[0],N=O[1],T=Object(r.useState)(),k=Object(o.a)(T,2),L=k[0],A=k[1];p.search("muumipeikko").then(function(e){}).catch(function(e){console.log(e)});var q=function(e){"true"===e.target.value?(m(!0),document.getElementById("register").classList.add("hide"),document.getElementById("login").classList.remove("hide")):(m(!1),document.getElementById("register").classList.remove("hide"),document.getElementById("login").classList.add("hide"))},D=function(e){U&&clearTimeout(n),N(!0),A("show"),n=setTimeout(function(){A(),setTimeout(function(){v(null)},51),N(!1)},e)};return s.a.createElement("div",{className:"App"},s.a.createElement("span",{id:"messages",className:"".concat(y," ").concat(L)},s.a.createElement("p",null,f)),s.a.createElement("div",{className:a?"userPage":"userActions"},!a&&s.a.createElement("div",{className:"selectors"},s.a.createElement("button",{onClick:q,value:!0,className:i?"btnAction active":"btnAction"},"Login"),s.a.createElement("button",{onClick:q,value:!1,className:i?"btnAction":"btnAction active"},"Register")),a?s.a.createElement(E,{user:a,setUser:c,setMessage:v,setMessageStatus:S,setTimer:D,resetRegister:function(){i||m(!0)}}):s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{setUser:c,setMessage:v,setMessageStatus:S,setTimer:D}),s.a.createElement(h,{setUser:c,setMessage:v,setMessageStatus:S,setTimer:D}))))};u.a.render(s.a.createElement(v,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8498b6a0.chunk.js.map