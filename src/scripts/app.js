class App {
  constructor (bgColor) {
    this.bgColor = bgColor
  }
  createApp () {
    document.body.style.backgroundColor = this.bgColor
  }
}
export default App
