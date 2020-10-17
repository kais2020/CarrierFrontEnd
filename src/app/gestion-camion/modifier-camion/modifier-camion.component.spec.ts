import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCamionComponent } from './modifier-camion.component';

describe('ModifierCamionComponent', () => {
  let component: ModifierCamionComponent;
  let fixture: ComponentFixture<ModifierCamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
