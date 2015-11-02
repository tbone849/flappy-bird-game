var InputSystem = function(birdEntity) {
    this.birdEntity = birdEntity;
    this.active = true;
    // Canvas is where we get input from
    this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function() {
    this.canvas.addEventListener('click', this.onClick.bind(this));
    this.canvas.addEventListener('touchend', this.onClick.bind(this));
};

InputSystem.prototype.onClick = function() {
	if(this.active){
		this.birdEntity.components.physics.velocity.y = 0.6;
	}
};

exports.InputSystem = InputSystem;