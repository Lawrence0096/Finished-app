import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEventTableComponent } from './mainEventTable.component';

describe('MainContentComponent', () => {
  let component: MainEventTableComponent;
  let fixture: ComponentFixture<MainEventTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEventTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
