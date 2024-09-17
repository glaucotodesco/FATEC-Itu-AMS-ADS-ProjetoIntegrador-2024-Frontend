import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdDropdownComponent } from './card-prod-dropdown.component';

describe('CardProdDropdownComponent', () => {
  let component: CardProdDropdownComponent;
  let fixture: ComponentFixture<CardProdDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProdDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProdDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
