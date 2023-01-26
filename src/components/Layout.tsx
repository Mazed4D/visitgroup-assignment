import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const TitleBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	width: 100vw;
	background: #f1f7ee;
	border-radius: 0 0 10px 10px;
	z-index: 2;
`;

const Title = styled.h1`
	text-align: center;
	margin: 1rem 0;
	font-size: 1.5rem;
`;

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	padding: 4rem 0;
`;

const FloatingButton = styled.button`
	position: fixed;
	bottom: 30px;
	right: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	margin-top: 0.5rem;
	gap: 0.4rem;
	background: #e7f59e;
	border-radius: 10px;
	padding: 1rem;
	border: none;
	cursor: pointer;
	transition: 200ms all ease-in;
	&:hover {
		background: #92aa83;
	}
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();
	return (
		<>
			<TitleBox>
				<Link to='/'>
					<Title>DummyAPI</Title>
				</Link>
			</TitleBox>

			<Main>{children}</Main>
			<FloatingButton onClick={() => navigate('/create')}>
				Add Post
			</FloatingButton>
		</>
	);
};

export default Layout;
