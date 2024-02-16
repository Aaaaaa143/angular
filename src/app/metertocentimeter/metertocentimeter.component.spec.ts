import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetertocentimeterComponent } from './metertocentimeter.component';

describe('MetertocentimeterComponent', () => {
  let component: MetertocentimeterComponent;
  let fixture: ComponentFixture<MetertocentimeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetertocentimeterComponent]
    });
    fixture = TestBed.createComponent(MetertocentimeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
