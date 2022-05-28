interface AssetsObject {
  actors: {
    arthur: {
      spriteData: any,
      sprite: Image,
    }
  }
}

declare global {
  var canvas: HTMLCanvasElement
  var assets: AssetsObject
}

export {}