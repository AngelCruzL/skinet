import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-header',
  templateUrl: './pagination-header.component.html',
  styles: [''],
})
export class PaginationHeaderComponent {
  @Input() pageNumber!: number;
  @Input() itemsPerPage!: number;
  @Input() totalItemsCount!: number;

  displayFirstPageItem(): number {
    return (this.pageNumber - 1) * this.itemsPerPage + 1;
  }

  displayLastPageItem(): number {
    return this.pageNumber * this.itemsPerPage > this.totalItemsCount
      ? this.totalItemsCount
      : this.pageNumber * this.itemsPerPage;
  }
}
