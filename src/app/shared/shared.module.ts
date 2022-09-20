import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';

const importExport = [SidebarComponent];

@NgModule({
  declarations: [importExport],
  exports: [importExport],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
