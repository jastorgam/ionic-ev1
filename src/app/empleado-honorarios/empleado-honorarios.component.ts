import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-honorarios',
  templateUrl: './empleado-honorarios.component.html',
  styleUrls: ['./empleado-honorarios.component.scss'],
  standalone: true,
})
export class EmpleadoHonorariosComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('prueba');
  }
}
