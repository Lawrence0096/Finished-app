import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshRateSliderComponent } from './refresh-rate-slider.component';

describe('RefreshRateSliderComponent', () => {
  let component: RefreshRateSliderComponent;
  let fixture: ComponentFixture<RefreshRateSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshRateSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshRateSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
