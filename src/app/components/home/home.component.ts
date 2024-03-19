import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatRipple} from "@angular/material/core";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatRipple
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
