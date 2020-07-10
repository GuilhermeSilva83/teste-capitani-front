import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './component/detalhe/pessoa/pessoa.component';
import { ListaPessoaComponent } from './component/lista/lista-pessoa/lista-pessoa.component';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './component/infrastructure/main-menu/main-menu.component';
import { MainComponent } from './component/main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'pessoa', component: ListaPessoaComponent },
  { path: 'pessoa/:id', component: PessoaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
