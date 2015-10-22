var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
    context.beginPath();
    context.arc(50, 50, 10, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.moveTo(80, 150);
    context.bezierCurveTo(200, 70, 300, 70, 180, 150);
    context.strokeStyle = "#358934";
    context.stroke();

    context.beginPath();
    context.rect(300, 400, 200, 200);
    context.strokeStyle = "blue";
    context.lineWidth = 10;
    context.stroke();
    context.fill();  

    context.beginPath();
    context.rect(50, 50, 100, 100);
    context.stroke();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;