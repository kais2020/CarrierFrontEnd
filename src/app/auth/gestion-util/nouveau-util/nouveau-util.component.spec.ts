import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauUtilComponent } from './nouveau-util.component';

describe('NouveauUtilComponent', () => {
  let component: NouveauUtilComponent;
  let fixture: ComponentFixture<NouveauUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
