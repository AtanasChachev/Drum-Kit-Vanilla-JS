import anime from 'animejs';

// Animations will be initialized here
export let animationController = {
	init: () => {
		let animeTimeline = anime.timeline();

		animeTimeline

		.add({
			targets: '.click--animation span',
			opacity: '1',
			duration: 1000,
			delay: (target , index) => {
				return index * 100;
			}
		})

		.add({
			targets: '.line',
			width: '60px',
			duration: 1000,
			offset: '-=600'
		})

		.add({
			targets: '.or--text',
			scale: [
				{ value: '0' , duration: 0 },
				{ value: '1' , duration: 1000 }
			],
			duration: 1000
		})

		.add({
			targets: '.tap--animation span',
			opacity: '1',
			duration: 1000,
			delay: (target , index) => {
				return index * 100;
			}
		})
	}
};