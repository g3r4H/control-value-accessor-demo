import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cvad-input-with-control-value-accessor',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputWithControlValueAccessorComponent),
      multi: true,
    },
  ],
  templateUrl: './input-with-control-value-accessor.component.html',
  styleUrls: ['./input-with-control-value-accessor.component.scss'],
})
export class InputWithControlValueAccessorComponent
  implements ControlValueAccessor
{
  // This is very basic Control Value Accessor implementation, this Component is just for showing what
  // Control Value Accessor is about & is missing functionality like:
  // validation, reusability & dynamic data typing.
  // For a more robust implementation look for InputWithAwesomeControlValueAccessorComponent

  currentValue = '';

  private onChange!: Function;
  private onTouch!: Function;
  isDisabled = false;

  updateValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  // Control Value Accessor Interface

  writeValue(value: string): void {
    if (value) {
      this.currentValue = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // The following 2 methods are not used in this component, but must be implemented
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
