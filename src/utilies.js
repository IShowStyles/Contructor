export function row(content,styles=''){
    return `<div class="row" style="${styles}">${content}</div>`

}

export function col(content){
    return `<div class="col">${content}</div>`
}

export function css (styles = {}){

    const string = key => `${key}: ${styles[key]}`
    return   Object.keys(styles).map(string).join(';');

}