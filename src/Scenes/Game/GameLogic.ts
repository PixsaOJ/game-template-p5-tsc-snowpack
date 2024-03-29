import { Collider2d } from 'collider2d'
import { EventEmitter } from 'events'
import p5 from 'p5'

export default class GameLogic extends EventEmitter {
  collider2d = new Collider2d()

  constructor(public objects: gameObjects, private p: p5) {
    super()
  }

  tick(deltaTime: number): void {
    let p = this.p
    const { boxy, wally, arthur } = this.objects

    boxy.update(deltaTime)
    arthur.update(deltaTime)

    if (boxy.x > p.width) {
      p.noLoop()
      this.emit('paused')
    }
    if (this.collider2d.testPolygonPolygon(wally.collider, boxy.collider)) {
      this.p.noLoop()
      this.emit('paused')

    }

    if (arthur.x > p.width) {
      p.noLoop()
      this.emit('paused')
    }
    if (this.collider2d.testPolygonPolygon(wally.collider, arthur.collider)) {
      this.p.noLoop()
      this.emit('paused')

    }
  }

}