// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';


// App
import { MainMenuComponent } from './component/infrastructure/main-menu/main-menu.component';
import { PessoaComponent } from './component/detalhe/pessoa/pessoa.component';
import { ListaPessoaComponent } from './component/lista/lista-pessoa/lista-pessoa.component';
import { MainComponent } from './component/main/main.component';

// app, route
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



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
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
