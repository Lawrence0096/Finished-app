import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider/slider';
import { EventsService } from '../../_services/dashboard.service';
import { CustomerDetailService } from 'src/app/_services/customer-detail.service';

@Component({
  selector: 'app-refresh-rate-slider',
  templateUrl: './refresh-rate-slider.component.html',
  styleUrls: ['./refresh-rate-slider.component.css']
})
export class RefreshRateSliderComponent implements OnInit {

  @Output() onSlide: EventEmitter<any> = new EventEmitter();

  constructor(private eventsService : EventsService, 
  private customerDetailService: CustomerDetailService) { }


  ngOnInit(): void {
  }

  
  formatLabel(value: number) {
    return value;
  }

  onInputChange2(event: MatSliderChange){
     
  } 



 

  onConfirmClick2(value:any){
    value = value 
  }

  // 2,5,10,15,30,45 in 60

  stepIndex: number = 0;
  steps: number[] = [2,5,10,15,30,45,60];
  finalValue: number = 60;

  onInputChange($event: any) {
    this.stepIndex = +$event.value;
    this.onConfirmClick2($event)
    this.finalValue = this.steps[this.stepIndex];
    this.eventsService.sliderData.next(this.finalValue)
    this.customerDetailService.sliderData.next(this.finalValue)
  }
}
