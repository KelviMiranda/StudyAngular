import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';

import { WrapperComponent } from './wrapper/wrapper.component';
import {FormsModule} from '@angular/forms';
import { BindingComponent } from './data-binding/binding/binding.component';
import { EstruturaisComponent } from './diretivas/estruturais/estruturais.component';
import { HeaderComponent } from './header/header.component';
import { AtributoComponent } from './diretivas/atributo/atributo.component'


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    WrapperComponent,
    BindingComponent,
    EstruturaisComponent,
    HeaderComponent,
    AtributoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
