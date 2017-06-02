import { Injectable } from '@angular/core';
import { Curso } from './model/curso';

@Injectable()
export class CursosService {

cursos: Curso[];

  constructor() { }

  getCursos(){

     return this.cursos = [
       new Curso('1', 'Angular 2'),
       new Curso('2', 'Java'),
       new Curso('3', 'Spring')
     ];
   }

}
