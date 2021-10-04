import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPageComponent } from './companyPage.component';

describe('CustomViewComponent', () => {
  let component: CompanyPageComponent;
  let fixture: ComponentFixture<CompanyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
