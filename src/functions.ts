import p5 from 'p5'
import Config from './Config'

/* eslint-env browser, node */
const goFullScreen = (p5: p5): void => {
	var fs = p5.fullscreen()
	try {
		p5.fullscreen(true)
	} catch (error: any) {
		console.log(error.message)
	}
	scaleRenderer(p5)
}

const setupBrowser = (p5: p5): void => {
	goFullScreen(p5)
	screen.orientation.lock('landscape')
		.catch(console.log)
}

const scaleRenderer = (p5: p5) => {

	// Set drawing size
	let choosenDrawingHeight = Config.dimensions.h

	let actualSize = p5.deviceOrientation === p5.PORTRAIT ? p5.windowHeight : p5.windowWidth
	let choosenDrawingWidth = p5.min(choosenDrawingHeight * Config.dimensions.ratio, actualSize)
	choosenDrawingWidth = choosenDrawingHeight*Config.dimensions.ratio

	p5.resizeCanvas(choosenDrawingWidth, choosenDrawingHeight)

	// Stretch canvas to fill
	// if (p5.deviceOrientation === p5.PORTRAIT) {
	// 	canvas.style.height = '100vw'
	// 	canvas.style.width = '100vh'
	// } else {
	// 	canvas.style.height = '100vh'
	// 	canvas.style.width = '100vw'
	// }

	canvas.style.height = '100%'
	canvas.style.width = '100%'

	p5.draw()
}

function aspectRatio(val: number, lim: number) {

	var lower = [0, 1]
	var upper = [1, 0]

	while (true) {
		var mediant = [lower[0] + upper[0], lower[1] + upper[1]]

		if (val * mediant[1] > mediant[0]) {
			if (lim < mediant[1]) {
				return upper
			}
			lower = mediant
		} else if (val * mediant[1] == mediant[0]) {
			if (lim >= mediant[1]) {
				return mediant
			}
			if (lower[1] < upper[1]) {
				return lower
			}
			return upper
		} else {
			if (lim < mediant[1]) {
				return lower
			}
			upper = mediant
		}
	}
}

export {
	goFullScreen,
	setupBrowser,
	scaleRenderer,
	aspectRatio
}
