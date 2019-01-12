import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrpPricingComponent } from './bootstrp-pricing.component';

describe('BootstrpPricingComponent', () => {
  let component: BootstrpPricingComponent;
  let fixture: ComponentFixture<BootstrpPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrpPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrpPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
