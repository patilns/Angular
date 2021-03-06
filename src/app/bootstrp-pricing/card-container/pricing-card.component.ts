import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  template: `
    <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
    </div>
  `,
  styles: [`.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
  .card {
    min-width: 290px;
  }
  
  .border-top { border-top: 1px solid #e5e5e5; }
  .border-bottom { border-bottom: 1px solid #e5e5e5; }
  `]
})
export class PricingCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
