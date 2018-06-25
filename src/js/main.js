import '../scss/main.scss';

import { soundsController } from './sounds_controller';
import { animationController} from './animations_controller';

window.onload = () => {
	soundsController.init();
	animationController.init();
}