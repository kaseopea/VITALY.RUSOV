(function() {
    
	// change options
	var sliderOptions = {
        sliderWidth: 960,
        sliderHeight: 400,
        sliderId: 'slider',
		sliderContainerClass: 'slider-container',
		sliderItemClass: 'slider-item',
		naviContainerClass: 'slider-navi',
		leftArrowClass: 'navi-left',
		rightArrowClass: 'navi-right'
    };

	
// General module	
//=================================================================================================
	var _defaults = {
        sliderWidth: 960,
        sliderHeight: 400,
        sliderId: 'slider',
		sliderContainerClass: 'slider-container',
		sliderItemClass: 'slider-item',
		naviContainerClass: 'slider-navi',
		leftArrowClass: 'navi-left',
		rightArrowClass: 'navi-right'
    };
	var options;
	
	// Sanitize options Obj
    options = _.pick(_.defaults(sliderOptions, _defaults), _.keys(_defaults));

// Slider navigation
//=================================================================================================
	
	var slider = document.getElementById(options.sliderId);
	
	//create navigation container
	var naviContainer = document.createElement('div');
	naviContainer.className = options.naviContainerClass;

	//create arrows
	var arrowLeft = document.createElement('div');
	var arrowRight = document.createElement('div');
	arrowLeft.className = options.leftArrowClass;
	arrowRight.className = options.rightArrowClass;

	// add arrrows to navi container
	naviContainer.appendChild(arrowLeft);
	naviContainer.appendChild(arrowRight);
	
	// add navigation to slider
	slider.appendChild(naviContainer);

// Slider events
//=================================================================================================
	var navigation = document.getElementsByClassName(options.naviContainerClass)[0];
	var items = document.getElementsByClassName(options.sliderItemClass);	
	var step = options.sliderHeight;

	// navigation click event
	navigation.addEventListener('click', function(e) {
		var action = event.target;
		var sliderContainer = document.getElementsByClassName(options.sliderContainerClass)[0];
		var containerStyle = window.getComputedStyle(sliderContainer, null);
		var currentPosition = parseInt(containerStyle.marginTop, 10);
		var move;
		
		// left click action
		if (action.className === options.leftArrowClass) {
			
			move = currentPosition + step;
			move = (move === step) ? -(step * (items.length - 1)) : move;
			sliderContainer.style.marginTop = move + 'px';
			
		}
		// right click action
		if (action.className === options.rightArrowClass) {
			
			move = currentPosition - step;
			move = (move === -(step * items.length)) ? 0 : move;
			sliderContainer.style.marginTop = move + 'px';
		}
	}, false);
	
	
})();