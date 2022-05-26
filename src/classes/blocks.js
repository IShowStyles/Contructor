import {col, css, row} from "../utilies";

class Block{
    constructor( value , options) {
        this.value = value
        this.options = options
    }


    toHTML(){
        throw new Error('method toHTML must be realised')
    }
}

export class TitleBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }

    toHTML(){
        const {tag = 'h1',styles } = this.options
        return row(col(`<${tag}>${this.value}<${tag}>`),css(styles));
    }

}
export class ImageBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }

    toHTML() {

        const {imgStyles : is,alt } = this.options
        return row(`<img  src="${this.value}" style="${css(is)}" alt="${alt}">`)
    }
}
export class ColumnsBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }

    toHTML() {
        const {styles} = this.options

        const html =  this.value.map(col).join('')


        return row(html ,css(styles))
    }
}
export class TextBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
    toHTML() {
        const {tag1 ='p',styles,tag2 ='p',blockquote } = this.options
        return row(col(`${this.value}`),css(styles));
    }

}
export class FooterBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }

    toHTML() {
        const {tag1 ='p',tag2 ='p',styles } = this.options
        const html = this.value.map(col).join('')
        return row(html ,css(styles))

    }
}