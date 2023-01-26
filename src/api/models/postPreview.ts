import { IUserPreviewResponse } from './userPreview';
export interface IPostPreviewResponse {
	id: string;
	text: string;
	image: string;
	likes: number;
	tags: string[];
	publishDate: string;
	owner: IUserPreviewResponse;
}
