export interface IUserPreviewResponse {
	id: string;
	title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
	firstName: string;
	lastName: string;
	picture: string;
}
