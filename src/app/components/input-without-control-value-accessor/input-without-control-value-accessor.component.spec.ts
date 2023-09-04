import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithoutControlValueAccessorComponent } from './input-without-control-value-accessor.component';

describe('InputWithoutControlValueAccessorComponent', () => {
  let component: InputWithoutControlValueAccessorComponent;
  let fixture: ComponentFixture<InputWithoutControlValueAccessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputWithoutControlValueAccessorComponent]
    });
    fixture = TestBed.createComponent(InputWithoutControlValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
