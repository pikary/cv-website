import React, { useState } from 'react';
import PhotoBox from '../PhotoBox';
import Navigation from '../Navigation';
import Button from '../../common/Button';
import { IoMenu } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';
import './styles.scss';

interface PanelProps {
	isShown: boolean;
	toggleShow: () => void;
}
const Panel: React.FC<PanelProps> = (props) => {
	const { isShown, toggleShow } = props;

	return (
		<aside className={`panel ${isShown && 'active'}`}>
			<div className={`panel__content`}>
				<PhotoBox
					name='Nurlan Baitassov'
					avatar='http://avatars0.githubusercontent.com/u/246180?v=4'
					className='mini'
				></PhotoBox>
				<Navigation></Navigation>
				<Button
					className='panel__content__back'
					onClick={() => {
						console.log('');
					}}
				>
					<IoIosArrowBack size={18}></IoIosArrowBack>
					<p>Go back</p>
				</Button>

				<Button className='panel__content__burger' onClick={toggleShow}>
					<IoMenu size={18}></IoMenu>
				</Button>
			</div>
		</aside>
	);
};

export default Panel;
