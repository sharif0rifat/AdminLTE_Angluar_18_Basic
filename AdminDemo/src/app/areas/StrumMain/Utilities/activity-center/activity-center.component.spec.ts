import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCenterComponent } from './activity-center.component';

describe('ActivityCenterComponent', () => {
  let component: ActivityCenterComponent;
  let fixture: ComponentFixture<ActivityCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
