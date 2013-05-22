$(document).ready(function(){
	var square = new Square('#square');

	$("button").click(function(){
		var loop = parseInt($('#loop').val());
		square.move(loop);
	});
});



var Square = (function (element) {
	var self = this;

	var delayIteration = 5;
	
	self.element = $(element);
	self.currentPositionX = 0;
	self.currentPositionY = 0;

	self.move = function (loop) {
		var delay = delayIteration;

		for (var i = 0; i < loop; i++) {
            // calc new position
            nextPosition();

            // move element
            moveElment(self.currentPositionX, self.currentPositionY, delay, i);

            delay += delayIteration;
        };
    };

    function moveElment (x, y, delay, iteration) {
    	setTimeout(function (argument) {
			// move
			self.element.css({ 
				'left': x + 'px', 
				'top': y  + 'px'
			});

			onCompleteLoopChangeColor(iteration);
		}, delay);
    }


    function nextPosition () {
    	var minDistance = 0;
    	var maxDistance = 250;

    	//top-left to top-right
    	if(self.currentPositionY === minDistance && self.currentPositionX < maxDistance) 
    		self.currentPositionX++;
    	
    	//top-righ to bottom-right
    	else if(self.currentPositionX === maxDistance && self.currentPositionY < maxDistance) 
    		self.currentPositionY++;

    	//bottom-right to bottom-left
    	else if(self.currentPositionY === maxDistance && self.currentPositionX > minDistance) 
    		self.currentPositionX--;

    	//bottom-left to top-left
    	else if(self.currentPositionX === minDistance && self.currentPositionY > minDistance) 
    		self.currentPositionY--;
    };

    var colors = [
    	'red',
    	'blue',
    	'green',
    	'yellow',
    	'orange'
    ];

    function onCompleteLoopChangeColor (iteration) {
    	

    	if(isCompleteLoop()){
    		var color = colors[Math.floor(Math.random()*colors.length)];

			self.element.css({ 
				'background': color
			});
    	}

    	function isCompleteLoop() {
		   	if(iteration === 0 )
		   		return false;

		   	return iteration/1000 % 1 === 0;
		}
    }

    return self;
});
