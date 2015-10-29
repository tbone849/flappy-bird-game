var PipeGraphicsComponent = function(entity) {
	this.entity = entity;

	this.size = {
		x: 0.1,
		y: 0
	};
};

PipeGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;
	var size = this.entity.components.graphics.size;


	context.save();
	context.translate(position.x, position.y);
	if(this.entity.isBottom){
		context.beginPath();
		context.fillStyle = 'green';
		context.fillRect(0, 0, size.x, size.y);
		context.closePath();
	}
	else{
		context.beginPath();
		context.fillStyle = 'green';
		context.fillRect(0, 1, size.x, size.y);
		context.closePath();
	}
	context.restore();

};

exports.PipeGraphicsComponent = PipeGraphicsComponent;