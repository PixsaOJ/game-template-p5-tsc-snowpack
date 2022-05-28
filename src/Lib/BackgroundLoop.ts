import Config from '@/Config'
import GameLogic from '../Scenes/Game/GameLogic'
export default class GameLoop {

  deltaTime: number
  lastTime: number
  running: boolean = true


  constructor(readonly logic: GameLogic, readonly frameRateLimit: number, runGame: boolean = true) {
    this.deltaTime = 0
    this.lastTime = this.timestamp()

    if (frameRateLimit > Config.minimumBackgroundLoopFps)
      this.frameRateLimit = Config.minimumBackgroundLoopFps

    this.setup()
    if (runGame) this.loop()
  }

  public setup() {
    this.logic.on('paused', () => this.running = false)
    this.logic.on('resumed', () => {
      this.running = true
      this.loop()
    })
  }

  loop() {
    if (!this.running) return

    let self = this
    setTimeout(() =>
      requestAnimationFrame(() => self.loop()),
      this.frameRateLimit / Config.backgroundLoopMultiplier
    )

    this.deltaTime = this.timestamp() - this.lastTime
    this.lastTime = this.timestamp()

    // Call game logic
    this.logic.tick(this.deltaTime)
  }

  private timestamp() : number {
    return window.performance && window.performance.now
      ? window.performance.now()
      : new Date().getTime()
  }
}