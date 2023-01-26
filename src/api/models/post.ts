import { IPostPreviewResponse } from './postPreview';
import { IUserPreviewResponse } from './userPreview';
export interface IPostResponse extends IPostPreviewResponse {
	link: string;
	owner: IUserPreviewResponse;
}
