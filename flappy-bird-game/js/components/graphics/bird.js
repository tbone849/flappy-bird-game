var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    context.beginPath();
    context.arc(100, 100, 50, 0, 2 * Math.PI);
    context.fillStyle = "yellow";
    context.fill();
    context.rotate(Math.PI / 180);
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;