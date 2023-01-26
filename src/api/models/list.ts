export interface IListResponse<T> {
	data: Array<T>;
	total: number;
	page: number;
	limit: number;
}
