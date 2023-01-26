import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { memo } from 'react';

import { IPostPreviewResponse } from '../api/models/postPreview';
import { IPostResponse } from '../api/models/post';

const PostBox = styled.div`
	display: flex;
	flex-direction: column;
	background: #b0bea9;
	border-radius: 10px;
	padding: 1rem;
	width: 30rem;
	max-width: 90vw;
`;

const Header = styled.div`
	display: flex;
	margin-bottom: 1rem;
	gap: 0.4rem;
	background: #f1f7ee;
	border-radius: 10px;
	padding: 1rem;
`;

const Stack = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Pfp = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	margin-right: 0.2rem;
`;

const Text = styled.text`
	background: #e0edc5;
	border-radius: 10px;
	padding: 1rem;
	margin-bottom: 1rem;
`;

const Img = styled.img`
	border-radius: 10px;
	margin-bottom: 1rem;
`;

const PrImg = styled.img`
	border-radius: 10px;
	margin-bottom: 1rem;
	max-height: 10rem;
	object-fit: cover;
`;

const Tags = styled.div`
	background-color: #e7f59e;
	border-radius: 10px;
	padding: 1rem;
`;

const Likes = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: flex-end;
	align-items: center;
	padding-left: 1rem;
	font-size: 1.5rem;
`;

const Button = styled.button`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	background: #f1f7ee;
	background: #92aa83;
	border-radius: 10px;
	padding: 1rem;
	border: none;
	cursor: pointer;
	transition: 200ms all ease-in;
	&:hover {
		background: #f1f7ee;
	}
`;

const PostContent = ({
	post,
	preview = false,
}: {
	post: IPostPreviewResponse | IPostResponse;
	preview?: boolean;
}) => {
	const title =
		post.owner.title + ' ' + post.owner.firstName + ' ' + post.owner.lastName;
	const date = new Date(post.publishDate).toLocaleString();
	const tags = post.tags.join(', ');

	return (
		<PostBox>
			<Header>
				<Pfp src={post.owner.picture} alt={title} />
				<Stack>
					<strong>{title}</strong>
					<p>{date}</p>
				</Stack>
				<Likes>
					<p>{post.likes} 👍</p>
				</Likes>

				{!preview && (
					<Link to={`/${post.id}/edit`}>
						<Button>Edit</Button>
					</Link>
				)}
			</Header>
			{!preview && <Img src={post.image} alt={post.text} />}
			{preview && <PrImg src={post.image} alt={post.text} />}
			<Text>{post.text}</Text>
			<Tags>{tags}</Tags>
		</PostBox>
	);
};

export default memo(PostContent);
