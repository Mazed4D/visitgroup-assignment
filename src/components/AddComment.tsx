import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import { useState } from 'react';

import Spinner from './Loader';
import { createComment } from '../api/commentApi';

const CommentBox = styled.div`
	display: flex;
	flex-direction: column;
	background: #b0bea9;
	border-radius: 10px;
	padding: 1rem;
	width: 30rem;
	max-width: 80vw;
`;

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

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items:'center
`;

const Text = styled.input`
	background: #e0edc5;
	border-radius: 10px;
	padding: 1rem;
	border: none;
`;

const AddComment = ({ id }: { id: string }) => {
	const [comment, setComment] = useState('');
	const queryClient = useQueryClient();
	const mutation = useMutation(
		() =>
			createComment({
				message: comment,
				post: id,
				owner: '60d0fe4f5311236168a10a1f',
			}),
		{
			onMutate: () => setComment(''),
			onSuccess: () => {
				queryClient.invalidateQueries(['comments', { id }]);
			},
		}
	);

	const handleSubmit = () => {
		mutation.mutate();
	};

	return (
		<CommentBox>
			{mutation.isLoading && (
				<Center>
					<Spinner />
				</Center>
			)}
			{!mutation.isLoading && (
				<>
					<Text
						placeholder='Type your comment here...'
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<Button onClick={handleSubmit}>Add Comment</Button>
				</>
			)}
		</CommentBox>
	);
};

export default AddComment;
