import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estruturais',
  templateUrl: './estruturais.component.html',
  styleUrls: ['./estruturais.component.css']
})
export class EstruturaisComponent implements OnInit {

  condition:boolean = true;
  conditionClick:boolean = true

  list:Array<{nome:string, idade:number}> = [{nome:"Kelvin Miranda", idade:30},
  {nome:"Esmeralda", idade:25}]

   sms:string = '';

   conditionColor = 'color'
    nome:string = 'dener'
   
  constructor() { }

  ngOnInit(): void {

    /* setInterval(()=>{
      if(this.condition){
        this.condition = false
      }else{
        this.condition = true;
      }
    }, 2000) */
  }

  onClickCondition():void{
  /*   if(this.conditionClick){
      this.conditionClick = false
    } else {
      this.conditionClick = true
    } */

    this.conditionClick = ! this.conditionClick
  }
  clickAdd():void{
    this.list.push({nome:'Nay', idade:31})
  }

  onclickListEvent(i:number){
    this.list.splice(i, 1)
    this.sms = 'Excluído com sucesso';
  }
}
