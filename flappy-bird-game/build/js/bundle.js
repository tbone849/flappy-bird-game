!function t(i,n,e){function s(r,a){if(!n[r]){if(!i[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(o)return o(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var p=n[r]={exports:{}};i[r][0].call(p.exports,function(t){var n=i[r][1][t];return s(n?n:t)},p,p.exports,t,i,n,e)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<e.length;r++)s(e[r]);return s}({1:[function(t,i,n){var e=function(t){this.entity=t};e.prototype.draw=function(t){t.beginPath(),t.arc(100,100,50,0,2*Math.PI),t.fillStyle="yellow",t.fill(),t.rotate(Math.PI/180)},n.BirdGraphicsComponent=e},{}],2:[function(t,i,n){var e=function(t){this.entity=t};e.prototype.draw=function(){console.log("Drawing a pipe")},n.PipeGraphicsComponent=e},{}],3:[function(t,i,n){var e=t("../components/graphics/bird"),s=function(){console.log("Creating Bird entity");var t=new e.BirdGraphicsComponent(this);this.components={graphics:t}};n.Bird=s},{"../components/graphics/bird":1}],4:[function(t,i,n){var e=t("../components/graphics/pipe"),s=function(){console.log("Creating Pipe entity");var t=new e.PipeGraphicsComponent(this);this.components={graphics:t}};n.Pipe=s},{"../components/graphics/pipe":2}],5:[function(t,i,n){var e=t("./systems/graphics"),s=t("./entities/bird"),o=t("./entities/pipe"),r=function(){this.entities=[new s.Bird,new o.Pipe],this.graphics=new e.GraphicsSystem(this.entities)};r.prototype.run=function(){this.graphics.run()},i.exports=r},{"./entities/bird":3,"./entities/pipe":4,"./systems/graphics":7}],6:[function(t,i,n){var e=t("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){var t=new e;t.run()})},{"./flappy_bird":5}],7:[function(t,i,n){var e=function(t){this.entities=t,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d")};e.prototype.run=function(){window.requestAnimationFrame(this.tick.bind(this))},e.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var t=0;t<this.entities.length;t++){var i=this.entities[t];"graphics"in i.components&&i.components.graphics.draw(this.context)}this.context.restore(),window.requestAnimationFrame(this.tick.bind(this))},n.GraphicsSystem=e},{}]},{},[6]);