import Boxy from '@/Actors/Boxy';
import Config from '@/Config';
import { aspectRatio, goFullScreen } from '@/functions';
import BackgroundLoop from '@/Lib/BackgroundLoop';
import GameLogic from '@Scenes/Game/GameLogic';
import { Box, Vector } from 'collider2d';
import p5 from 'p5';


export default function (p: p5) {


	let boxy: any, wally: any;
	let gobjs: gameObjects;

	const setup = () => {

		boxy = new Boxy(p, 200, 200, 2, 100);

		wally = {
			x: 390,
			y: 100,
			w: 2,
			h: 500,
			collider:
				new Box(new Vector(390, 100), 2, 500).toPolygon()
		};

		gobjs = { boxy, wally }

		let gameLogic = new GameLogic(gobjs, p)
		new BackgroundLoop(gameLogic, 1000 / Config.FPS)
	};

	const draw = () => {
		p.background(0);

		p.noStroke();

		p.fill(p.color(190, 100, 100));
		p.rect(wally.x, wally.y, wally.w, wally.h);

		// boxy.update(deltaTime) //if i do this in a separate loop, no need to put here
		boxy.draw()

		p.fill('green');
		p.rect(p.width - 10, 0, 20, p.height)

		p.text(`Frame Count with frameRate ${p.int(p.frameRate())
			}`, 100, 100);

		p.text(`Orientation is: ${p.deviceOrientation}`, 100, 120);
		p.text(`Original aspect ratio is:	${aspectRatio(p.windowHeight / p.windowWidth, 50)}`, 100, 130);
	};

	const mouseClicked = (_e: MouseEvent): void => {
		goFullScreen(p)
	}

	return {
		setup,
		draw,
		mouseClicked,
	};
}