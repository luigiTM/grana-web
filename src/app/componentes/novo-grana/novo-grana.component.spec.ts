import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoGranaComponent } from './novo-grana.component';

describe('NovoGranaComponent', () => {
  let component: NovoGranaComponent;
  let fixture: ComponentFixture<NovoGranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoGranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoGranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
