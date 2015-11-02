var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect"); 

var Pipe = function(y, isBottom, onCollide) {
	this.isBottom = isBottom;
	this.onCollide = onCollide;

	this.type = "pipe";

	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 1;
	physics.velocity.x = -0.3;

	var graphics = new graphicsComponent.PipeGraphicsComponent(this);
	
	if(isBottom){
		graphics.size.y = y;
	}
	else{
		graphics.size.y = y - 0.85;
	}
	

	var collision = new collisionComponent.RectCollisionComponent(this, graphics.size);
    collision.onCollision = this.onCollision.bind(this);

	this.components = {
		graphics: graphics,
		physics: physics,
		collision: collision
	};
};

Pipe.prototype.onCollision = function(entity, entities) {
    console.log("Pipe collided with entity:", entity);
    this.onCollide();
};

exports.Pipe = Pipe;