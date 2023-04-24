import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {

  valor:boolean = true;

  btnYellow:Array<any> = ['yellow', 'font']

  heightpx: string= "20px"
  backgroundColor = "red"
  public nome :string = ''
  list:Array<{nome:string}> = []

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      if(this.heightpx == "20px"){
        this.heightpx = "80px"
        this.backgroundColor = "blue"
      } else{
        this.heightpx = "20px";
        this.backgroundColor = "red"
      }
    },2000)
  }

  btnAction():void{
    this.valor = ! this.valor
  }

  save(nome:string){
    this.list.push({nome})
    this.nome = ''
  }
}
