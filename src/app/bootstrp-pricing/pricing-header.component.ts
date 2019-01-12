import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-header',
  template: `
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
  <h1 class="display-4">Pricing</h1>
  <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
</div>
  `,
  styles: [`.pricing-header {
    max-width: 700px;
  }
  `]
})
export class PricingHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
