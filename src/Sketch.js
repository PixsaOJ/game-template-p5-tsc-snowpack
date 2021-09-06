import config from './Config';
import p5SceneManager from './lib/SceneManager';
import Scenes from './Scenes';


/**
 * @param p
 */
export default (p) => {
	const SceneManager = new p5SceneManager(p);
	
	p.setup = () => {
		p.frameRate(config.FPS);
		SceneManager.addScene(Scenes.Game);
		SceneManager.wire();
		SceneManager.showScene(Scenes.Game);
	};
};