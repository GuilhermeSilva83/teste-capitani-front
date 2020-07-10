import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from "../../../model";

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.sass']
})
export class ListaPessoaComponent implements OnInit {



  constructor(private service: PessoaService) { }

  campos = ['id', 'nome', 'dataNascimento', 'email', 'cpf', 'actions'];
  lista: Pessoa[];

  ngOnInit(): void {
    this.Reload();
  }

  Reload() {
    this.service.List().then((data) => {
      this.lista = data;
    })
  }

  Excluir(id) {
    this.service.DeleteById(id).then(result => {
      if (result.success) {
        this.Reload();
      }
    })
  }
}
