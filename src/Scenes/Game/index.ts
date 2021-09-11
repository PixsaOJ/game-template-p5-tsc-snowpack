import { Box, Collider2d, Vector } from 'collider2d';
import p5 from 'p5';

let collider2d: Collider2d;

export default function(p: p5) {

	let speed = 100;

	let boxy: any, wally: any;

	const setup = () => {
		collider2d = new Collider2d();

		boxy = {
			x: 200,
			y: 200,
			r: 80,
			collider:
				new Box(new Vector(200, 200), 80, 80).toPolygon()
		};

		wally = {
			x: 399,
			y: 100,
			w: 100,
			h: 500,
			collider:
				new Box(new Vector(399, 100), 100, 500).toPolygon()
		};

	};

	const draw = () => {
		if (boxy.x > p.width) p.noLoop();
		if (collider2d.testPolygonPolygon(wally.collider, boxy.collider)) p.noLoop();

		const deltaTime = p.deltaTime;
		p.background(0);

		p.noStroke();
		
		p.fill(p.color(190, 100, 100));
		p.rect(wally.x, wally.y, wally.w, wally.h);
		
		const speedToAdd = speed * (deltaTime / 1000) ; //p.deltaTime === 0 ? speed :
		boxy.x += speedToAdd;
		boxy.collider.translate(speedToAdd, 0);
		p.fill(255);
		p.stroke(255, 204, 0);
		p.strokeWeight(1);
		p.rect(boxy.x, boxy.y, boxy.r, boxy.r);

		p.text(`Frame Count with frameRate ${
			p.int(p.frameRate())
		}` ,100, 100);

		p.text(`Orientation is: ${p.deviceOrientation}`, 100, 120);
	};

	return {
		setup,
		draw
	};
}