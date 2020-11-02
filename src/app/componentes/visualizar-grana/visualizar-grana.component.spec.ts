import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarGranaComponent } from './visualizar-grana.component';

describe('EditarGranaComponent', () => {
  let component: VisualizarGranaComponent;
  let fixture: ComponentFixture<VisualizarGranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarGranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarGranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
