import { useQuery } from 'react-query';

import Comment from './Comment';
import { getAllComments } from '../api/commentApi';

const CommentList = ({ id }: { id: string }) => {
	const { data, isLoading } = useQuery(['comments', { id }], () =>
		getAllComments(id as string)
	);

	return (
		<>
			{isLoading && <></>}
			{!isLoading &&
				data?.data.map((val) => <Comment comment={val} key={val.id} />)}
		</>
	);
};

export default CommentList;
