import { Component, OnInit } from '@angular/core';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

    foodList : Array<string> = []

  constructor(private fooListService:FoodlistService) { }

  ngOnInit(): void {
    this.getFoodList();
  }

  getFoodList(){
    this.foodList = this.fooListService.foodList();
  }
}
