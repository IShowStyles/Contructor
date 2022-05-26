import image from './assets/img-bg.jpg'
import {TitleBlock,FooterBlock,ColumnsBlock,TextBlock,ImageBlock} from './classes/blocks'
const text = `<blockquote>goals should never be simple</blockquote>` ;
const link = ` <i>Follow me on GitHub for more apps <a href="https://github.com/OGBeas222" target="_blank">(git)</a></i>  `

const telegram   = `<a href="https://www.instagram.com/alexssandr_andreevich/?igshid=YmMyMTA2M2Y=" class="link"><i class="bi bi-instagram"></i></a><a href="https://t.me/zholudev111" class="link"><i class="bi bi-telegram"></i></a>`
export const model = [

    new TitleBlock('constructor on JS from Alex',{
        tag:'h1',
        styles:{
            'background-color': '#2A4480',
            color:'#FFB273',
            'fonts-size':'28px',
            'text-align':'center',
            'text-transform':'uppercase',
            padding:'10px',
            'margin-bottom':'25px',
            'border-bottom-left-radius': '9px',
            'border-bottom-right-radius': '9px',

        }
    }),

    new TextBlock(link,{
        tag1:'i',
        tag2:'small',
        styles:{
            "display":"flex",
            "justify-content":'space-between',
            'background-color': '#2A4480',
            color:'#FF4040',
            'fonts-size':'22',
            'text-align':'center',
            'text-transform':'uppercase',
            padding:'10px',
            'border-radius': '9px',
            "margin-bottom":'45px',
        },
        blockquote:{
            'text-transform':'uppercase',
            "text-align":"center",
        }
    }),

    new ImageBlock(image,{
        imgStyles: {
            'border-top-left-radius': '9px',
            'border-top-right-radius': '9px',
            "width": "100%",
            "background-repeat": " no-repeat",
            "background-size": "cover",

        },
        alt: 'image from unsplash',}),


    new ColumnsBlock([
        'what a wonderful day',
        'Oh,sun is shine',
        'The sky is blue'
    ],{

            styles:{
                'background-color': '#2A4480',
                 "color":'#FFB273',
                'fonts-size':'28',
                'text-align':'center',
                'text-transform':'uppercase',
                "padding":'10px',
                'margin-bottom':'75px',
                'border-bottom-left-radius': '9px',
                'border-bottom-right-radius': '9px',
            }

    } ),




    new FooterBlock([
        telegram,
        '',
        'goals should never be simple',

    ],{

        tag1: 'i',
        tag2: 'small',
        styles: {
            "display": "flex",
            "justify-content": 'space-between',
            'background-color': '#2A4480',
            color: '#FF4040',
            'fonts-size': '22',
            'text-transform': 'uppercase',
            padding: '10px',
            'border-radius': '9px',
            "margin-bottom": '45px',
        },
        blockquote: {
            'background-color': '#3515B0',
            'text-transform': 'uppercase',
            padding: '10px',
            color: '#FF4040',
            "text-align": "right",
        },

    }),


]
