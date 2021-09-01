import Matter, {
	Body as BodyType,
	Engine as EngineType,
	World as WorldType
} from 'matter-js';
import p5 from 'p5';
const { Bodies, Engine, World, Composite } = Matter;


let engine: EngineType;
let world: WorldType;
let box: BodyType | null;
const boxy: any = {
	x: 300,
	y: 200,
	w: 80,
};

const config = {
	FPS: 120
};

/**
 * @param {p5} p
 */
export default (p: p5): void => {
	p.setup = () => {
		p.createCanvas(800, 600);
		engine = Engine.create();
		world = engine.world;
		box = Bodies.rectangle(200, 200, 80, 80);
		World.add(world, box);

		p.frameRate(config.FPS);
	};

	p.draw = () => {
		p.background(0);
		Engine.update(
			engine,
			p.deltaTime
		);

		p.fill(255);

		if (box) {
			p.rect(box.position.x, box.position.y, 80, 80);
			if (box.position.y > p.height + 200) {
				Composite.remove(world, box);
				box = null;
			}
		}

		p.rect(boxy.x, boxy.y, boxy.w, boxy.w);


		p.text('Frame Count with frameRate ' +
			p.int(p.frameRate()), 100, 100);
	};
};