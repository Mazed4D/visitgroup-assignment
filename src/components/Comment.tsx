import styled from 'styled-components';
import { memo } from 'react';

import { ICommentResponse } from '../api/models/comment';

const CommentBox = styled.div`
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
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 0.2rem;
`;

const Text = styled.text`
	background: #e0edc5;
	border-radius: 10px;
	padding: 1rem;
`;

const Comment = ({ comment }: { comment: ICommentResponse }) => {
	const title =
		comment.owner.title +
		' ' +
		comment.owner.firstName +
		' ' +
		comment.owner.lastName;
	const date = new Date(comment.publishDate).toLocaleString();
	return (
		<CommentBox>
			<Header>
				<Pfp src={comment.owner.picture} alt={title} />
				<Stack>
					<strong>{title}</strong>
					<p>{date}</p>
				</Stack>
			</Header>
			<Text>{comment.message}</Text>
		</CommentBox>
	);
};

export default memo(Comment);
