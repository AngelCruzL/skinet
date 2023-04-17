import { Component, EventEmitter, Input, Output } from '@angular/core';

type onPageChangedEvent = {
  page: number;
  itemsPerPage: number;
};

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [''],
})
export class PaginationComponent {
  @Input() totalItemsCount!: number;
  @Input() itemsPerPage!: number;
  @Output() pageChanged = new EventEmitter<number>();

  onPageChanged(event: onPageChangedEvent): void {
    this.pageChanged.emit(event.page);
  }
}
