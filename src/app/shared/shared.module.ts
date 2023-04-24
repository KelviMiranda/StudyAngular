import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';



@NgModule({
  declarations: [
    InputComponent,
    OutputComponent,
    NewComponentComponent,
    FoodListComponent,
    FoodAddComponent,
    FoodAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent
  ]
})
export class SharedModule { }
