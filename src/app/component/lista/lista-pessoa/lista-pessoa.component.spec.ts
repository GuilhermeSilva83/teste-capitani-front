import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPessoaComponent } from './lista-pessoa.component';

describe('ListaPessoaComponent', () => {
  let component: ListaPessoaComponent;
  let fixture: ComponentFixture<ListaPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
