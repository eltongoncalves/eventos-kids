import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarCriancasPage } from './listar-criancas.page';

describe('ListarCriancasPage', () => {
  let component: ListarCriancasPage;
  let fixture: ComponentFixture<ListarCriancasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarCriancasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
