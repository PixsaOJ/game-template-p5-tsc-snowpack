import Boxy from '@/Actors/Boxy';
import Config from '@/Config';
import { aspectRatio, goFullScreen } from '@/functions';
import { Box, Collider2d, Vector } from 'collider2d';
import p5 from 'p5';


export default function(p: p5) {
	
	
	let boxy: any, wally: any;

	let collider2d: Collider2d;

	const checkCollisions = (objects: Boxy[], updateSpeed: number) => {
		objects.forEach(object => {
			boxy.update(updateSpeed)
			if (object.x > p.width) p.noLoop();
			if (collider2d.testPolygonPolygon(wally.collider, object.collider)) p.noLoop();
		})
		setTimeout(() => checkCollisions(objects, updateSpeed), updateSpeed)
	}

	const setup = () => {
		collider2d = new Collider2d();

		boxy = new Boxy(p, 200, 200, 2, 100);
		// collider:
		// 	new Box(new Vector(200, 200), 80, 80).toPolygon()

		wally = {
			x: 390,
			y: 100,
			w: 2,
			h: 500,
			collider:
				new Box(new Vector(390, 100), 2, 500).toPolygon()
		};

		checkCollisions([boxy], 1000/Config.FPS)
	};

	const draw = () => {
		const deltaTime = p.deltaTime;
		p.background(0);

		p.noStroke();
		
		p.fill(p.color(190, 100, 100));
		p.rect(wally.x, wally.y, wally.w, wally.h);

		boxy.update(deltaTime)
		boxy.draw()

		p.fill('green');
		p.rect(p.width-10, 0, 20, p.height)

		p.text(`Frame Count with frameRate ${
			p.int(p.frameRate())
		}` ,100, 100);

		p.text(`Orientation is: ${p.deviceOrientation}`, 100, 120);
		p.text(`Original aspect ratio is:	${aspectRatio(p.windowHeight/p.windowWidth, 50)}`, 100, 130);
	};

	const mouseClicked = (_e: MouseEvent): void => {
		goFullScreen(p)
	}

	return {
		setup,
		draw,
		// mouseClicked,
	};
}