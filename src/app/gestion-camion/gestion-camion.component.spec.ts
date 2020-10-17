import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCamionComponent } from './gestion-camion.component';

describe('GestionCamionComponent', () => {
  let component: GestionCamionComponent;
  let fixture: ComponentFixture<GestionCamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
