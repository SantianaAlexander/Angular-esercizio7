import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visualizza: string = "home"
  constructor() {
    this.visualizza = "home"
  }

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
  imageChik: string = "https://media.pokemoncentral.it/wiki/5/53/Artwork0152_Corp_2.png"
  nomeChik: string = "chikorita"     
  tipoChik: string = "erba"
  pesoChik: string = "6,4 kg"
  altezzaChik: string = "0,9 m"
  npokedexChik: number = 152
  debChik1: string = "fuoco"
  debChik2: string = "ghiaccio"
  debChik3: string = "veleno"
  debChik4: string = "volante"
  debChik5: string = "coleottero"
  descrizioneChik: string = "Chikorita e' un piccolo Pokemon quadrupede dalla pelle di colore verde molto pallida. Ha le zampe tozze con un artiglio piatto su ciascuna zampa e una piccola coda, il collo e' largo quanto la testa con attorno dei boccioli verdi, gli occhi sono grandi con l'iride rossa e sul capo ha la sua caratteristica foglia verde."
  doveChik: string = "Per ottenere Chikorita bisogna recarsi al laboratorio del Professor Elm nella citta' di New Bark Town. Una volta parlato col professore quest'ultimo chiedera' al giocatore quale pokemon scegliere: Chikorita sara' uno di essi"

  apriChikorita(event: MouseEvent) {
    this.visualizza = "chikorita"
    console.log(this.visualizza)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // CYNDAQUIL
  imageCynd: string = "https://media.pokemoncentral.it/wiki/5/5f/Artwork0155_Corp_2.png"
  nomeCynd: string = "cyndaquil"     
  tipoCynd: string = "fuoco"
  pesoCynd: string = "7,9 kg"
  altezzaCynd: string = "0,5 m"
  npokedexCynd: number = 155
  debCynd1: string = "acqua"
  debCynd2: string = "terra"
  debCynd3: string = "roccia"
  descrizioneCynd: string = "Cyndaquil e' un Pokemon di tipo Fuoco simile a un toporagno con un muso lungo, occhi chiusi e zampe corte. Ha una pelliccia beige con una fronte, un muso superiore e una schiena verde scuro. Quattro macchie rosse sulla sua schiena emettono fiamme."
  doveCynd: string = "All'inizio del gioco, il Professor Elm ti dara' la possibilita' di scegliere uno dei tre Pokemon iniziali: Cyndaquil, Chikorita o Totodile. Scegliendo Cyndaquil, quest'ultimo sara' il tuo primo compagno di viaggio nella tua avventura."

  apriCyndaquil(event: MouseEvent) {
    this.visualizza = "cyndaquil"
    console.log(this.visualizza)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // TOTODILE
  imageToto: string = "https://media.pokemoncentral.it/wiki/4/4a/Artwork0158_Corp.png"
  nomeToto: string = "totodile"     
  tipoToto: string = "acqua"
  pesoToto: string = "9,5 kg"
  altezzaToto: string = "0,6 m"
  npokedexToto: number = 158
  debToto1: string = "erba"
  debToto2: string = "elettro"
  descrizioneToto: string = "Totodile e' un Pokemon bipede simile a un coccodrillo di colore azzurro con due strisce gialle a forma di V sul petto. Ha cinque artigli sulle zampe anteriori e tre dita robuste su quelle posteriori. La sua schiena presenta squame appuntite rosse, una anche sulla coda. Ha occhi gialli con segni neri intorno e una bocca larga con grandi zanne."
  doveToto: string = "All'inizio del tuo viaggio in Pokemon Oro e Argento, il Professor Elm ti offrira' una scelta fondamentale: Cyndaquil, Chikorita o Totodile. Per far si' che Totodile sia il tuo primo compagno d'avventure non bisogna fare altro che sceglierlo."

  apriTotodile(event: MouseEvent) {
    this.visualizza = "totodile"
    console.log(this.visualizza)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // TORNA ALLA HOME
    tornaHome(event: MouseEvent) {
      this.visualizza = "home"
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
}
