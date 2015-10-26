var PipeGraphicsComponent = function(entity) {
	this.entity = entity;

	this.height = {
		x: 0
	};
};

PipeGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;
	var height = this.entity.components.graphics.height;

	context.save();
	context.translate(position.x, position.y);
	context.beginPath();
	context.fillStyle = 'green';
	context.fillRect(0, 0, 0.1, height.x);
	context.closePath();
	context.beginPath();
	context.fillRect(0, 1, 0.1, (height.x - 0.85));
	context.closePath();
	context.restore();

};

exports.PipeGraphicsComponent = PipeGraphicsComponent;