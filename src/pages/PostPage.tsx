import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import AddCommment from '../components/AddComment';
import CommentList from '../components/CommentList';
import FullPost from '../components/FullPost';
import Layout from '../components/Layout';
import Spinner from '../components/Loader';
import { getSpecificPost } from '../api/postApi';

const Post = () => {
	const { id } = useParams();
	const { data, isLoading } = useQuery(['post', { id }], () =>
		getSpecificPost(id as string)
	);

	return (
		<Layout>
			{isLoading && <Spinner />}
			{!isLoading && data !== undefined && (
				<>
					<FullPost post={data} />
					<AddCommment id={id as string} />
					<CommentList id={id as string} />
				</>
			)}
		</Layout>
	);
};

export default Post;
