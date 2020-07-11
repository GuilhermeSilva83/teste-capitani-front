import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Pessoa, Tipo } from 'src/app/model';
import { PessoaService } from 'src/app/services/pessoa.service';
import { debug } from 'console';
import { map, switchMap } from 'rxjs/operators';
import { EstadoService } from 'src/app/services/estado.service';
import { CidadeService } from 'src/app/services/cidade.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.sass']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  estados: Tipo[] = [];
  cidades: Tipo[] = [];



  constructor(private route: ActivatedRoute, private router: Router, private service: PessoaService, private estadoService: EstadoService, private cidadeService: CidadeService) {
  }

  async ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.pessoa = await this.service.GetById(id);
      this.cidades = await this.cidadeService.List();
    }

    this.estados = await this.estadoService.List();



  }

  Salvar() {
    this.service.Save(this.pessoa).then(d => {
      if (d.success) {
        this.router.navigateByUrl('pessoa');
      } else {

      }
    });


  }

}
