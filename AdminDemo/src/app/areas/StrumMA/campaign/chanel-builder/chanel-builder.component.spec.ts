import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelBuilderComponent } from './chanel-builder.component';

describe('ChanelBuilderComponent', () => {
  let component: ChanelBuilderComponent;
  let fixture: ComponentFixture<ChanelBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanelBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChanelBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
