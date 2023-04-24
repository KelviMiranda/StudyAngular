import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {
  private list:Array<string> = [
    "Ovos",
    "Batatas",
    "Bananas"
  ];
  constructor() { }

  foodList():Array<string>{
    return this.list;
  }

  foodAdd(value:string){
    return this.list.push(value)
  }
}
