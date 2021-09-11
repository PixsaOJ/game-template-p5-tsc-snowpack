import config from '@/Config';
import { p5SceneManager } from '@lib/index';
import Scenes from '@Scenes/index';
import p5 from 'p5';
import { scaleRenderer, setupBrowser } from './functions';


/**
 * @param p
 */
export default (p : p5) => {
	const SceneManager = new p5SceneManager(p);
	
	p.setup = () => {

		// Create Canvas
		globalThis.canvas = p.createCanvas(p.windowWidth, config.dimensions.h).elt;

		setupBrowser();

		p.frameRate(config.FPS);
		SceneManager.wire();
		SceneManager.showScene(Scenes.Game);
	};

	p.windowResized = scaleRenderer(p);
	p.deviceTurned = scaleRenderer(p);
};
