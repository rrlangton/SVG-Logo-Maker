class Logo {
    // properties
    constructor(textObj, shapeObj) {
        this.textObj = textObj;
        this.shapeObj = shapeObj;
        // this.shapeColor = shapeColor;
    }

    // methods
    renderCode(){
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            ${this.shapeObj.renderCode()}
            ${this.textObj.renderCode()}
        </svg> 
        `
    }
}

module.exports = Logo;