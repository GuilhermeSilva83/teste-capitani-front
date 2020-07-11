import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from "../../../model";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.sass']
})
export class ListaPessoaComponent implements OnInit {



  constructor(private service: PessoaService, private router: Router) { }

  campos = ['id', 'nome', 'dataNascimento', 'email', 'cpf', 'cep', 'cidade', 'estado', 'actions'];
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
    // alert(id);
    this.service.DeleteById(id).then(result => {
      if (result.success) {
        this.Reload();
      }
    })
  }


}
