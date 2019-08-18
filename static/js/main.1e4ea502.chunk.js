(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),i=(a(57),a(49)),o=a(23),s=(a(58),a(11)),m=a(118),u=a(51),d=a(12),E=a(13),h=a(15),p=a(14),g=a(16),b=a(24),f=a.n(b),v=a(117),w=a(38),L=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={renderMsg:!1,redirect:!1},a.onHeaderTyped=function(){a.setState({renderMsg:!0})},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.id)}},{key:"render",value:function(){return this.state.redirect?l.a.createElement(v.a,{to:"/about"}):l.a.createElement("div",{style:{width:"100%",margin:"auto"}},l.a.createElement("div",{className:"homepage container"},l.a.createElement("div",{className:"homepage-banner row"},l.a.createElement(w.a,{to:"/about",onClick:function(){}},l.a.createElement("h1",{className:"homepage-title"},l.a.createElement(f.a,{avgTypingDelay:150,startDelay:1e3,onTypingDone:this.onHeaderTyped,cursor:{hideWhenDone:!0}},"jodigunawan",l.a.createElement(f.a.Backspace,{count:7,delay:1700}),"go;",l.a.createElement(f.a.Delay,{delay:800}),")",l.a.createElement(f.a.Backspace,{count:1,delay:1700})))),l.a.createElement("div",{className:"homepage-column container"},l.a.createElement("div",{className:"homepage-img mobile"},l.a.createElement("img",{className:"pp-home",src:a(47)})),l.a.createElement("div",{className:"homepage-info"},l.a.createElement("h3",null,"Hi, I'm Jodi."),l.a.createElement("h6",null,"I was born in Bali, Indonesia."),l.a.createElement("h6",null,"I moved to Vancouver, Canada."),l.a.createElement("h6",null,"I'm now a student at UBC."),l.a.createElement("h6",null,"I'm currently looking for a full-time software engineer position."),l.a.createElement("h6",null,"I play basketball and go on food-venture whenever I am not working/studying."),l.a.createElement("h6",null,". ."),l.a.createElement("h6",null,". ")),l.a.createElement("div",{className:"homepage-img desktop"},l.a.createElement("img",{className:"pp-home",src:a(47)}))))))}}]),t}(n.Component),y=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.descriptions.map(function(e,t){return l.a.createElement("li",null,l.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}}))});return l.a.createElement(s.Grid,{className:"about-grid-careers fix-margin"},l.a.createElement(s.Cell,{col:3},l.a.createElement("p",null,this.props.start," - ",this.props.end)),l.a.createElement(s.Cell,{col:9},l.a.createElement("p",null,l.a.createElement("strong",null,this.props.title)," at ",l.a.createElement("a",{href:this.props.link},this.props.location)),l.a.createElement("ul",null,e),l.a.createElement("p",null,"[",this.props.techs,"]")))}}]),t}(n.Component),k=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"page-container"},l.a.createElement("div",null,l.a.createElement("div",{className:"about-grid-info"},l.a.createElement("img",{className:"pp"}),l.a.createElement("div",null,l.a.createElement("h1",null,"about;"),l.a.createElement("div",{className:"contact-icons"},l.a.createElement("div",null,l.a.createElement("p",null,"Vancouver, Canada")),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:jgunawan.1098@gmail.com"},"jgunawan.1998 (at) gmail (dot) com"))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.instagram.com/jodigunawan/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),"\xa0/\xa0",l.a.createElement("a",{href:"https://www.linkedin.com/in/jodi-gunawan/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),"\xa0/\xa0",l.a.createElement("a",{href:"https://github.com/jodigo",target:"_blank",rel:"noopener noreferrer"},"Github")))),l.a.createElement("a",{href:"https://www.dropbox.com/s/bccizshq2jqgirt/Jodi%20Gunawan%20Resume%20-%201%20Page%202020.pdf?dl=0",download:!0,target:"_blank",className:"download-resume"},"Resume")))),l.a.createElement("br",null),l.a.createElement("h5",null,"Experiences"),l.a.createElement("hr",null),l.a.createElement(y,{start:"May 2019",end:"August 2019",title:"Junior Full Stack Developer",location:"UBC (Health Research Pavilion)",descriptions:["Redesigned the API and architecture using Python, AWS, Microsoft Azure and Docker to create partial serverless microservice architecture which increases modularity and reduces costs by 50%","Developed a dashboard using D3.js and React and a data visualization feature using ChartJS and Angular to provide interactive informative display of processed conversational data in 2 weeks duration","Implemented Natural Language Processing model for short text message analytic tools using predefined label, topic modelling and sentiment analysis with UBC Data Science Research Experts"],link:"https://www.msfhr.org/smart-text-analytic-tools-stat-analysis-patient-centred-communications-strengthen-health-systems-bc",techs:"Angular 6, React, AWS(S3, Lambda, Elastic BeanStalk, ECR), Microsoft Azure, Docker, Flask, PostgreSQL, Scikit Learn, Tensorflow"}),l.a.createElement(y,{start:"January 2018",end:"August 2018",title:"Software Developer",location:"Glacier Media Inc - Real Estate Wire",descriptions:["Developed <a href='https://www.rew.ca/news'>real estate news site</a> stored in AWS S3 using JS and search results localization using Rails which boosted user retention by 100%","Implemented an event tracking system using Google Bigquery to analyze the user pattern behavior for website data analytics","Migrated a legacy third party CMS Polopoly via a database design and import using PostgreSQL","Participated in biweekly sprints in Agile and Kanban culture with JIRA ticketing system"],link:"https://www.rew.ca/",techs:"AWS, Coffeescript, Google Bigquery, Heroku, JIRA, PostgreSQL, Redis, Ruby on Rails 5, Sass"}),l.a.createElement(y,{start:"September 2017",end:"December 2017",title:"Learning Technology Rover",location:"UBC Applied Science",descriptions:["Utilized Blackboard - Connect to managing students\u2019 grades database and ensuring bugless course content by testing","Provided initial face-to-face and remote learning technology support for instructors and faculty members","Teaching assistant for the first year courses: APSC100 and APSC101"],techs:"HTML5, CSS, WordPress, Connect, Python"}),l.a.createElement("div",{className:"about-skills container"},l.a.createElement("h5",null,"Skills"),l.a.createElement("hr",null),l.a.createElement("div",{className:"about-skills-container row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("h6",{className:"about-skills-subtitle"},"Languages"),l.a.createElement("p",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"HTML5 + CSS3")),l.a.createElement("li",null,l.a.createElement("p",null,"Javascript/jQuery")),l.a.createElement("li",null,l.a.createElement("p",null,"Typescript")),l.a.createElement("li",null,l.a.createElement("p",null,"Python")),l.a.createElement("li",null,l.a.createElement("p",null,"Ruby on Rails")),l.a.createElement("li",null,l.a.createElement("p",null,"C/C++")),l.a.createElement("li",null,l.a.createElement("p",null,"XML")),l.a.createElement("li",null,l.a.createElement("p",null,"SQL")),l.a.createElement("li",null,l.a.createElement("p",null,"Git")),l.a.createElement("li",null,l.a.createElement("p",null,"System Verilog")),l.a.createElement("li",null,l.a.createElement("p",null,"Assembly"))))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("h6",{className:"about-skills-subtitle"},"Frameworks + Libraries"),l.a.createElement("p",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"React.js")),l.a.createElement("li",null,l.a.createElement("p",null,"Angular")),l.a.createElement("li",null,l.a.createElement("p",null,"Flask")),l.a.createElement("li",null,l.a.createElement("p",null,"Amazon Web Services (AWS)")),l.a.createElement("li",null,l.a.createElement("p",null,"Microsoft Azure")),l.a.createElement("li",null,l.a.createElement("p",null,"PostgreSQL")),l.a.createElement("li",null,l.a.createElement("p",null,"NoSQL")),l.a.createElement("li",null,l.a.createElement("p",null,"Docker")),l.a.createElement("li",null,l.a.createElement("p",null,"Redis")),l.a.createElement("li",null,l.a.createElement("p",null,"ROS")),l.a.createElement("li",null,l.a.createElement("p",null,"Sass")),l.a.createElement("li",null,l.a.createElement("p",null,"Tensorflow"))))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("h6",{className:"about-skills-subtitle"},"Others"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"Agile Methodology")),l.a.createElement("li",null,l.a.createElement("p",null,"Kanban")),l.a.createElement("li",null,l.a.createElement("p",null,"Scrum")),l.a.createElement("li",null,l.a.createElement("p",null,"UI Design")),l.a.createElement("li",null,l.a.createElement("p",null,"Machine Learning")))))),l.a.createElement("br",null),l.a.createElement("div",{className:"education container"},l.a.createElement("h5",null,"Education"),l.a.createElement("hr",null),l.a.createElement("div",{className:"about-education-container"},l.a.createElement("p",null,l.a.createElement("strong",null,"University of British Columbia")," | Bachelor of Applied Science. Electrical Engineering, 2020."))),l.a.createElement("br",null),l.a.createElement("div",{className:"about-skills container"},l.a.createElement("h5",null,"Projects"),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-sm"},l.a.createElement("h6",{className:"about-skills-subtitle"},"UBC GISAU: ",l.a.createElement("a",{href:"https://www.gisaubc.com",target:"_blank"},"gisaubc.com")))))}}]),t}(n.Component),S=a(25),j=[{id:"ubc",title:"The University of British Columbia",address:"2075 Lower Mall, Vancouver, BC V6T 1Z2",heading:"I decided to make a simple-ish website to practice React's Hook and how to use <code>useState</code>, which releases after the new 16.8 React version. I thought might as well make this my portfolio/personal website since I need one :) also, semicolon looks like letter j.",other:"",coordinates:[49.26161773,-123.24955847]},{id:"wip",title:"WIP!",address:"3278 W Broadway, Vancouver, BC V6K 2H4",heading:"-- This page is a work in progress [Blog coming soon!] --",other:"",coordinates:[49.192879,-123.16066]}];var N=function(){var e=j.reduce(function(e,t){return e[t.id]=Object(n.createRef)(),e},{}),t=Object(n.useState)({latitude:49.21920015,longitude:-123.13836515,zoom:10.5,width:"50vw",height:"100vh"}),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(null),s=Object(o.a)(i,2),m=s[0],u=s[1];return Object(n.useEffect)(function(){var e=function(e){"Escape"===e.key&&u(null)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}},[]),l.a.createElement("div",{id:"feed-container"},l.a.createElement("div",{className:"map-container"},l.a.createElement("div",null,l.a.createElement(S.d,Object.assign({},r,{mapboxApiAccessToken:"pk.eyJ1Ijoiam9kaWdvIiwiYSI6ImNqeWZhMXpkczA5Y2ozaG52Z2l0Y29qa3IifQ.zglTcX0xV8BW_o1Umfx6Hg",onViewportChange:function(e){e.width<500&&(e.width=window.innerWidth,e.height=375,console.log("smoll")),c(e)}}),j.map(function(t){return l.a.createElement(S.a,{key:t.id,latitude:t.coordinates[0],longitude:t.coordinates[1]},l.a.createElement("i",{className:"fa fa-thumb-tack map-marker",id:t.id,onClick:function(a){var n;n=a.target.id,e[n].current.scrollIntoView({behavior:"smooth",block:"start"}),a.preventDefault(),u(t)}}))}),";",l.a.createElement("div",{style:{position:"absolute",bottom:"1%",left:"1%"}},l.a.createElement(S.b,null)),m&&l.a.createElement(S.c,{latitude:m.coordinates[0],longitude:m.coordinates[1],onClose:function(){u(null)},onClick:function(){}},l.a.createElement("div",null,l.a.createElement("h5",null,m.title)))))),l.a.createElement("div",{className:"post-container"},l.a.createElement("h1",null,"feed;"),j.map(function(t){return l.a.createElement("section",{id:t.id,key:t.id,ref:e[t.id],className:"post-card"},l.a.createElement("h4",{className:"post-card-title"},t.title),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.heading}}),""!=t.other&&l.a.createElement("p",null,l.a.createElement("a",{id:"citation",href:t.other[1]},l.a.createElement("small",null,t.other[0]),l.a.createElement("br",null),l.a.createElement("br",null))))})))},C=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"page-container"},l.a.createElement("h1",null,"contact;"),l.a.createElement("div",{className:"contact-icons"},l.a.createElement("div",null,l.a.createElement("p",null,"Vancouver, Canada")),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:jgunawan.1098@gmail.com"},"jgunawan.1098@gmail.com"))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.instagram.com/jodigunawan/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),"/",l.a.createElement("a",{href:"https://www.linkedin.com/in/jodi-gunawan/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),"/",l.a.createElement("a",{href:"https://github.com/jodigo",target:"_blank",rel:"noopener noreferrer"},"Github")))))}}]),t}(n.Component),M=function(){return l.a.createElement(m.a,null,l.a.createElement(u.a,{exact:!0,path:"/",component:L}),l.a.createElement(u.a,{path:"/about",component:k}),l.a.createElement(u.a,{path:"/feed",component:N}),l.a.createElement(u.a,{path:"/contact",component:C}))},I=a(115);var O=a(116);a(111),a(112);c.a.render(l.a.createElement(O.a,null,l.a.createElement(function(){var e=Object(n.useState)(function(){var e="dark"in localStorage,t=JSON.parse(localStorage.getItem("dark")),a=function(){if(window.matchMedia)return window.matchMedia("(prefers-color-scheme: dark)").matches}();return e?t:!!a}()),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.useEffect(function(){localStorage.setItem("dark",JSON.stringify(a))},[a]),l.a.createElement("div",Object(i.a)({className:"App"},"className",a?"dark-mode":"light-mode"),l.a.createElement(s.Layout,{className:a?"dark-mode":"light-mode"},l.a.createElement(s.Header,{id:"header-bar",className:a?"dark-mode":"light-mode",title:" ",scroll:!0},l.a.createElement(s.Navigation,{className:a?"dark-mode":"light-mode"},l.a.createElement(I.a,{to:"/",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}},l.a.createElement("p",null,"Home")),l.a.createElement(I.a,{to:"/about",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}},l.a.createElement("p",null,"About")),l.a.createElement(I.a,{to:"/feed",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}},l.a.createElement("p",null,"Feed")),l.a.createElement(I.a,{to:"/",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}})),l.a.createElement("button",{id:"toggle-light",className:a?"dark-mode big":"light-mode big",onClick:function(){return r(function(e){return!e})}},l.a.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100"},l.a.createElement("g",{id:"orb"},l.a.createElement("circle",{id:"disc",cx:"20",cy:"20",r:"20"}),l.a.createElement("circle",{id:"cut",cx:"20",cy:"20",r:"20"})),l.a.createElement("path",{d:"M51,21 L48,21 L48,4 L51,4 L51,21 Z M51.75,96 L48.75,96 L48.75,79 L51.75,79 L51.75,96 Z M4.5,51.5 L4.5,48.5 L21.5,48.5 L21.5,51.5 L4.5,51.5 Z M78.5,51.5 L78.5,48.5 L95.5,48.5 L95.5,51.5 L78.5,51.5 Z M17.0841793,19.0191036 L19.2054997,16.8977832 L31.226315,28.9185985 L29.1049946,31.0399189 L17.0841793,19.0191036 Z M69.4100811,71.3450054 L71.5314015,69.223685 L83.5522168,81.2445003 L81.4308964,83.3658207 L69.4100811,71.3450054 Z M18.5691036,83.3658207 L16.4477832,81.2445003 L28.4685985,69.223685 L30.5899189,71.3450054 L18.5691036,83.3658207 Z M70.8950054,31.0399189 L68.773685,28.9185985 L80.7945003,16.8977832 L82.9158207,19.0191036 L70.8950054,31.0399189 Z",id:"rays",fill:"rgb(var(--fg))"})))),l.a.createElement("button",{id:"toggle-light",className:a?"dark-mode small":"light-mode small",onClick:function(){return r(function(e){return!e})}},l.a.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100"},l.a.createElement("g",{id:"orb"},l.a.createElement("circle",{id:"disc",cx:"20",cy:"20",r:"20"}),l.a.createElement("circle",{id:"cut",cx:"20",cy:"20",r:"20"})),l.a.createElement("path",{d:"M51,21 L48,21 L48,4 L51,4 L51,21 Z M51.75,96 L48.75,96 L48.75,79 L51.75,79 L51.75,96 Z M4.5,51.5 L4.5,48.5 L21.5,48.5 L21.5,51.5 L4.5,51.5 Z M78.5,51.5 L78.5,48.5 L95.5,48.5 L95.5,51.5 L78.5,51.5 Z M17.0841793,19.0191036 L19.2054997,16.8977832 L31.226315,28.9185985 L29.1049946,31.0399189 L17.0841793,19.0191036 Z M69.4100811,71.3450054 L71.5314015,69.223685 L83.5522168,81.2445003 L81.4308964,83.3658207 L69.4100811,71.3450054 Z M18.5691036,83.3658207 L16.4477832,81.2445003 L28.4685985,69.223685 L30.5899189,71.3450054 L18.5691036,83.3658207 Z M70.8950054,31.0399189 L68.773685,28.9185985 L80.7945003,16.8977832 L82.9158207,19.0191036 L70.8950054,31.0399189 Z",id:"rays",fill:"rgb(var(--fg))"}))),l.a.createElement(s.Drawer,{title:"j o d i g o ;",id:"header-bar"},l.a.createElement(s.Navigation,null,l.a.createElement(w.a,{to:"/"},"Home"),l.a.createElement(w.a,{to:"/about"},"About"),l.a.createElement(w.a,{to:"/feed"},"Feed"))),l.a.createElement(s.Content,null,l.a.createElement("div",{className:"page-content"}),l.a.createElement(M,null))))},null)),document.getElementById("root"))},47:function(e,t,a){e.exports=a.p+"static/media/home.07e0a840.png"},52:function(e,t,a){e.exports=a(113)},57:function(e,t,a){},58:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.1e4ea502.chunk.js.map