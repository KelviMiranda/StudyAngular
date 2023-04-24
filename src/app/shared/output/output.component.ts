import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Output() enviarDados = new EventEmitter();

  list:Array<{nome:string, idade:number}> = [{nome:'kelvin', idade:30}]

  constructor() { }

  ngOnInit(): void {

  }

  getDados(event:number):void{
    this.enviarDados.emit(this.list[event])
  }

  
}
