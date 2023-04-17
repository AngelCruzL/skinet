import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginationComponent,
    PaginationHeaderComponent,
  ],
  imports: [CommonModule, PaginationModule.forRoot()],
  exports: [NavbarComponent, PaginationModule, PaginationHeaderComponent],
})
export class SharedModule {}
