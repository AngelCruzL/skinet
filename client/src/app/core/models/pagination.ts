export interface Pagination<T> {
  pageNumber: number;
  itemsPerPage: number;
  count: number;
  data: T;
}
