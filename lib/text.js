class Text {
    // properties
    constructor(text, textColor) {
        this.textColor = textColor;
        this.text = text;
    }

    // methods
    renderCode() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    setColor(newColor) {
        this.textColor = newColor
    }
}

module.exports = Text;