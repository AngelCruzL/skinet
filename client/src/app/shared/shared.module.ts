import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginationComponent,
    PaginationHeaderComponent,
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  exports: [
    NavbarComponent,
    PaginationModule,
    PaginationHeaderComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
