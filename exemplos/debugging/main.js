$(document).ready(function(){
    console.info('Info: Js pronto para iniciar');

	var square = new Square('#square');

	$("button").click(function(){
		var loop = parseInt($('#loop').val());
		square.move(loop);
	});
});



var Square = (function (element) {
    console.log('Log: Square instancialização inicializada');

	var self = this;

	var delayIteration = 5;
	
	self.element = $(element);
	self.currentPositionX = 0;
	self.currentPositionY = 0;


	self.move = function (loop) {       
        if(!isCompleteLoop(loop-1)){
            console.warn('Warn: Não voltará a mesma posição no final da movimentação');
        }

		var delay = delayIteration;

		for (var i = 0; i < loop; i++) {
            //debugger;

            var isFirstIteration = (i === 0);
            var isLastIteration = (i === (loop-1));

            // calc new position
            nextPosition();

            // move element
            moveElment(
                self.currentPositionX, 
                self.currentPositionY, 
                delay, 
                i, 
                isFirstIteration,
                isLastIteration);

            delay += delayIteration;
        };


    };

    function moveElment (x, y, delay, iteration, isFirstIteration, isLastIteration) {
    	setTimeout(function () {
            logMoveInit(isFirstIteration);

			// move
			self.element.css({ 
				'left': x + 'px', 
				'top': y  + 'px'
			});

			onCompleteLoopChangeColor(iteration);

            logTooManyIterations(iteration);
            logMoveFin(isLastIteration);
		}, delay);

        function logMoveInit (isFirstIteration) {
            if(isFirstIteration){
                console.group('Group: Movimentação Square');
                console.log('Log: Movimentação inicializada');
                console.time('Time: Duração Movimentação');
            }
        }

        function logMoveFin (isLastIteration) {
            if(isLastIteration){
                console.log('Log: Movimentação completada');
                console.timeEnd('Time: Duração Movimentação');
                console.groupEnd('Group: Movimentação Square');
            }
        }

        function logTooManyIterations(iteration) {
            // if((iteration+1) > 300){
            //     console.error('Error: Excedido número de voltas de uma única vez');
            // }

            console.assert((iteration+1) <= 300, 'Assert: Excedido número de voltas de uma única vez');
        }
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
    	

    	if(isCompleteLoop(iteration)){
    		var color = colors[Math.floor(Math.random()*colors.length)];

			self.element.css({ 
				'background': color
			});
    	}
    }

    function isCompleteLoop(iteration) {
        if(iteration === 0 )
            return false;

        return iteration/1000 % 1 === 0;
    }

    console.log('Log: Square instancialização completado');

    return self;
});
