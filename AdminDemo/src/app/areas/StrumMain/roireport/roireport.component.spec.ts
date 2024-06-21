import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ROIReportComponent } from './roireport.component';

describe('ROIReportComponent', () => {
  let component: ROIReportComponent;
  let fixture: ComponentFixture<ROIReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ROIReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ROIReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
