import {col,row,css} from  './utilies'


function title (block){
        const {tag = 'h1',styles } = block.options
       return row(col(`<${tag}>${block.value}<${tag}>`),css(styles));


}

function text(block){
    const {tag1 ='p',styles,tag2 ='p',blockquote } = block.options
   return row(col(`${block.value}`),css(styles));


}

function columns (block){

    const {styles} = block.options

    const html =  block.value.map(col).join('')

    console.log(styles)

    return row(html ,css(styles))
}

function image(block){

    const {imgStyles : is,alt } = block.options
    return row(`<img  src="${block.value}" style="${css(is)}" alt="${alt}">`)
}

function footer(block){
    const {tag1 ='p',tag2 ='p',styles } = block.options
    return row(col(`<${tag1}>${block.value}</${tag1}>`),css(styles));


}


export const templates = {

        title,
        text,
        columns,
        image,
        footer

}