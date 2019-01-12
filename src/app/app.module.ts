import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrpPricingComponent } from './bootstrp-pricing/bootstrp-pricing.component';
import { PricingNavComponent } from './bootstrp-pricing/pricing-nav.component';
import { PricingHeaderComponent } from './bootstrp-pricing/pricing-header.component';
import { CardContainerComponent } from './bootstrp-pricing/card-container/card-container.component';
import { PricingCardComponent } from './bootstrp-pricing/card-container/pricing-card.component';
import { FooterComponent } from './bootstrp-pricing/footer/footer.component';
import { FooterMainComponent } from './bootstrp-pricing/footer/footer-main.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrpPricingComponent,
    PricingNavComponent,
    PricingHeaderComponent,
    CardContainerComponent,
    PricingCardComponent,
    FooterComponent,
    FooterMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
