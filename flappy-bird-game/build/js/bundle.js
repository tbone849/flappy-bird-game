!function t(i,n,s){function e(c,h){if(!n[c]){if(!i[c]){var a="function"==typeof require&&require;if(!h&&a)return a(c,!0);if(o)return o(c,!0);var r=new Error("Cannot find module '"+c+"'");throw r.code="MODULE_NOT_FOUND",r}var p=n[c]={exports:{}};i[c][0].call(p.exports,function(t){var n=i[c][1][t];return e(n?n:t)},p,p.exports,t,i,n,s)}return n[c].exports}for(var o="function"==typeof require&&require,c=0;c<s.length;c++)e(s[c]);return e}({1:[function(t,i,n){var s=function(t){this.entity=t};s.prototype.draw=function(t){var i=this.entity.components.physics.position;t.save(),t.translate(i.x,i.y),t.beginPath(),t.arc(0,0,.02,0,2*Math.PI),t.fill(),t.closePath(),t.restore()},n.BirdGraphicsComponent=s},{}],2:[function(t,i,n){var s=function(t){this.entity=t,this.height={x:0}};s.prototype.draw=function(t){var i=this.entity.components.physics.position,n=this.entity.components.graphics.height;t.save(),t.translate(i.x,i.y),t.beginPath(),t.fillStyle="green",t.fillRect(0,0,.1,n.x),t.closePath(),t.beginPath(),t.fillRect(0,1,.1,n.x-.85),t.closePath(),t.restore()},n.PipeGraphicsComponent=s},{}],3:[function(t,i,n){var s=function(t){this.entity=t,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0}};s.prototype.update=function(t){this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t},n.PhysicsComponent=s},{}],4:[function(t,i,n){var s=t("../components/graphics/bird"),e=t("../components/physics/physics"),o=function(){var t=new e.PhysicsComponent(this);t.position.y=.5,t.acceleration.y=-2;var i=new s.BirdGraphicsComponent(this);this.components={physics:t,graphics:i}};n.Bird=o},{"../components/graphics/bird":1,"../components/physics/physics":3}],5:[function(t,i,n){var s=t("../components/graphics/pipe"),e=t("../components/physics/physics"),o=function(){var t=new e.PhysicsComponent(this);t.position.x=1,t.velocity.x=-.3;var i=new s.PipeGraphicsComponent(this),n=.2,o=.8;i.height.x=Math.random()*(o-n)+n,this.components={graphics:i,physics:t}};n.Pipe=o},{"../components/graphics/pipe":2,"../components/physics/physics":3}],6:[function(t,i,n){var s=t("./systems/graphics"),e=t("./systems/physics"),o=t("./systems/input"),c=t("./entities/bird"),h=t("./entities/pipe"),a=function(){this.entities=[new c.Bird,new h.Pipe],this.graphics=new s.GraphicsSystem(this.entities),this.physics=new e.PhysicsSystem(this.entities),this.input=new o.InputSystem(this.entities)};a.prototype.run=function(){this.graphics.run(),this.physics.run(),this.input.run(),window.setInterval(function(){this.entities.push(new h.Pipe)}.bind(this),2e3)},i.exports=a},{"./entities/bird":4,"./entities/pipe":5,"./systems/graphics":8,"./systems/input":9,"./systems/physics":10}],7:[function(t,i,n){var s=t("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){var t=new s;t.run()})},{"./flappy_bird":6}],8:[function(t,i,n){var s=function(t){this.entities=t,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d")};s.prototype.run=function(){window.requestAnimationFrame(this.tick.bind(this))},s.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var t=0;t<this.entities.length;t++){var i=this.entities[t];"graphics"in i.components&&i.components.graphics.draw(this.context)}this.context.restore(),window.requestAnimationFrame(this.tick.bind(this))},n.GraphicsSystem=s},{}],9:[function(t,i,n){var s=function(t){this.entities=t,this.canvas=document.getElementById("main-canvas")};s.prototype.run=function(){this.canvas.addEventListener("click",this.onClick.bind(this)),this.canvas.addEventListener("touchend",this.onClick.bind(this))},s.prototype.onClick=function(){var t=this.entities[0];t.components.physics.velocity.y=.6},n.InputSystem=s},{}],10:[function(t,i,n){var s=function(t){this.entities=t};s.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},s.prototype.tick=function(){for(var t=0;t<this.entities.length;t++){var i=this.entities[t];"physics"in i.components&&i.components.physics.update(1/60)}},n.PhysicsSystem=s},{}]},{},[7]);