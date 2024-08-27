import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSlipComponent } from './orders-slip.component';

describe('OrdersSlipComponent', () => {
  let component: OrdersSlipComponent;
  let fixture: ComponentFixture<OrdersSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersSlipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
