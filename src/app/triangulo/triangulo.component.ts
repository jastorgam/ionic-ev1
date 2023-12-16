import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonItem,
  IonList,
  IonText,
} from '@ionic/angular/standalone';
import { TrianguloEquilatero } from '../models/TrianguloEquilatero';
import { TrianguloEscaleno } from '../models/TrianguloEscaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonList,
    IonItem,
    IonInput,
    IonText,
    IonButton,
    CommonModule,
    FormsModule,
    IonImg,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  ],
})
export class TrianguloComponent implements OnInit {
  perimetro: number;
  ladoA: number;
  ladoB: number;
  ladoC: number;

  constructor() {
    this.perimetro = 0;
    this.ladoA = 0;
    this.ladoB = 0;
    this.ladoC = 0;
  }

  ngOnInit() {
    console.log('Triangulo');
  }

  calcularPerimetro() {
    this.perimetro = new TrianguloEscaleno(
      this.ladoA,
      this.ladoB,
      this.ladoC
    ).calcularPermietro();
  }
}
