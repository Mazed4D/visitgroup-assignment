import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Layout from '../components/Layout';
import PostForm from '../components/PostForm';
import Spinner from '../components/Loader';
import { getSpecificPost } from '../api/postApi';

const EditPost = () => {
	const { id } = useParams();
	const { data, isLoading } = useQuery(['post', { id }], () =>
		getSpecificPost(id as string)
	);

	return (
		<Layout>
			{isLoading && <Spinner />}
			{!isLoading && data !== undefined && <PostForm post={data} />}
		</Layout>
	);
};

export default EditPost;
