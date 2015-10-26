var PipeGraphicsComponent = function(entity) {
	this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;

	context.save();
	context.translate(position.x, position.y);
	context.beginPath();
	context.fillStyle = 'green';
	context.fillRect(0, 0, 0.1, 0.5);
	context.closePath();
	context.beginPath();
	context.fillRect(0, 1, 0.1, -0.35);
	context.closePath();
	context.restore();

};

exports.PipeGraphicsComponent = PipeGraphicsComponent;