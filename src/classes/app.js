import {Site} from "./site";
import {model} from "../model";
import {Sidebar} from "./sidebar";

export class App{


    constructor(model){
        this.model = model;
    }

    init(){
        const site = new Site('#site')

        const updateCallback = newBlock=>{
            site.render(this.model)
        };

        site.render(this.model);

         new Sidebar('#panel', updateCallback)


    }
}