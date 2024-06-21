import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyBuilderComponent } from './journey-builder.component';

describe('JourneyBuilderComponent', () => {
  let component: JourneyBuilderComponent;
  let fixture: ComponentFixture<JourneyBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JourneyBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
