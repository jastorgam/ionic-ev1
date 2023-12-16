import { FiguraGeometrica } from './FiguraGeometrica';

export class Circulo extends FiguraGeometrica {
  radio: number;

  constructor(radio: number) {
    super('Circulo');
    this.radio = radio;
  }

  override calcularPermietro(): number {
    return this.radio * 2 * 3.1415;
  }
}
