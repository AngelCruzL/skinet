import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrModule } from 'ngx-toastr';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginationComponent,
    PaginationHeaderComponent,
    SectionHeaderComponent,
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
    BreadcrumbModule,
  ],
  exports: [
    NavbarComponent,
    PaginationModule,
    PaginationHeaderComponent,
    PaginationComponent,
    SectionHeaderComponent,
  ],
})
export class SharedModule {}
