import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUtilComponent } from './gestion-util.component';

describe('GestionUtilComponent', () => {
  let component: GestionUtilComponent;
  let fixture: ComponentFixture<GestionUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
