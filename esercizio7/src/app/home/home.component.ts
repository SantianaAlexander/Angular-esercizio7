import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name1 = "chikorita";
  name2 = "cyndaquil";
  name3 = "totodile";
  colorb1 = "#6EBC54";
  colorb2 = "#F0831E";
  colorb3 = "#59C2E1";
  color1 = "#C80408";
  color2 = "#007F86";
  color3 = "#ED8599";
}
