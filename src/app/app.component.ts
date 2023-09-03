import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cvad-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'control-value-accessor-demo';
}
