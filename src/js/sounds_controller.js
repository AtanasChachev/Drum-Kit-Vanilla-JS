export let soundsController = {
	// fetching the all key buttons
	controllers: document.querySelectorAll('[data-keycode]'),

	init: () => {
		soundsController.controllersKeypress();
	},

	controllersKeypress: () => {
		let _buttons = soundsController.controllers;
		
		// Adding keyup event to detect when the specific key is pressed
		document.addEventListener('keyup' , soundsController.playingSounds);
		
		for(let i = 0 ; i < _buttons.length ; i++) {
			_buttons[i].addEventListener('click' , soundsController.playingSounds);
		}
	},

	playingSounds : (e) => {
			let _keyCode = e.keyCode || e.target.attributes[0].value;

			let _currentButton = document.querySelector(`[data-keycode="${_keyCode}"]`),
					_currentAudio = document.querySelector(`[data-audiocode="${_keyCode}"]`);
					
			// Checking if the current button and audio exists , so the js won't error.
			if(_currentButton && _currentAudio != null) {
				_currentButton.classList.add('active--state');
				_currentAudio.play();
				
				// Listening for audio end event to remove class.
				_currentAudio.onended = (e) => {
					let _currentAudioDataAttr = e.target.attributes[0].value;

					return document.querySelector(`[data-keycode="${_currentAudioDataAttr}"]`).classList.remove('active--state');
				}
			}	
	}
};
