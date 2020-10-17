import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBlclientComponent } from './gestion-blclient.component';

describe('GestionBlclientComponent', () => {
  let component: GestionBlclientComponent;
  let fixture: ComponentFixture<GestionBlclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionBlclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBlclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
