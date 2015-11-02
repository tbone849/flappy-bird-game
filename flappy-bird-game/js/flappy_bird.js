var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var bird = require('./entities/bird');
var pipe = require('./entities/pipe');

var FlappyBird = function() {
    this.entities = [new bird.Bird()];

    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
    this.input = new inputSystem.InputSystem(this.entities[0]);
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    
    this.timer = window.setInterval(function(){
        var min = 0.2;
        var max = 0.8;
        // calculate random height of lower pipe
        var y = Math.random() * (max - min) + min;
    	this.entities.push(new pipe.Pipe(y, true, this.onCollide.bind(this)));
        this.entities.push(new pipe.Pipe(y, false, this.onCollide.bind(this)));
    }.bind(this), 2000);
};

FlappyBird.prototype.onCollide = function(){
    window.clearInterval(this.timer);
    for(i = 0; i < this.entities.length; i++){
        if(this.entities[i].type == "pipe"){
            this.entities.splice(i, 1);
            i--;
        }
    }
    this.input.active = false;
};

module.exports = FlappyBird;

