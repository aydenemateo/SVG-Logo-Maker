class SVG {
    constructor() {
        this.text = "";
        this.shape = "";
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape} ${this.text} </svg>`
    }
    setText (userText, userColor) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${userColor}">
        ${userText} </text>`
    }
    setShape(userShape) {
        this.shape = userShape.render()
    }
}

module.exports = SVG