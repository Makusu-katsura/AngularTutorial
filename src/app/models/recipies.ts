import { Ingredient } from './ingredient';

export class Recipies{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredient:Ingredient[]
    constructor(name:string,desc:string,imagePath:string,ingredients:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredient=ingredients
    }
}