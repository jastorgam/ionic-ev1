import { FiguraGeometrica } from './FiguraGeometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  ladoA: number;
  ladoB: number;
  ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    super('Triangulo');
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  override calcularPermietro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
