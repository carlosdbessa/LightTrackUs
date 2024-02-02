import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MatCheckboxModule,CommonModule, RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'novotour';
  food : string = '';
  total_distance : string = '';
colorControl: any;
}

