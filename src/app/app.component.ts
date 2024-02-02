import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'novotour';
  food : string = '';
colorControl: any;
}
