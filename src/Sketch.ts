import Matter, {
    Body as BodyType, Engine as EngineType,
    World as WorldType
} from 'matter-js';
import p5 from 'p5';
const { Bodies, Engine, World } = Matter;


let engine: EngineType;
let world: WorldType;
let box: BodyType;
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
export default (p: p5) : void => {
    p.setup = () => {
    // Define your initial environment props & other stuff here
        p.createCanvas(800, 600);
        engine = Engine.create();
        world = engine.world;
        box = Bodies.rectangle(200, 200, 80, 80);
        World.add(world, box);

        p.frameRate(config.FPS);
    };

    p.draw = () => {
    // Define render logic for your sketch here
        p.background(0);
        Engine.update(
            engine,
            p.deltaTime
        );
        p.rect(box.position.x, box.position.y, 80, 80);
        p.fill(255);

        p.rect(boxy.x, boxy.y, boxy.w, boxy.w);

        p.text('Frame Count with frameRate ' + 
        p.int(p.frameRate()), 100, 100);
    };
};