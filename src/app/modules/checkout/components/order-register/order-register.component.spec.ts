import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRegisterComponent } from './order-register.component';

describe('OrderRegisterComponent', () => {
  let component: OrderRegisterComponent;
  let fixture: ComponentFixture<OrderRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
