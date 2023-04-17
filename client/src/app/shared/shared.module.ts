import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, PaginationModule.forRoot()],
  exports: [NavbarComponent, PaginationModule],
})
export class SharedModule {}
