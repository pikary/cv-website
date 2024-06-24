import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import PhotoBox from '../../components/PhotoBox';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const onKnowMoreClicked = () => {
		navigate('/inner');
	};
	return (
		<div className={'home'}>
			<PhotoBox
				name='Nurlan Baitassov'
				title='Programmer. Creative. Innovator'
				description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
				avatar='http://avatars0.githubusercontent.com/u/246180?v=4'
			/>
			<Button type='button' onClick={onKnowMoreClicked}>
				Know more
			</Button>
		</div>
	);
};
export default Home;
