import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursosService } from './cursos.service';
import { DiretivaListarCursosComponent } from './diretiva-listar-cursos/diretiva-listar-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaListarCursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
