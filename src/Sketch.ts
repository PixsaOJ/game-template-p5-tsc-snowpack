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
		globalThis.canvas = p.createCanvas(p.windowWidth, config.dimensions.h).elt;
		
		p.frameRate(config.FPS);
		SceneManager.wire();
		
		setupBrowser(p);
		scaleRenderer(p);
		
		SceneManager.showScene(Scenes.Game);
	};

	p.windowResized = () => scaleRenderer(p);
	p.deviceTurned = () => scaleRenderer(p);
};
