import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonInput,
  IonButton,
  IonSelectOption,
  IonSelect,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
    CirculoComponent,
    TrianguloComponent,
    FormsModule,
    CommonModule,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  ],
})
export class HomePage {
  figuraSeleccionada: any;
  constructor() {}

  obtenerValor(event: CustomEvent) {
    this.figuraSeleccionada = event.detail.value;
    console.log('Valor seleccionado:', this.figuraSeleccionada);
  }
}
