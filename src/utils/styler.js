export default class Styler {
    constructor(...classList) {
        this.classList = classList || [];
        if (this.classList.length == 1 && typeof this.classList[0] === 'undefined') {
            this.classList = [];
        }
        this.styles = [];

        console.log(this.classList);
    }

    setStyles(styles) {
        this.styles = styles;
    }

    createWith(...styles) {
        let styler = new Styler(this.classList);
        styler.styles = this.normalizeStyles(...this.classList.concat(styles));

        return styler;
    }

    add(...styles) {
        this.classList = this.classList.concat(...this.normalizeStyles(styles));
    }

    normalizeStyles(...styles) {
        let classList = [];
        
        for (let style of styles) {
            const styleType = style.constructor.name;
            switch (styleType) {
                case "String":
                    classList.push(style);
                    break;

                case "Array":
                    classList = classList.concat(style);
                    break;

                case "Styler":
                    classList = classList.concat(style.classList);
                    break;
            }
        }

        return classList;
    }

    getClassName() {
        return this.classList.join(' ');
    }
}
