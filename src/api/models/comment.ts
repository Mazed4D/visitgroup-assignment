import { IUserPreviewResponse } from './userPreview';
export interface ICommentResponse {
	id: string;
	message: string;
	owner: IUserPreviewResponse;
	post: string;
	publishDate: string;
}
