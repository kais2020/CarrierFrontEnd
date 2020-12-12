import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauBlclientComponent } from './nouveau-blclient.component';

describe('NouveauBlclientComponent', () => {
  let component: NouveauBlclientComponent;
  let fixture: ComponentFixture<NouveauBlclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauBlclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauBlclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
