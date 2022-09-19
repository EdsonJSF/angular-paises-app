import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';

const importExport = [
  PorCapitalComponent,
  PorPaisComponent,
  PorRegionComponent,
  VerPaisComponent,
];

@NgModule({
  declarations: [importExport],
  exports: [importExport],
  imports: [CommonModule],
})
export class PaisModule {}