import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraphComponent } from './card-graph.component';

describe('CardGraphComponent', () => {
  let component: CardGraphComponent;
  let fixture: ComponentFixture<CardGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
