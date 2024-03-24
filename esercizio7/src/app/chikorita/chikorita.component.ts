import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-chikorita',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, HomeComponent, CommonModule, MatDividerModule],
  templateUrl: './chikorita.component.html',
  styleUrl: './chikorita.component.css'
})
export class ChikoritaComponent {
  mostraChikorita: boolean = true

  image = "https://media.pokemoncentral.it/wiki/5/53/Artwork0152_Corp_2.png"
  nome = "chikorita"
  tipo = "erba"
  peso = "6,4 kg"
  altezza = "0,9 m"
  npokedex = 152
  descrizione = "Chikorita e' un piccolo Pokemon quadrupede dalla pelle di colore verde molto pallida. Ha le zampe tozze con un artiglio piatto su ciascuna zampa e una piccola coda, il collo e' largo quanto la testa con attorno dei boccioli verdi, gli occhi sono grandi con l'iride rossa e sul capo ha la sua caratteristica foglia verde."

  @Output() tornaHome: EventEmitter<void> = new EventEmitter<void>();

  tornaAllaHome() {
    this.tornaHome.emit();
  }
}
