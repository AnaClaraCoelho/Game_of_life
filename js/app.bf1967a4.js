(function(){"use strict";var n={4999:function(n,t,e){var r=e(144),o=function(){var n=this,t=n._self._c;return t("div",{attrs:{id:"app"}},[t("GameLife")],1)},i=[],u=function(){var n=this,t=n._self._c;return t("div",[t("h1",[n._v(" Conway's Game of Life")]),t("table",n._l(n.grid,(function(e,r){return t("tr",{key:r},n._l(e,(function(n,e){return t("td",{key:e,class:{alive:1==n}})})),0)})),0)])},f=[];e(7658);function l(n,t,e){const[r,o]=[e.length,e[0].length],i=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];let u=[];for(let l=0;l<i.length;l++)u.push([n+i[l][0],t+i[l][1]]);let f=u.filter((n=>n[0]>=0&&n[0]<r&&n[1]>=0&&n[1]<o&&1==e[n[0]][n[1]]));return f.length}function a(n){const[t,e]=[n.length,n[0].length];let r=new Array(t);for(let o=0;o<t;o++)r[o]=new Array(e).fill(0);for(let o=0;o<t;o++)for(let t=0;t<e;t++){let e=l(o,t,n);1==n[o][t]?r[o][t]=2==e||3==e?1:0:r[o][t]=3==e?1:0}return r}var c={name:"GameLife",data(){return{grid:[[1,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,0,0,1,0,1],[0,0,0,0,1,0,0,0,1,0],[0,0,0,1,1,0,0,0,0,0],[0,0,0,1,0,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]}},methods:{nextStep(){this.grid=a(this.grid)}},mounted(){setInterval((()=>{this.nextStep()}),1e3)}},s=c,p=e(1001),h=(0,p.Z)(s,u,f,!1,null,null,null),v=h.exports,d={name:"App",components:{GameLife:v}},g=d,m=(0,p.Z)(g,o,i,!1,null,null,null),b=m.exports;r.ZP.config.productionTip=!1,new r.ZP({render:n=>n(b)}).$mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(c=0;c<n.length;c++){r=n[c][0],o=n[c][1],i=n[c][2];for(var f=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[l])}))?r.splice(l--,1):(f=!1,i<u&&(u=i));if(f){n.splice(c--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[r,o,i]}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,u=r[0],f=r[1],l=r[2],a=0;if(u.some((function(t){return 0!==n[t]}))){for(o in f)e.o(f,o)&&(e.m[o]=f[o]);if(l)var c=l(e)}for(t&&t(r);a<u.length;a++)i=u[a],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(c)},r=self["webpackChunkgame_of_life"]=self["webpackChunkgame_of_life"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(4999)}));r=e.O(r)})();
//# sourceMappingURL=app.bf1967a4.js.map