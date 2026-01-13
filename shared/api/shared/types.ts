export interface PaginationWrapperResponse<T> {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  items: T[];
}

export interface PaginationPayload {
  page: number;
  perPage: number;
}
