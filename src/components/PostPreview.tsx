import { Link } from 'react-router-dom';
import { memo } from 'react';

import PostContent from './PostContent';
import { IPostPreviewResponse } from '../api/models/postPreview';

const PostPreview = ({ post }: { post: IPostPreviewResponse }) => {
	return (
		<Link to={`/${post.id}`}>
			<PostContent post={post} preview={true} />
		</Link>
	);
};

export default memo(PostPreview);
