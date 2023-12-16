import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { EmpleadoHonorariosComponent } from '../empleado-honorarios/empleado-honorarios.component';


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
    EmpleadoHonorariosComponent,
  ],
})
export class HomePage {
  nombre: String = 'Juan';
  constructor() {}
}
