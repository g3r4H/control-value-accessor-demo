import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithAwesomeControlValueAccessorComponent } from './input-with-awesome-control-value-accessor.component';

describe('InputWithAwesomeControlValueAccessorComponent', () => {
  let component: InputWithAwesomeControlValueAccessorComponent;
  let fixture: ComponentFixture<InputWithAwesomeControlValueAccessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputWithAwesomeControlValueAccessorComponent]
    });
    fixture = TestBed.createComponent(InputWithAwesomeControlValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
