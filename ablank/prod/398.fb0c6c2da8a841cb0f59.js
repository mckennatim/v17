(self.webpackChunkablank=self.webpackChunkablank||[]).push([[398],{398:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(378),o=n(786);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(){var e,t,n,l=(0,r.useContext)(o.He),i=l.foundJobs,c=(l.setFoundJobs,l.setJob2edit),s=l.job2edit,f=(t=(0,r.useState)(""),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=f[0],y=f[1];return r.createElement("div",{style:u.jobs.div0},"Jobs",(e=i.map((function(e,t){return r.createElement("li",{key:e},r.createElement("span",null," ",e.job," "),r.createElement("span",null," ",e.category," "))})),r.createElement("div",null,r.createElement("div",null,s),r.createElement("input",{type:"text",onKeyDown:function(e){"Enter"===e.key&&c(b)},onChange:function(e){return y(e.target.value)}}),r.createElement("ul",null,e))))}var u={jobs:{div0:{backgroundColor:"#aa9898"}}}}}]);