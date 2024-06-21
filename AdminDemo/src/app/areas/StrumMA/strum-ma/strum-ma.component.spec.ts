import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrumMAComponent } from './strum-ma.component';

describe('StrumMAComponent', () => {
  let component: StrumMAComponent;
  let fixture: ComponentFixture<StrumMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrumMAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrumMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
