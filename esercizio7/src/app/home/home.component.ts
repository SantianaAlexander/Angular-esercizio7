import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TotodileComponent } from '../totodile/totodile.component';
import { CyndaquilComponent } from '../cyndaquil/cyndaquil.component';
import { ChikoritaComponent } from '../chikorita/chikorita.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TotodileComponent, CyndaquilComponent, ChikoritaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mostraHome: boolean = true
  mostraChikorita: boolean = false
  mostraCyndaquil: boolean = false
  mostraTotodile: boolean = false

  name1 = "chikorita";
  name2 = "cyndaquil";
  name3 = "totodile";
  colorb1 = "#6EBC54";
  colorb2 = "#F0831E";
  colorb3 = "#59C2E1";
  color1 = "#C80408";
  color2 = "#007F86";
  color3 = "#ED8599";

  // CHIKORITA
  apriChikorita(event: MouseEvent) {
    this.mostraChikorita = true
    this.mostraHome = false
    this.mostraCyndaquil = false
    this.mostraTotodile = false
    console.log(this.mostraChikorita)
  }

  // CYNDAQUIL
  apriCyndaquil(event: MouseEvent) {
    this.mostraCyndaquil = true
    this.mostraHome = false
    this.mostraChikorita = false
    this.mostraTotodile = false
    console.log(this.mostraCyndaquil)
  }

  // TOTODILE
  apriTotodile(event: MouseEvent) {
    this.mostraTotodile = true
    this.mostraHome = false
    this.mostraCyndaquil = false
    this.mostraChikorita = false
    console.log(this.mostraTotodile)
  }
}
