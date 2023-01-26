import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import PostPreview from '../components/PostPreview';
import { getAllPosts } from '../api/postApi';

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	margin-top: 0.5rem;
	gap: 0.4rem;
	background: #f1f7ee;
	border-radius: 10px;
	padding: 1rem;
	border: none;
	cursor: pointer;
	transition: 200ms all ease-in;
	&:hover {
		background: #92aa83;
	}
`;

const Home = () => {
	const { data, fetchNextPage, isFetchingNextPage, isLoading, hasNextPage } =
		useInfiniteQuery('posts', getAllPosts, {
			getNextPageParam: (lastPage, pages) => lastPage.page + 1,
			keepPreviousData: true,
		});

	return (
		<Layout>
			{data?.pages.map((val) => {
				return val.data.map((post) => (
					<PostPreview post={post} key={post.id} />
				));
			})}
			{(isFetchingNextPage || isLoading) && <Loader />}
			{!isFetchingNextPage && hasNextPage && (
				<Button onClick={() => fetchNextPage()}>Load more</Button>
			)}
		</Layout>
	);
};

export default Home;
