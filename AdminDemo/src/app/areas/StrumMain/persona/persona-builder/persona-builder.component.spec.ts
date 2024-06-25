import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaBuilderComponent } from './persona-builder.component';

describe('PersonaBuilderComponent', () => {
  let component: PersonaBuilderComponent;
  let fixture: ComponentFixture<PersonaBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
