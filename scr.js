class Breathe {
  container = document.getElementById("container")
  text = document.getElementById("text")
  _CFG = {}

  constructor(cfg) {
    this._CFG = cfg
    this.init.bind(this)()
  }

  breatheTime() {
    return (this._CFG.totalTime / 5) * 2
  }

  holdTime() {
    return this._CFG.totalTime / 5
  }

  breatheAnimation() {
    this.text.innerText = "Breathe In!"
    this.container.className = "container grow"

    setTimeout(() => {
      this.text.innerText = "Hold"

      setTimeout(() => {
        this.text.innerText = "Breathe Out!"
        this.container.className = "container shrink"
      }, this.holdTime())
    }, this.breatheTime())
  }

  breatheInterval() {
    setInterval(() => {
      this.breatheAnimation()
    }, this._CFG.totalTime)
  }

  init() {
    this.breatheAnimation()
    this.breatheInterval()
  }
}

const newApp = new Breathe({
  totalTime: 7500,
})
