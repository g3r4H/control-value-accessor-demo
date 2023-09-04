import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { InputWithAwesomeControlValueAccessorComponent } from './components/input-with-awesome-control-value-accessor/input-with-awesome-control-value-accessor.component';
import { InputWithControlValueAccessorComponent } from './components/input-with-control-value-accessor/input-with-control-value-accessor.component';
import { InputWithoutControlValueAccessorComponent } from './components/input-without-control-value-accessor/input-without-control-value-accessor.component';

@Component({
  selector: 'cvad-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputWithAwesomeControlValueAccessorComponent,
    InputWithControlValueAccessorComponent,
    InputWithoutControlValueAccessorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'control-value-accessor-demo';
  form = new FormGroup({
    name: new FormControl('Gerardo'),
    lastName: new FormControl('Heredia'),
    withoutAccessor: new FormControl(''),
    withAccessor: new FormControl('with accessor'),
    awesome: new FormControl(''),
  });

  constructor() {}
}
