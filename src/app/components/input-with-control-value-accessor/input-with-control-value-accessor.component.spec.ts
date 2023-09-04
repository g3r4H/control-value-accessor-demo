import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithControlValueAccessorComponent } from './input-with-control-value-accessor.component';

describe('InputWithControlValueAccessorComponent', () => {
  let component: InputWithControlValueAccessorComponent;
  let fixture: ComponentFixture<InputWithControlValueAccessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputWithControlValueAccessorComponent]
    });
    fixture = TestBed.createComponent(InputWithControlValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
