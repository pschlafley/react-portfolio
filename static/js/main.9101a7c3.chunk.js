(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),r=a(8),i=a.n(r),l=(a(15),a(3)),o=(a(16),function(e){var t=e.tabs,a=e.currentPage,n=e.setCurrentPage;return Object(c.useEffect)((function(){document.title=a}),[a]),Object(s.jsx)("ul",{className:"flex-row",children:t.map((function(e){return Object(s.jsx)("li",{className:"pointer px-2 cs-2 my-2 list-style",children:Object(s.jsx)("span",{onClick:function(){return n(e)},className:a===e?"nav-active":"non-active",children:e})},e)}))})}),h=function(e){var t=e.currentPage,a=e.setCurrentPage;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"div-center center-align pt-5",children:[Object(s.jsx)("span",{className:"color-1 font-1 font-weight-lighter",children:"Peyton"}),Object(s.jsx)("span",{className:"font-1 font-italic font-weight-bold color-4",children:"S."})]}),Object(s.jsx)("div",{className:"flex-row pt-3 pr-5 box",children:Object(s.jsx)(o,{tabs:e.tabs,currentPage:t,setCurrentPage:a})})]})};var b=function(){return Object(s.jsx)("footer",{children:Object(s.jsxs)("div",{className:"flex-row box",children:[Object(s.jsx)("div",{className:"pr-5",children:Object(s.jsx)("a",{target:"_blank",href:"https://github.com/pschlafley",rel:"noreferrer",children:Object(s.jsx)("i",{className:"color-3 fab fa-github fa-3x"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/peyton-schlafley-81125a1b1/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"color-3 fab fa-linkedin fa-3x"})})})]})})},j=a(4),u=a(6);var m=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),o=i[0],h=i[1],b=a.name,m=a.email,d=a.message;function p(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);h(t?"":"Your Email is invalid.")}else e.target.value.length?h(""):h("".concat(e.target.name," is required"));o||n(Object(u.a)(Object(u.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))}return Object(s.jsxs)("section",{className:"pt-3",children:[Object(s.jsx)("h2",{className:"section-title pt-5",children:"Contact Me"}),Object(s.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"name",defaultValue:b,onBlur:p})]}),Object(s.jsxs)("div",{className:"pt-3",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"email",name:"email",defaultValue:m,onBlur:p})]}),Object(s.jsxs)("div",{className:"pt-3 pb-1",children:[Object(s.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{name:"message",rows:"5",defaultValue:d,onBlur:p})]}),o&&Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"error-text",children:o})}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})]})},d=a.p+"static/media/peyton.375a8b7a.png",p=a(9);var g=function(){return Object(s.jsxs)("section",{className:"pt-3",children:[Object(s.jsx)("h2",{className:"my-5 px-2 cs-2 pt-2 section-title",children:"About Me"}),Object(s.jsx)(p.a,{src:d,className:"about-image"}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{id:"brand-statement",className:"cs-2 px-1 py-2 my-5",children:["Hi, I'm Peyton Schlafley.",Object(s.jsx)("br",{}),"I am a Full-Stack web developer.",Object(s.jsx)("br",{}),"Throughout my life I have always been involved in sports, my favorite sport being soccer. My favorite part about playing soccer is not only the competiveness of the sport, but also how much of a team sport it is. You can't win a game without good communication, and the ability to solve problems and look for ways to score goals. I am a hard worker with good communication, problem solving skills, and a willingness to take on new challenges and learn new skills.",Object(s.jsx)("br",{}),"I recently graduated with a certificate in full stack Web Development from the University of Pennsylvania's Coding Bootcamp, who partners with Trilogy Education Services, where I have learned the technical skills needed to be a highly effective and efficient Web Developer. With proficiency in the MERN stack, which includes MondoDB, Express, React, and Node.js, I can make fast and functional web applications."]})})]})},f=[{name:"Tune Out",src:a.p+"static/media/tune-out.1060158a.png",alt:"",technologies:["HTML / CSS / JavaScript / JQuery  Materialize / Taste Dive Api / NYT Api"],url:"https://bspiewak6.github.io/music/",github:"https://github.com/bspiewak6/music"},{name:"Simply ReUse",src:a.p+"static/media/simplyreuse.4f3cc944.png",alt:"",technologies:["Node.js / Express.js / JavaScript / MySQL Sequelize / Handlebars / bcrypt / dotenv  fuse.js / CSS"],url:"https://simplyreuse3.herokuapp.com/",github:"https://github.com/pschlafley/Simply-ReUse"},{name:"Weather Dashboard",src:a.p+"static/media/weather-dashboard.e58a4416.png",alt:"",technologies:["HTML / CSS / JavaScript / JQuery / Bootstrap / OpenWeather Api"],url:"https://pschlafley.github.io/weatherDashboard/",github:"https://github.com/pschlafley/weatherDashboard"},{name:"Work Day Scheduler",src:a.p+"static/media/work-day-scheduler.9e7765aa.png",alt:"",technologies:["HTML / CSS / JavaScript / JQuery"],url:"https://pschlafley.github.io/Scheduler/",github:"https://github.com/pschlafley/Scheduler"},{name:"Budget Tracker",src:a.p+"static/media/budget-tracker.f9c11265.png",alt:"",technologies:["HTML / CSS / JavaScript / MongoDB / Mongoose / Express.js "],url:"https://budget-tracker100.herokuapp.com/",github:"https://github.com/pschlafley/budget-tracker"},{name:"Web Dev Blogs",src:a.p+"static/media/dashboard.f26a2731.png",alt:"",technologies:["HTML / CSS / JavaScript / bcrypt / connect-session-sequelize / express-handlebars / express-session / mysql2  Sequelize"],url:"https://web-dev-blogs.herokuapp.com/",github:"https://github.com/pschlafley/Tech-Blog"}],x=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"pt-4",children:Object(s.jsx)("h1",{className:"section-title my-5 px-2 cs-2",children:"Projects"})}),Object(s.jsx)("div",{className:"project-card-wrapper",children:f.map((function(e,t){return Object(s.jsxs)("div",{className:"card background-color my-5",children:[Object(s.jsx)("img",{src:e.src,alt:e.alt,className:"w-100"}),Object(s.jsxs)("div",{className:"container pt-5",children:[Object(s.jsx)("h4",{children:Object(s.jsx)("b",{children:e.name})}),Object(s.jsxs)("ul",{className:"p-3",children:[Object(s.jsx)("h5",{className:"technologies font-weight-light",children:"Technologies"}),Object(s.jsx)("li",{className:"technologies list-style font-weight-light",children:e.technologies})]}),Object(s.jsx)("a",{className:"project-link btn",href:e.url,target:"_blank",rel:"noreferrer",children:"Visit Page"}),Object(s.jsx)("a",{className:"project-link btn ml-3",href:e.github,target:"_blank",rel:"noreferrer",children:"Github Repo"})]})]},t)}))})]})},O=function(){return Object(s.jsxs)("div",{className:"pt-5 div-center",children:[Object(s.jsx)("h1",{className:"section-title",children:"Resume"}),Object(s.jsx)("div",{className:"w-25",children:Object(s.jsxs)("p",{id:"resume",children:["View my ",Object(s.jsx)("a",{href:"https://drive.google.com/file/d/1uwTtnRiq4hdjnw8tVz7Z0uqXJIJOzlNp/view?usp=sharing",target:"_blank",rel:"noreferrer",download:"",className:"resume-link",children:"resume"})]})}),Object(s.jsx)("h2",{className:"font-weight-lighter pt-5",children:"Front-End Proficiencies"}),Object(s.jsx)("ul",{className:"pt-3",children:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Bootstrap"},{name:"JQuery"},{name:"Responsive Design"},{name:"React"}].map((function(e,t){return Object(s.jsx)("li",{className:"pt-2 color-2",children:e.name},t)}))}),Object(s.jsx)("h2",{className:"pt-5 font-weight-lighter",children:"Back-End Proficiencies"}),Object(s.jsx)("ul",{className:"pt-3",children:[{name:"Node Js"},{name:"Express Js"},{name:"MySQL"},{name:"Sequelize"},{name:"MongoDB"},{name:"Mongoose"},{name:"REST"}].map((function(e,t){return Object(s.jsx)("li",{className:"pt-2 color-2",children:e.name},t)}))})]})};var v=function(){var e=Object(c.useState)("About Me"),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(s.jsx)("div",{className:"page-container",children:Object(s.jsxs)("div",{className:"content-wrap",children:[Object(s.jsx)(h,{tabs:["About Me","Portfolio","Resume","Contact Me"],currentPage:a,setCurrentPage:n}),function(){switch(a){case"Contact Me":return Object(s.jsx)(m,{});case"Portfolio":return Object(s.jsx)(x,{});case"Resume":return Object(s.jsx)(O,{});default:return Object(s.jsx)(g,{})}}(),Object(s.jsx)(b,{})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.9101a7c3.chunk.js.map