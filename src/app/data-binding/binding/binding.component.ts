import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {


  idade:number = 29;
  maisUm:number = 1;
  alt:string = 'paísagem'
  imgSrc = 'https://fotodicasbrasil.com.br/wp-content/uploads/2014/04/destacada_paisagens2.jpg';
  nome!:string
  position: {x:number , y:number} = {x: 0 , y:0}
  constructor() { 

  }

  ngOnInit(): void {

  }

  mouseMoveTest(event: MouseEvent) {
    this.position.x = event.offsetX;
    this.position.y = event.offsetY;
  }

}
