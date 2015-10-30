var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect"); 

var Pipe = function(y, isBottom) {
	this.isBottom = isBottom;

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
    for(i = 0; i < entities.length; i++){
    	console.log(entities[i]);
    	if(entities[i].type == "pipe"){
    		entities.splice(i, 1);
    	}
    }
    // HOW DO I GET THIS METHOD TO COMMUNICATE WITH FLAPPY BIRD TO STOP
    // RUNNING PHYSICS, INPUT, AND PIPE CREATION?
};

exports.Pipe = Pipe;