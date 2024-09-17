import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMediumStatsComponent } from './card-medium-stats.component';

describe('CardMediumStatsComponent', () => {
  let component: CardMediumStatsComponent;
  let fixture: ComponentFixture<CardMediumStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMediumStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMediumStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
