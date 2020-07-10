import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './component/infrastructure/main-menu/main-menu.component';
import { PessoaComponent } from './component/detalhe/pessoa/pessoa.component';
import { ListaPessoaComponent } from './component/lista/lista-pessoa/lista-pessoa.component';
import { MainComponent } from './component/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PessoaComponent,
    ListaPessoaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
