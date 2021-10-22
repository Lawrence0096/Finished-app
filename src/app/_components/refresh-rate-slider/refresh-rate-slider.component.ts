import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider/slider';
import { EventsService } from '../../_services/events.service';
import { CustomerDetailService } from 'src/app/_services/customer-detail.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-refresh-rate-slider',
  templateUrl: './refresh-rate-slider.component.html',
  styleUrls: ['./refresh-rate-slider.component.css']
})
export class RefreshRateSliderComponent implements OnInit, AfterViewInit {

  value: any = 6;
  finalValue: any = 60;
  stepIndex: number = 0;
  steps: number[] = [2, 5, 10, 15, 30, 45, 60];

  constructor(private eventsService: EventsService,
    private customerDetailService: CustomerDetailService) { }
  ngOnInit(): void {
  }

  formatLabel(value: number) {
    return value;
  }

  anyany: any = 6;
  anyany2: any = 60;

  reset() {
    localStorage.setItem('userselection', this.anyany)
    localStorage.setItem('userselectedIndex', this.anyany2)
  }

  onInputChange($event: any) {
    this.stepIndex = +$event.value;
    localStorage.setItem('userselection', $event.value);
    this.finalValue = this.steps[this.stepIndex];
    localStorage.setItem('userselectedIndex', this.finalValue);
    console.log(this.finalValue);
    this.eventsService.sliderData.next(this.finalValue);
    this.customerDetailService.sliderData.next(this.finalValue);
  }
  ngAfterViewInit() {
    let index = localStorage.getItem('userselection') || 0;
    let displayedIndex2 = localStorage.getItem('userselectedIndex')
    this.finalValue = displayedIndex2;
    this.value = index;
  }
}
