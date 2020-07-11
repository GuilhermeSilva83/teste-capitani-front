import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa, Tipo } from 'src/app/model';
import { PessoaService } from 'src/app/services/pessoa.service';
import { EstadoService } from 'src/app/services/estado.service';
import { CidadeService } from 'src/app/services/cidade.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.sass']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  estados: Tipo[] = [];
  cidades: Tipo[] = [];



  constructor(private route: ActivatedRoute, private router: Router, private service: PessoaService,
    private estadoService: EstadoService, private cidadeService: CidadeService,
    private toastr: ToastrService) {
  }

  async ngOnInit() {

    this.estados = await this.estadoService.List();

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.pessoa = await this.service.GetById(id);
      this.cidades = await this.cidadeService.ListarPorEstado(this.pessoa.estadoId);
    }

  }

  Salvar() {
    this.pessoa.cidade = null;
    this.service.Save(this.pessoa).then(d => {
      if (d.success) {
        this.router.navigateByUrl('pessoa');
      }
    });
  }

  async SelectionChangeEstado() {
    this.pessoa.cidadeId = null;
    this.cidades = await this.cidadeService.ListarPorEstado(this.pessoa.estadoId);
  }



}
