import p5 from 'p5';
import Config from './Config';

/* eslint-env browser, node */
const goFullScreen = (p: p5): void => {
	var fs = p.fullscreen();
	p.fullscreen(!fs);
	p.resizeCanvas(p.windowWidth, p.windowHeight);
};

const setupBrowser = (): void => {
	screen.orientation.lock('landscape');
};

const scaleRenderer = (p: p5) => {
	let canvas = globalThis.canvas;

	// Set drawing size
	let choosenDrawingHeight = Config.dimensions.h;

	let actualSize = p.deviceOrientation === p.PORTRAIT ? p.windowHeight : p.windowWidth;
	let choosenDrawingWidth = p.min(choosenDrawingHeight * Config.dimensions.ratio, actualSize)

	p.resizeCanvas(choosenDrawingWidth, choosenDrawingHeight)

	// Stretch canvas to fill
	if (p.deviceOrientation === p.PORTRAIT) {
		canvas.style.height = '100vw'
		canvas.style.width = '100vh'
	} else {
		canvas.style.height = '100vh'
		canvas.style.width = '100vw'
	}

	p.draw();
};

function aspectRatio(val: number, lim: number) {

	var lower = [0, 1];
	var upper = [1, 0];

	while (true) {
		var mediant = [lower[0] + upper[0], lower[1] + upper[1]];

		if (val * mediant[1] > mediant[0]) {
			if (lim < mediant[1]) {
				return upper;
			}
			lower = mediant;
		} else if (val * mediant[1] == mediant[0]) {
			if (lim >= mediant[1]) {
				return mediant;
			}
			if (lower[1] < upper[1]) {
				return lower;
			}
			return upper;
		} else {
			if (lim < mediant[1]) {
				return lower;
			}
			upper = mediant;
		}
	}
}

export {
	goFullScreen,
	setupBrowser,
	scaleRenderer,
	aspectRatio
};
