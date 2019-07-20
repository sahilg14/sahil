(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(7),s=t.n(l),r=(t(14),t(1)),o=t(2),c=t(4),m=t(3),u=t(5),h=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),i.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("i",{className:e.className})))})))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"five columns"},i.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),i.a.createElement("div",{className:"seven columns main-col"},i.a.createElement("h2",null,"About Me"),i.a.createElement("p",null,e.aboutme),!1)))}}]),a}(n.Component),p=(n.Component,function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h1",null,"Some of My Independent Projects."))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{id:"portfolio-wrapper",className:"cf"},e.portfolio&&e.portfolio.map(function(e){return i.a.createElement("div",{className:"portfolio-item"},i.a.createElement("a",{className:"five columns item-wrap",target:"_blank",rel:"noopener noreferrer",href:"".concat(e.link)},i.a.createElement("div",{className:""},i.a.createElement("div",{className:"item-wrap"},i.a.createElement("img",{alt:"Portfolio",src:"".concat(e.imgurl),className:"item-img"}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"portfolio-item-meta"},i.a.createElement("h2",{className:"live"},i.a.createElement("i",{className:"fa fa-external-link"})," Live")))))),i.a.createElement("div",{className:"seven columns item-wrap"},i.a.createElement("h4",{className:"centerText"},e.name),i.a.createElement("p",null,e.description)))}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"testimonials"},i.a.createElement("div",{className:"text-container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"two columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Client Testimonials"))),i.a.createElement("div",{className:"ten columns flex-container"},i.a.createElement("div",{className:"flexslider"},i.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return i.a.createElement("li",null,i.a.createElement("blockquote",null,i.a.createElement("p",null,e.description),i.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),g=function(e){return i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{className:"form-input",id:e.name,name:e.name,type:e.type,value:e.value,onChange:e.handleChange,placeholder:e.placeholder}))},v=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={name:"",email:"",message:"",loading:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state;this.setState({loading:!0}),fetch("https://elementarycreative.com/send_form_email.php",{method:"POST",body:JSON.stringify(a),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){console.log("Success")})}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{id:"contact"},i.a.createElement("div",{className:"contactUsForm row"},i.a.createElement("div",{className:"twelve section-head centerText columns"},i.a.createElement("h3",{className:"lead"},"Feel free to contact me for any work or suggestions below")),i.a.createElement("form",null,i.a.createElement("div",{className:"columns six"},i.a.createElement(g,{id:"name",name:"name",type:"text",value:this.state.name,handleChange:function(a){e.setState({name:a.target.value})},placeholder:"Name"})),i.a.createElement("div",{className:"columns six"},i.a.createElement(g,{id:"email",name:"email",type:"text",value:this.state.email,handleChange:function(a){e.setState({email:a.target.value})},placeholder:"Email"})),i.a.createElement("div",{className:"columns twelve"},i.a.createElement("textarea",{onChange:function(a){e.setState({message:a.target.value})},id:"Message",name:"message",placeholder:"Message",value:this.state.message})),i.a.createElement("div",{className:"columns centerText twelve"},i.a.createElement("button",{onClick:function(a){e.handleSubmit(a)},id:"Submit",name:"Submit"},"Submit")))))}}]),a}(n.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b={imagebaseurl:"https://sahilg14.github.io/",name:"Sahil Goyal",role:"Full Stack Software Engineer",linkedinId:"sahilg14",skypeid:"sahilg14",roleDescription:" I like to create applications that we can use in daily life. I like to learn about new technologies, trying different cuisines.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/sahilg14",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/sahilg14",className:"fa fa-github"},{name:"twitter",url:"http://twitter.com/sahilg14",className:"fa fa-twitter"}],aboutme:"I am currently a full stack software engineer at a major Fintech in Canada. I am an electronics engineer, currently diving deeper into bringing hardware and software together to make something meaningfull. I believe that we must try to listen with the intent to understand , not to reply.",address:"Canada",website:"https://sahilg14.github.io/sahil",education:[{UniversityName:"University of Windsor",specialization:"Electrical and Computer Engineering",MonthOfPassing:"Aug",YearOfPassing:"2016",Achievements:"Research Assistant at United way centraid Windsor-Essex County"},{UniversityName:"Panjab University",specialization:"Electronics and Communication Engineering",MonthOfPassing:"June",YearOfPassing:"2015",Achievements:"Robotics and Embedded Systems Circuit designing and Manufacturing"}],work:[{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"},{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"}],skillsDescription:"Your skills here",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"London Top Tailoring",description:"I first met Hamid in London, Ontario. He asked me if i could help him with making an online presence for his clothing alterations business. I was very excited to work with him as this would be my first real world project. He started getting online enquiries, from day one given that he was already getting a lot of organic traffic in google business listings. I still take care of the maintainence of his website. ",imgurl:"images/portfolio/bg2.jpg",link:"http://www.londontoptailoring.com/"},{name:"Velezfit",description:"Juan was very passionate about physical fitness and then he turned this passion in to motivation to build his business in personal training. He started with basic digital marketing like facebook and instagram ads, but then he realised he needed a portal with more information about his services that would keep the customers engaged and also take it to the next step. Making the sale ! He now does meal planning, online training sessions, and one on one training.",imgurl:"images/portfolio/p3.jpeg",link:"https://www.velezfit.com/"}],testimonials:[{description:"After Sahil redesigned our we site we a got lot of contracts. He not only has the skills to do the job but also he listens what you want to do and works hard to accomplish it. I highly recommend him to build or redesign your web site.",name:"Jorge Velez - Ezee Computer Training"},{description:"I had the pleasure of working with one of the easiest to deal with designers I\u2019ve ever met. He was very open and listened to all my ideas while at the same time providing his suggestions and expertise. I would certainly work with him for any future ventures and I highly recommend the use of their services to anyone!",name:"Juan - Velezfit"}]},w=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,{resumeData:b}),i.a.createElement(d,{resumeData:b}),!1,i.a.createElement(p,{resumeData:b}),i.a.createElement(f,{resumeData:b}),i.a.createElement(v,{resumeData:b}),i.a.createElement(E,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.07e43918.chunk.js.map