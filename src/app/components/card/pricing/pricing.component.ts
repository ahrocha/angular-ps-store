import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

  @Input()
  gameType:string = "Digital PS4"
  @Input()
  gamePrice:string = "$59.99"
}
