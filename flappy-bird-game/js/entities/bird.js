var graphicsComponent = require("../components/graphics/bird");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/circle");


var Bird = function() {
    this.isColliding = false;
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.5;
    physics.acceleration.y = -2;

    var graphics = new graphicsComponent.BirdGraphicsComponent(this);

    var collision = new collisionComponent.CircleCollisionComponent(this, 0.02);
    collision.onCollision = this.onCollision.bind(this);

    this.components = {
    	physics: physics,
        graphics: graphics,
        collision: collision
    };
};

Bird.prototype.onCollision = function(entity) {
    console.log("Bird collided with entity:", entity);
    this.isColliding = true;
    this.components.physics.position.y = 0.5;
    this.components.physics.acceleration.y = 0;
    this.components.physics.velocity.y = 0;
    
};

exports.Bird = Bird;