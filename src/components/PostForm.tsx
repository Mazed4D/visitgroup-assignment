// Ideally the form should be rewritten using Formik to utilize validation

import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Spinner from './Loader';
import { IPostResponse } from '../api/models/post';
import { createPost, editPost } from '../api/postApi';

const CommentBox = styled.div`
	display: flex;
	flex-direction: column;
	background: #b0bea9;
	border-radius: 10px;
	padding: 1rem;
	width: 30rem;
	max-width: 90vw;
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
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
	margin-bottom: 1rem;
`;

const PostForm = ({ post }: { post?: IPostResponse }) => {
	const [text, setText] = useState(post?.text ?? '');
	const [image, setImage] = useState(post?.image ?? '');
	const [tags, setTags] = useState(post?.tags?.join(',') ?? '');
	const navigate = useNavigate();

	const mutation = useMutation(
		() =>
			post?.id
				? editPost(
						{
							text,
							image,
							tags: tags.split(','),
							likes: 0,
						},
						post?.id
				  )
				: createPost({
						text,
						image,
						tags: tags.split(','),
						likes: 0,
						owner: '60d0fe4f5311236168a10a1f',
				  }),
		{
			onSuccess: (data) => navigate(`/${data.id}`),
		}
	);

	const handleSubmit = () => mutation.mutate();

	const isImgValid = /(https?:\/\/.*\.(?:png|jpg))/i.test(image);
	const disabled = text.length < 1 || tags.length < 1 || !isImgValid;

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
						placeholder='Add the URL to your image here...'
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
					<Text
						placeholder='Type your post text here...'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<Text
						placeholder='Type your tags here, seperate them with a comma (dog,labrador)...'
						value={tags}
						onChange={(e) => setTags(e.target.value)}
					/>
					<Button onClick={handleSubmit} disabled={disabled}>
						{post?.id ? 'Edit Post' : 'Add Post'}
					</Button>
				</>
			)}
		</CommentBox>
	);
};

export default PostForm;
