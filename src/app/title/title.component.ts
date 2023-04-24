import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy{

 @Input() public title1:string = "Bem vindo";

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges():void {
    alert('Dado do título alterado com sucesso')
  }

  ngOnDestroy(): void {
    console.log('O Componente Foi destruido')
  }



}
