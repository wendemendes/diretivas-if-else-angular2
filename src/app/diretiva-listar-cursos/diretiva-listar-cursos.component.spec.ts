import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaListarCursosComponent } from './diretiva-listar-cursos.component';

describe('DiretivaListarCursosComponent', () => {
  let component: DiretivaListarCursosComponent;
  let fixture: ComponentFixture<DiretivaListarCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaListarCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaListarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
