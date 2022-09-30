import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (error) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.paisService.buscarCapital(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 3)),
      (error) => (this.paisesSugeridos = [])
    );
  }
}
