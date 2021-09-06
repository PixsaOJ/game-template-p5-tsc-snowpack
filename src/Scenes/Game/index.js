
let p;

export default function(p5) {

	p = p5;
	let speed = 100;

	let boxy;
	const setup = () => {
		boxy = {
			x: 200,
			y: 200,
			w: 80,
		};

		p.createCanvas(800, 600);
	};

	const draw = () => {
		const deltaTime = p.deltaTime;
		p.background(0);


		p.fill(255);

		if (boxy.x > p.width) p.noLoop();
		
		p.rect(boxy.x, boxy.y, boxy.w, boxy.w);
		const speedToAdd = speed * (deltaTime / 1000) ; //p.deltaTime === 0 ? speed :
		boxy.x += speedToAdd;

		p.text(`Frame Count with frameRate ${
			p.int(p.frameRate())
		}` ,100, 100);
	};

	return {
		setup,
		draw
	};
}