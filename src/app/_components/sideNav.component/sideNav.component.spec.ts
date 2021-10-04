import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationListComponent } from './sideNav.component';

describe('CompaniesComponent', () => {
  let component: NavigationListComponent;
  let fixture: ComponentFixture<NavigationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
