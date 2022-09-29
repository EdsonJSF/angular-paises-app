import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pais-error',
  templateUrl: './pais-error.component.html',
  styles: [],
})
export class PaisErrorComponent {
  @Input() busqueda: string = '';
  @Input() hayError: boolean = true;
}
