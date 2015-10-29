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
    
    window.setInterval(function(){
        var min = 0.2;
        var max = 0.8;
        // calculate random height of lower pipe
        var y = Math.random() * (max - min) + min;
    	this.entities.push(new pipe.Pipe(y, true));
        this.entities.push(new pipe.Pipe(y, false));
    }.bind(this), 2000);
};

module.exports = FlappyBird;

