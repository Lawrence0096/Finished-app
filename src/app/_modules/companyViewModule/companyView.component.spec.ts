import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewComponent } from './companyView.component';

describe('CustomViewComponent', () => {
  let component: CompanyViewComponent;
  let fixture: ComponentFixture<CompanyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
