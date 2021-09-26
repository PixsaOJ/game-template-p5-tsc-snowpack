import p5, { Image } from "p5";

export default class Sprite {

  w: number;
  len: number;
  index: number = 0;
  animation: Image[] = [];

  constructor(
    private p: p5,
    spriteData: { x:number, y:number, width:number,height:number}[],
    spriteSheet: Image,
    public x: number,
    public y: number,
    public speed: number) {

      for (let i = 0; i < spriteData.length; i++) {
        let pos =  spriteData[i];
        let img = spriteSheet.get(pos.x, pos.y, pos.width, pos.height)
        this.animation.push(img)
      }
      
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
  }

  show() {
    let index = this.p.floor(this.index) % this.len;
    this.p.image(this.animation[index], this.x, this.y);
  }

  animate() {
    this.index += this.speed;
    this.x += this.speed * 15;

    if (this.x > this.p.width) {
      this.x = -this.w;
    }
  }
}