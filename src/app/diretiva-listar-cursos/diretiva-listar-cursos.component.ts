import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos.service';
import { Curso } from '../model/curso';

CursosService

@Component({
  selector: 'app-diretiva-listar-cursos',
  templateUrl: './diretiva-listar-cursos.component.html',
  styleUrls: ['./diretiva-listar-cursos.component.css']
})
export class DiretivaListarCursosComponent implements OnInit {

   cursos: Curso[];

  constructor(private cursosService: CursosService) {
    this.cursos = cursosService.getCursos();
  }

  ngOnInit() {
  }

}
