import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopStatsComponent } from './card-top-stats.component';

describe('CardTopStatsComponent', () => {
  let component: CardTopStatsComponent;
  let fixture: ComponentFixture<CardTopStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTopStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTopStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
