import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentDetailComponent } from './segment-detail.component';

describe('SegmentDetailComponent', () => {
  let component: SegmentDetailComponent;
  let fixture: ComponentFixture<SegmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
