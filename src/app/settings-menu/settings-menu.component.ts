import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CustomerDetailService } from '../_services/customer-detail.service';
import { EventsService } from '../_services/events.service';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css']
})
export class SettingsMenuComponent implements OnInit,AfterViewInit {

 //https://stackblitz.com/edit/angular-p2iz4u?file=src%2Fapp%2Fslider-overview-example.html

  value: any = 6;
  finalValue: any = 60;
  stepIndex: number = 0;
  steps: number[] = [2, 5, 10, 15, 30, 45, 60];

  constructor(private eventsService: EventsService,
    private customerDetailService: CustomerDetailService,
    private cdRef: ChangeDetectorRef   
  ) { }
 
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let index = localStorage.getItem('userselection') || 0;
    let displayedIndex2 = localStorage.getItem('userselectedIndex')
    this.finalValue = displayedIndex2;
    this.value = index;
    //solves error ng0100 
    this.cdRef.detectChanges(); 
  }
 
  formatLabel(value: number) {
    return value;
  }

  defaultValue: any = 6;
  defaultFinalValue: any = 60;

  reset() {
    localStorage.setItem('userselection', this.defaultValue)
    localStorage.setItem('userselectedIndex', this.defaultFinalValue)
  }

  onInputChange($event: any) {
    this.stepIndex = +$event.value;
    localStorage.setItem('userselection', $event.value);
    this.finalValue = this.steps[this.stepIndex];
    localStorage.setItem('userselectedIndex', this.finalValue);
    this.eventsService.sliderData.next(this.finalValue);
    this.customerDetailService.sliderData.next(this.finalValue);
  }
}
