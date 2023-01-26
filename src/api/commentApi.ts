import dummyApi from './dummyApi';
import { ICommentCreate } from './models/commentCreate';
import { ICommentResponse } from './models/comment';
import { IListResponse } from './models/list';

export const getAllComments = async (id: string) => {
	const res = await dummyApi.get<IListResponse<ICommentResponse>>(
		`post/${id}/comment?limit=50`
	);
	return res.data;
};

export const createComment = async (comment: ICommentCreate) => {
	const res = await dummyApi.post<ICommentResponse>(`comment/create`, comment);
	return res.data;
};
