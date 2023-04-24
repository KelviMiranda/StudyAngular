import { HeaderService } from './../services/header.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})


export class WrapperComponent implements OnInit {
    user!:{
      title:'Titulo',
      icon:'Icon',
      routeUrl:''
    }

    data = 'Compartilhando dado';

    admin = {
      name:'Kelvin',
      age:30
    }

  constructor(private headerService:HeaderService) { 
    this.user
  }

  ngOnInit(): void {
  }

  
}
