import { HeaderService } from './../services/header.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Input() dataShared:string = '';

  @Input() admin!:{name:string, age:number}

  constructor(private headerService:HeaderService) { 
    
  }

  ngOnInit(): void {
  }

  get title():string{
    return this.headerService.headerData.title
  }

  get icon():string{
    return this.headerService.headerData.icon
  }

  get routeUrl():string{
    return this.headerService.headerData.routeUrl
  }
}
