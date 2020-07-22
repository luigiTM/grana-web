import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGranaComponent } from './visualizar-grana.component';

describe('EditarGranaComponent', () => {
  let component: EditarGranaComponent;
  let fixture: ComponentFixture<EditarGranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarGranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
