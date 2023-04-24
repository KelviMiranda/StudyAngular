import { Component, OnInit } from '@angular/core';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService:FoodlistService) { }

  ngOnInit(): void {
  }

  foodAdd(value:string){
    return this.foodListService.foodAdd(value);
  }
}
