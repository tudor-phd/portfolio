(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},390:function(e,t,n){},392:function(e,t,n){},393:function(e,t,n){},394:function(e,t,n){},395:function(e,t,n){},396:function(e,t,n){},397:function(e,t,n){},398:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){},401:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),o=n(93),r=n.n(o),c=n(99),s=(n(104),n(19)),d=n(407),l=n(406),u=n(404),h=n(405),m=(n(105),n(5)),b=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(d.a)().scrollYProgress,r=Object(l.a)(o,[0,.9],[0,1]),c=Object(u.a)(r,{stiffness:400,damping:90});return Object(i.useEffect)((function(){return r.onChange((function(e){return a(e>=1)}))}),[r]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("svg",{className:"progress-icon",viewBox:"0 0 60 60",children:[Object(m.jsx)(h.a.path,{fill:"none",strokeWidth:"5",stroke:"white",strokeDasharray:"0 1",d:"M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0",style:{pathLength:c,rotate:90,translateX:5,translateY:5,scaleX:-1}}),Object(m.jsx)(h.a.path,{fill:"none",strokeWidth:"5",stroke:"white",d:"M14,26 L 22,33 L 35,16",initial:!1,strokeDasharray:"0 1",animate:{pathLength:n?1:0}})]})})},j=n(98),g=n(95),f=n.n(g),p=function(){return Object(m.jsx)(f.a,{id:"tsparticles",init:function(e){},loaded:function(e){},options:{background:{color:{value:"transparent"}},fpsLimit:60,fullScreen:!1,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#8819DD"},links:{color:"#D309E1",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:3,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}})},x=n(50),w=n.n(x),v=n(35),O=n(51),y=n.p+"static/media/about.cbac7ea2.jpeg",E=n.p+"static/media/about2.4391c963.jpeg";n(390);function A(){var e=Object(O.a)({threshold:.5,triggerOnce:!1}),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){document.querySelector(".about-container")&&new j.a({parent:document.querySelector(".about-container"),intensity1:1,intensity2:1,speedIn:1,speedOut:1,image1:y,image2:E,displacementImage:E})}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(h.a.div,{animate:a?"visible":"hidden",variants:{visible:{opacity:1,scale:1,y:0},hidden:{opacity:0,scale:.65,y:50}},transition:{duration:2,ease:"easeOut"},ref:n,className:"magic",children:Object(m.jsx)("div",{children:Object(m.jsxs)("figure",{className:"md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800",style:v.isMobile?{background:"#202124",maxHeight:"85vh",overflow:"auto"}:{background:"#202124"},children:[Object(m.jsx)("div",{className:"about-container w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"}),Object(m.jsx)(w.a,{max:10,children:Object(m.jsxs)("div",{className:"pt-6 md:p-8 text-center md:text-left space-y-4",children:[!v.isMobile&&Object(m.jsx)(p,{}),Object(m.jsx)("blockquote",{children:Object(m.jsx)("p",{className:"text-lg font-medium",children:"\u201cOnce you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.\u201d - Sherlock Homes\u201d"})}),Object(m.jsx)("blockquote",{children:Object(m.jsx)("p",{className:"text-lg font-medium",children:"My name is Tudor D. Pop I'm a Full-Stack Engineer based in Cluj-Napoca. I describe myself as a passionate developer who loves coding, open source, and the web platform."})}),Object(m.jsx)("blockquote",{children:Object(m.jsx)("p",{className:"text-lg font-medium",children:"I have experience in: React.js, Next.js, Node.js Express Framework, Angular, MongoDB, PostgreSQL, Sequelize, Three.js, GSAP, HTML/CSS, Bootstrap, MaterialUI"})}),Object(m.jsx)("blockquote",{children:Object(m.jsxs)("p",{className:"text-lg font-medium",children:["For more details check my ",Object(m.jsx)("b",{children:Object(m.jsx)("a",{className:"linkedin",rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/in/tudor-dan-pop-95363b66/",children:"LinkedIn"})})," profile       "]})}),Object(m.jsxs)("figcaption",{className:"font-medium",children:[Object(m.jsx)("div",{className:"text-sky-500 dark:text-sky-400",children:"Tudor D. Pop"}),Object(m.jsx)("div",{className:"text-slate-700 dark:text-slate-500",children:"Full-Stack Engineer"})]})]})})]})})})})}var N=n(37),k=n(69);n(391),n(392);function S(e){var t=e.title,n=e.work,i=e.tags,a=e.image,o=e.text,r=Object(k.b)({background:"#000000",color:"#ffffff",zIndex:4,cursor:"default"}),c=r.modalProps,d=r.getTriggerProps,l=Object(O.a)({threshold:.5,triggerOnce:!1}),u=Object(s.a)(l,2),b=u[0],j=u[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"glass-card",style:{cursor:"auto"},children:Object(m.jsx)(h.a.div,{animate:j?"visible":"hidden",variants:{visible:{opacity:1,scale:1,y:0},hidden:{opacity:0,scale:.65,y:50}},transition:{duration:2,ease:"easeOut"},ref:b,className:"magic",children:Object(m.jsx)(w.a,{max:30,children:Object(m.jsx)("div",Object(N.a)(Object(N.a)({},d()),{},{className:"glassmorphism",children:Object(m.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[Object(m.jsx)("img",{className:"w-full",src:a,alt:"Sunset in the mountains",style:{objectFit:"cover",height:"150px"}}),Object(m.jsxs)("div",{className:"px-6 py-4",children:[Object(m.jsx)("div",{className:"font-bold text-xl mb-2",children:t}),Object(m.jsxs)("p",{className:"text-base",children:[n,"    "]})]}),Object(m.jsx)("div",{className:"px-6 pt-4 pb-2",children:i.map((function(e){return Object(m.jsx)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:e})}))})]})}))})})}),Object(m.jsxs)(k.a,Object(N.a)(Object(N.a)({},c),{},{padding:!1,children:[Object(m.jsx)("h2",{className:"project-title",children:t}),Object(m.jsx)("img",{alt:t,src:a,className:"project-image"}),Object(m.jsx)("h3",{dangerouslySetInnerHTML:{__html:o},className:v.isMobile?"project-text-mobile":"project-text"})]}))]})}var T=n.p+"static/media/jitsi.c29e0666.jpeg",R=n.p+"static/media/annai.98f82fe0.png",I=n.p+"static/media/octant.e27d03d1.png",D=n.p+"static/media/timetex.6d2e4e20.png",M=(n(393),[{style:{top:"7.05vh",left:"6.94vw"},id:1,title:"Jitsi",work:"Front-end Dev.",text:"Jitsi is a set of open-source projects that allows you to easily build and deploy secure video conferencing solutions. Jitsi are Jitsi Videobridge and Jitsi Meet, which let you have conferences on the internet, while other projects in the community enable other features such as audio, dial-in, recording, and simulcasting.",image:T,tags:["JavaScript","HTML","CSS","React.js"]},{style:{top:"7.05vh",left:"76.38vw"},id:3,title:"TimeTex",work:"Front-end Dev.",text:"The new TimeTEX Web App School Planner for all smart phones, tablets, PCs and Macs - and for all operating systems. The web app is based online and can therefore be used on all devices with an Internet connection - even in combination with each other. The app offers you extensive flexibility in all areas, both the timetable and the pupil rating can be adjusted freely. In addition, you do not need a good internet connection, as the app can also be used offline.",image:D,tags:["JavaScript","HTML","CSS","React.js"]},{style:{top:"56.41vh",left:"76.38vw"},id:4,title:"Annai Systems",work:"Front-end Dev.",text:"Annai Systems is a leading genomic data analysis company committed to developing cost-reducing innovations that accelerate discovery.",image:R,tags:["JavaScript","HTML","CSS","React.js"]},{style:{top:"56.41vh",left:"6.94vw"},id:5,title:"OctantAI",work:"FullStack Dev.",text:"Octant AI is an Artificial Intelligence platform which drives better project outcome performance. Emerging from a collaboration at University of Oxford, the technology delivers more accurate and much earlier insights into project performance across a range of different key result areas, including time, cost, revenue, and other critical factors. Calibrated on thousands of projects, Octant AI is progressively tuned to user organisations\u2019 unique circumstances, and continuously improves with use. It can be applied to any undertaking that is delivered in the form of a project, programme, or portfolio.",image:I,tags:["JavaScript","HTML","CSS","React.js"]},{style:{top:"56.41vh",left:"6.94vw"},id:6,title:" Braun 100 years anniversary",work:"FullStack Dev.",text:'100 years ago, Max Braun opened his appliances workshop in Germany which marked the birth of the brand Braun. Join us for a year of celebrations and exploration on what \u2018good design\u2019 means today and how \u2019good design\u2019 can positively impact future. For more details click <a target="_blank" href="https://ca.braun.com/en-ca/design-culture/timeline">here</a>',image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD////R0dG/v7/5+fl2dnbq6uqnp6c5OTlAQEBxcXG2trbY2NgzMzOtra2ioqJNTU3IyMjf39/z8/MrKyuCgoKSkpJtbW0ICAi4uLgeHh7k5OTZ2dk2NjadnZ2Li4tRUVEjIyMZGRljY2NZWVkSEhJGRkYTYOH4AAAEiklEQVR4nO2b2ULqMBRFCVSGlkEoICAKIt7//8SLytlJkwYUY0twrzeOMT2rQ6amjQYhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIX+cp4fNqPM826/qTuRXGMybCuSt9K3uhAIzaCmLfF53TkGZJbbggcmg7rTCMS/xO5B0604sFA/lgoc7te7MQlF2i34yrDu1MGy8gkrVnVsYJicMN3UnF4KF9mnPXg6BXkdHWnVnF4KtqzPFk9muM7NQoCU1Ws5UYkl9eYXjruSOfLtNw44RbNMwJmgYP9dsuBkW6WycycDMKfLPLgLDkRF0DKfZsYaZRNJjJLu3a0yzz2HSJHv4oWFfOeSdaaGIM7E9JD0szvu+ZtiTUkuJDCVyV6iutywcLfvRDKypSkhmZpESwwOF6fs3DTOJYGyXmrUZI76SaoMYFqssN9RpBjZclNxWqhnc0JwQeAzV8+8Ylmc0Dm6oemcN1fY3DJ89B7t4UctrqE+a11DfOuEM33yLBfkitKFCg+o1VGjjwxneKR+X9howHL9j+uIxg2Hzo4hxktG/hzM0+olluk+Nn2bLdpGhraPvQYRePn+jE1Pr8IbIJ//scbs4oZe2NbahMQRwDAd2QO2CG/btCKq+tMNwDO+RvjzajiEyVTLY+AVDVBPcUK98yujTMUTuah+l4Vgir15DPP/OrRSFIdKX5tk1RGIyYI7LMDt/DUdxG+IaSn9+4hrKSYjLEM+hvKc+8RzK4DUuw8SOnGhL5SREZYj+sO81RKYTKRKVIQLuuNQZ0+DVYEyGetDpzi2O41K0pBgTaENjVnx1hp13shzZ61e3MMzeiwzxEBovKWDYH3WAPNDXYmhhvBLzzQ/zHYr4Z3VXa5gbq4Uew0Svc0Ro2NwZRcoNJ+aianyGhY0+5YbtbdSGejzmNSysfsVoqLZnDZVeGY/S8PG8YY4dllEYNj/QnZ2+Qq1iESN3LIzDsD1ugmvrD+1c9UW0xjQ7TD70Qb/2/vA6DBt75C89hjMuxQYorEPD0NzEdq2GOiL3oGOInTIyUo3McGZn684PMYV0VhOjMOxKRBaZXcNHicjkIi7DlURkfusaoq2RpZy4DHcSkemFa4hI5IayC+/mDF9u3nAgEenyb84Qe0X9bWnkhljV9/eHkRtKAPO/8IZIFmezSkMcFAOW8IZYqcTgqDrDvZ4cIbFghlPU3f4YDA30NwzbCgwdkGwww4VejVWTVmttHAz/VKUhNgQGM9SjPRu8AKnSUC9onzD83si78eo7mN58WZ1h8oIi4Qx9F1FfwgoN97pIQEM97zLJjW+GqzJMjOXSoIZvJZtHC6vnFRmOC3ucQxo2GnN782Fx/294w7WymQytbeV4eJ6ciNOWmtvr0DcUq1vNjU/5Hp+Le8r1KpdjuG5cxqBbZOoWmR7/1FvYka58jr7qHTH//UlKOTXu0s5yPF4O79yP9iUf/WKrd4zc0DfThBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIeSP8B9xMUNTl4RgNAAAAABJRU5ErkJggg==",tags:["JavaScript","HTML","CSS","React.js"]}]),C=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:v.isMobile?"cards-container-mobile":"cards-container",children:M.map((function(e){return Object(m.jsx)("div",{className:"card-item",children:Object(m.jsx)(S,{title:e.title,work:e.work,image:e.image,text:e.text,tags:e.tags},e.id)})}))})})},L=n.p+"static/media/NormalMap.20879897.png",F=(n(394),n(26)),B=function(){return Object(i.useEffect)((function(){var e=(new F.i).load(L),t=document.querySelector("canvas.webgl"),n=new F.g,i=new F.h(.5,64,64),a=new F.d;a.metalness=.7,a.roughness=.2,a.normalMap=e,a.color=new F.b(2697513);var o=new F.c(i,a);n.add(o);var r=new F.f(16777215,.1);r.position.x=2,r.position.y=3,r.position.z=4,n.add(r);var c=new F.f(16711680,2);c.position.set(-1.86,1,-1.65),c.intensity=10,n.add(c);var s=new F.f(57855,2);s.position.set(2.13,-3,-1.98),s.intensity=6.8,n.add(s);var d={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(function(){d.width=window.innerWidth,d.height=window.innerHeight,l.aspect=d.width/d.height,l.updateProjectionMatrix(),u.setSize(d.width,d.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2))}));var l=new F.e(75,d.width/d.height,.1,100);l.position.x=0,l.position.y=0,l.position.z=2,n.add(l);var u=new F.j({canvas:t,alpha:!0});u.setSize(d.width,d.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2));var h=0,m=0,b=0,j=0,g=window.innerWidth/2,f=window.innerHeight/2;document.addEventListener("mousemove",(function(e){h=e.clientX-g,m=e.clientY-f})),window.addEventListener("scroll",(function(e){o.position.y=.001*window.scrollY}));var p=new F.a;!function e(){b=.001*h,j=.001*m;var t=p.getElapsedTime();o.rotation.y=.5*t,o.rotation.y+=.5*(b-o.rotation.y),o.rotation.x+=.05*(j-o.rotation.x),o.position.z+=-.05*(j-o.rotation.x),u.render(n,l),window.requestAnimationFrame(e)}()}),[]),Object(m.jsx)("canvas",{className:"webgl"})},U=n(96),Y=n.n(U),P=n.p+"static/media/background.9898d2c0.png",G=(n(395),function(){return Object(i.useEffect)((function(){var e,t,n,i,a,o,r,c,s,d,l,u,h,m,b,j=P,g=0,f=window.innerHeight,p=window.innerWidth,x=(new Date).getTime(),w=0;function v(){var a=(new Date).getTime();w=(a-x)/1e3,g<150&&(g+=.03*(200-g)),!1===b.moved&&(b.y=-f/2+Math.sin(.7*w)*(.25*f)+n.height,b.x=p/2+Math.sin(.6*w)*(-.35*p)),i.uniform1f(h,1e-5*g),i.uniform2f(u,b.x,b.y),i.uniform1f(d,w),i.uniform1f(m,0),window.requestAnimationFrame(v,n),t=i.getAttribLocation(e,"a_position"),i.enableVertexAttribArray(t),i.vertexAttribPointer(t,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,6)}window.addEventListener("load",(function(t){var x=new Image;x.crossOrigin="Anonymous",x.src=j,x.onload=function(){!function(t){n=document.getElementById("glscreen"),i=n.getContext("webgl")||n.getContext("experimental-webgl"),n.width=window.innerWidth>=window.innerHeight?window.innerWidth:window.innerHeight,n.height=window.innerWidth>=window.innerHeight?window.innerWidth:window.innerHeight,b={x:p/2,y:-f/2+n.height,moved:!1},Y()(document).mousemove((function(e){b.x=e.pageX,b.y=2*-e.pageY+n.height,b.moved=!0})),i.viewport(0,0,i.drawingBufferWidth,i.drawingBufferHeight),s=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,s),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),i.STATIC_DRAW),a=document.getElementById("2d-vertex-shader"),o=a.text,r=i.createShader(i.VERTEX_SHADER),i.shaderSource(r,o),i.compileShader(r),a=document.getElementById("2d-fragment-shader"),o=a.text,c=i.createShader(i.FRAGMENT_SHADER),i.shaderSource(c,o),i.compileShader(c),e=i.createProgram(),i.attachShader(e,r),i.attachShader(e,c),i.linkProgram(e),i.useProgram(e),l=i.getUniformLocation(e,"u_resolution"),u=i.getUniformLocation(e,"u_mouse"),h=i.getUniformLocation(e,"u_mass"),d=i.getUniformLocation(e,"u_time"),m=i.getUniformLocation(e,"u_clickedTime"),i.uniform2f(l,n.width,n.height),i.uniform2f(u,b.x,b.y),i.uniform1f(h,1e-5*g),i.uniform1f(d,w),i.uniform1f(m,0);var j=i.getAttribLocation(e,"a_texCoord"),x=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,x),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),i.STATIC_DRAW),i.enableVertexAttribArray(j),i.vertexAttribPointer(j,2,i.FLOAT,!1,0,0);var O=i.createTexture();i.bindTexture(i.TEXTURE_2D,O),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t),v()}(x)}})),window.addEventListener("resize",(function(t){n.width=window.innerWidth>=window.innerHeight?window.innerWidth:window.innerHeight,n.height=window.innerWidth>=window.innerHeight?window.innerWidth:window.innerHeight,i.viewport(0,0,n.width,n.height),l=i.getUniformLocation(e,"u_resolution")}))}),[]),Object(m.jsx)("canvas",{id:"glscreen"})}),z=(n(396),function(e){var t=e.play;return Object(m.jsxs)("div",{className:"bar-c",children:[Object(m.jsx)("div",{id:"bar-1",className:"".concat(t?"bar":"noAnim bar")}),Object(m.jsx)("div",{id:"bar-2",className:"".concat(t?"bar":"noAnim bar")}),Object(m.jsx)("div",{id:"bar-3",className:"".concat(t?"bar":"noAnim bar")}),Object(m.jsx)("div",{id:"bar-4",className:"".concat(t?"bar":"noAnim bar")}),Object(m.jsx)("div",{id:"bar-5",className:"".concat(t?"bar":"noAnim bar")}),Object(m.jsx)("div",{id:"bar-6",className:"".concat(t?"bar":"noAnim bar")})]})}),H=(n(397),function(e){var t=function(e){var t=Object(i.useState)(new Audio(e)),n=Object(s.a)(t,1)[0];n.loop=!0;var a=Object(i.useState)(!0),o=Object(s.a)(a,2),r=o[0],c=o[1];return Object(i.useEffect)((function(){r?n.play():n.pause()}),[r,n]),Object(i.useEffect)((function(){return n.addEventListener("ended",(function(){return c(!1)})),function(){n.removeEventListener("ended",(function(){return c(!1)}))}}),[n]),[r,function(){return c(!r)}]}(e.url),n=Object(s.a)(t,2),a=n[0],o=n[1];return Object(m.jsx)("div",{onClick:o,children:Object(m.jsx)(z,{play:a})})}),W=(n(398),function(){return Object(m.jsx)("div",{className:"scroll-down"})});n(399);function _(){return Object(m.jsx)("h1",{children:"Welcome to my world"})}n(400);function J(){var e=function(e){var t=document.getElementsByClassName(e)[0];t&&t.scrollIntoView({behavior:"smooth"})};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("nav",{role:"navigation",className:"navigation",children:[Object(m.jsx)("input",{type:"checkbox",id:"post",className:"postToggle"}),Object(m.jsx)("label",{for:"post",className:"postBtn"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){return e("first-section")},className:"welcome",children:"\ud83e\ude90"}),Object(m.jsx)("li",{onClick:function(){return e("second-section")},className:"about",children:"\ud83d\udd2c"}),Object(m.jsx)("li",{onClick:function(){return e("third-section")},className:"work",children:"\u2692"})]})]}),Object(m.jsx)("div",{className:"overlay"})]})}var Q=n.p+"static/media/mrrobot.a7fa56d0.mp3",V=(n(401),n(97));Object(V.a)({cursorOuter:"circle-basic",hoverEffect:"circle-move",hoverItemMove:!1,defaultCursor:!1,outerWidth:30,outerHeight:30});var q=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(J,{}),Object(m.jsx)(H,{url:Q}),Object(m.jsx)(_,{}),Object(m.jsx)(W,{}),Object(m.jsx)(b,{}),Object(m.jsxs)("section",{className:"app-section first-section",children:[Object(m.jsx)(B,{}),Object(m.jsx)(G,{})]}),Object(m.jsxs)("section",{className:"app-section second-section",children:[Object(m.jsx)("span",{className:"section-title",children:"ABOUT"}),Object(m.jsx)(A,{})]}),Object(m.jsxs)("section",{className:"app-section third-section",children:[Object(m.jsx)("span",{className:"section-title",children:"WORK"}),Object(m.jsx)(C,{})]})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,408)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(c.a,{children:Object(m.jsx)(q,{})})}),document.getElementById("root")),K()}},[[402,1,2]]]);
//# sourceMappingURL=main.d001a92c.chunk.js.map