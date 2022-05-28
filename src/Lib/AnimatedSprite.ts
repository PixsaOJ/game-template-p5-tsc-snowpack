import p5, { Image } from "p5"

export default class AnimatedSprite {

  w: number
  len: number
  index: number = 0
  animation: Image[] = []

  constructor(
    private p: p5,
    spriteData: { frames: { x:number, y:number, width:number,height:number}[] },
    spriteSheet: Image,
    public radius: number,
    public speed: number
  ) {
    for (let i = 0; i < spriteData.frames.length; i++) {
      let pos = spriteData.frames[i]
      let img = spriteSheet.get(pos.x, pos.y, pos.width, pos.height)
      this.animation.push(img)
    }

    this.w = this.animation[0].width
    this.len = this.animation.length
    this.index = 0
  }

  draw(x:number, y:number) {
    let index = this.p.floor(this.index) % this.len
    this.p.image(this.animation[index], x, y, this.radius, this.radius)
  }

  animate(deltaTime: number) {
    this.index += this.speed * (deltaTime / 1000)
  }
}