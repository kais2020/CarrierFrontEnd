import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCamionComponent } from './nouveau-camion.component';

describe('NouveauCamionComponent', () => {
  let component: NouveauCamionComponent;
  let fixture: ComponentFixture<NouveauCamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauCamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
