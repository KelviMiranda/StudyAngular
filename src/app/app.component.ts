import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<!-- <app-title *ngIf="destruir"></app-title>
  <button (click)="destroyComponent()">Destruir o componente</button>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <app-atributo>
    <h1>Angular</h1>
    <h3>Final da Aula</h3>
  </app-atributo> -->


  <!-- <app-input [contador]="valueData"></app-input>
  <button (click)="add()">Add</button> -->

  <app-output (enviarDados)="setDados($event)"></app-output>
    <ng-template [ngIf]="getDados">
        <h1>{{getDados.nome}}</h1>
        <h1>{{getDados.idade}}</h1>
    </ng-template> 
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit{
  
  getDados!:{nome:string, idade:number}

  valueData:number = 10;
  valor:number = 1;

  titlel = 'Olá Mundo';
  destruir:boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      console.log('O compnente é inicializado com sucesso')
    }, 5000)
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewIni")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
 
  destroyComponent():void{
    this.destruir = false;
  }

  adicionar():number{
    return this.valor +=1;
  }

  add():void{
    this.valueData += 1;
  }

  setDados(event:{nome:string, idade:number}){
    this.getDados = event;
  }
}
