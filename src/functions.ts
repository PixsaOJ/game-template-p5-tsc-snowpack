import p5 from 'p5';
import Config from './Config';

/* eslint-env browser, node */
const goFullScreen = (p: p5) : void => {
	var fs = p.fullscreen();
	p.fullscreen(!fs);
	p.resizeCanvas(p.windowWidth, p.windowHeight);
};

const setupBrowser = () : void => {
	screen.orientation.lock('landscape');
};

const scaleRenderer = (p: p5) => () => {
	let canvas = globalThis.canvas;

	// Set drawing size
	p.resizeCanvas(p.windowWidth, Config.dimensions.h)
	canvas.height = Config.dimensions.h;
	canvas.width = p.windowWidth;


	// Stretch canvas to fill
	canvas.style.height = '100vh';
	canvas.style.width = '100vw';

	p.draw();
};

export {
	goFullScreen,
	setupBrowser,
	scaleRenderer
};
