import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaSummeryComponent } from './persona-summery.component';

describe('PersonaSummeryComponent', () => {
  let component: PersonaSummeryComponent;
  let fixture: ComponentFixture<PersonaSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaSummeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
