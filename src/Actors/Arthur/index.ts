import { AnimatedSprite } from "@Lib"
import { Box, Polygon, Vector } from "collider2d"
import p5 from "p5"

export default class Arthur {

  collider: Polygon

  constructor(
    private p: p5,
    public x: number,
    private y: number,
    private r: number,
    public speed: number,
    public sprite: AnimatedSprite,
    ) {
      this.collider = new Box(new Vector(x, y), r, r).toPolygon()
    }


  draw() {
    this.p.fill(255)
		// this.p.rect(this.x, this.y, this.r, this.r)
    this.sprite.draw(this.x, this.y)
  }

  update(deltaTime: number) {
	  const speedToAdd = this.speed * (deltaTime / 1000) ; //p.deltaTime === 0 ? speed :
		this.x += speedToAdd
		this.collider.translate(speedToAdd, 0)
    this.sprite.animate(deltaTime)
  }
}
