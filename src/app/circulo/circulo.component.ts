import { Component, OnInit } from '@angular/core';
import { Circulo } from '../models/Circulo';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonText,
} from '@ionic/angular/standalone';
import { CommonModule, NumberSymbol } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
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
  ],
  standalone: true,
})
export class CirculoComponent implements OnInit {
  perimetro: number;
  radio: number;

  constructor() {
    this.perimetro = 0;
    this.radio = 0;
  }

  ngOnInit() {
    console.log('Circulo');
  }

  calcularPerimetro() {
    console.log(this.perimetro);
    this.perimetro = new Circulo(this.radio).calcularPermietro();
  }
}
