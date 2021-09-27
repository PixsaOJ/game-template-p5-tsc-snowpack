declare global {
  var canvas: HTMLCanvasElement;

  var assets: {
    actors: {
      arthur: {
        spriteData: any,
        sprite: Image,
      }
    }
  }
}

export default global;
