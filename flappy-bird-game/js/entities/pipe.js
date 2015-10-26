var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics"); 

var Pipe = function() {
	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 1;
	physics.velocity.x = -0.3;

	var graphics = new graphicsComponent.PipeGraphicsComponent(this);
	var min = 0.2;
	var max = 0.8;
	graphics.height.x = Math.random() * (max - min) + min;

	this.components = {
		graphics: graphics,
		physics: physics
	};
};

exports.Pipe = Pipe;