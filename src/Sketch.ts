import config from '@/Config'
import { p5SceneManager } from '@/Lib'
import { Game } from '@Scenes'
import p5 from 'p5'
import { scaleRenderer, setupBrowser } from './functions'


/**
 * @param p5: p5
 */
export default (p5 : p5) => {
	const SceneManager = new p5SceneManager(p5)
	
	p5.preload = () => {
		globalThis.assets = {
			actors: {
				arthur: {
					sprite: p5.loadImage('./assets/actors/arthur/running.png'),
					spriteData: p5.loadJSON('./assets/actors/arthur/running.json')
				}
			}
		}
	}
	
	p5.setup = () => {
		globalThis.canvas = p5.createCanvas(p5.windowWidth, config.dimensions.h).elt
		
		p5.frameRate(config.FPS)
		SceneManager.wire()
		
		setupBrowser(p5)
		scaleRenderer(p5)
		
		SceneManager.showScene(Game)
	}

	p5.windowResized = () => scaleRenderer(p5)
	p5.deviceTurned = () => {
		scaleRenderer(p5)
	} 

	// window.addEventListener("deviceorientation", function (event: Event) {
	// 	// alert('alo')
	// }, true);

	// window.addEventListener("orientationchange", ev => {
	// 	console.log(ev.target.screen)
	// 	alert(ev.target.screen.orientation.angle)
	// })
}
