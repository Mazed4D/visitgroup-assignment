import dummyApi from './dummyApi';
import { IListResponse } from './models/list';
import { IPostCreate } from './models/postCreate';
import { IPostPreviewResponse } from './models/postPreview';
import { IPostResponse } from './models/post';

export const getAllPosts = async ({ pageParam = 0 }) => {
	const res = await dummyApi.get<IListResponse<IPostPreviewResponse>>('post', {
		params: { page: pageParam },
	});
	return res.data;
};

export const getSpecificPost = async (id: string) => {
	const res = await dummyApi.get<IPostResponse>(`post/${id}`);
	return res.data;
};

export const createPost = async (post: IPostCreate) => {
	const res = await dummyApi.post<IPostResponse>(`post/create`, post);
	return res.data;
};

export const editPost = async (post: Partial<IPostCreate>, id: string) => {
	const res = await dummyApi.put<IPostResponse>(`post/${id}`, post);
	return res.data;
};
