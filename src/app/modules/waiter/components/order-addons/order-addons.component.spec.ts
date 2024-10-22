import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAddonsComponent } from './order-addons.component';

describe('OrderAddonsComponent', () => {
  let component: OrderAddonsComponent;
  let fixture: ComponentFixture<OrderAddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderAddonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
