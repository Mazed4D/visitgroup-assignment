import { memo } from 'react';

import PostContent from './PostContent';
import { IPostResponse } from '../api/models/post';

const FullPost = ({ post }: { post: IPostResponse }) => {
	return <PostContent post={post} />;
};

export default memo(FullPost);
