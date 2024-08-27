import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRegisterComponent } from './open-register.component';

describe('OpenRegisterComponent', () => {
  let component: OpenRegisterComponent;
  let fixture: ComponentFixture<OpenRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
