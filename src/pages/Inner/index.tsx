import React, { useState } from 'react';
import Panel from '../../components/Panel';
import Box from '../../components/Box';
import Expirience from '../../components/Experience';
import './styles.scss';
import Timeline from '../../components/Timeline';
import Portfolio from '../../components/Portfolio';
import Contacts from '../../components/Contacts';
import Feedbacks from '../../components/Feedbacks';

import { IoIosArrowUp } from 'react-icons/io';
import Button from '../../common/Button';
import Skills from '../../components/Skills';
const Inner: React.FC = () => {
	const [isShown, setIsSown] = useState(true);
	const toggleShow = () => {
		setIsSown(!isShown);
	};
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<div className='inner'>
			<Panel isShown={isShown} toggleShow={toggleShow}></Panel>
			<main className={`${isShown && 'active'}`}>
				<Box id='aboutme' title='About me'>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit. Aenean commodo ligula eget dolor. Aenean massa.
						Cum sociis natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus. Donec quam felis,
						ultricies nec, pellentesque eu, pretium quis, sem. Nulla
						consequat massa quis enim. Donec pede justo, fringilla
						vel, aliquet nec, vulputate eget, arcu. In enim justo,
						rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
						dictum felis eu pede mollis pretium. Integer tincidunt.
						Cras dapibus. Vivamus elementum semper nisi. Aenean
						vulputate eleifend tellus. Aenean leo ligula, porttitor
						eu, consequat vitae, eleifend ac, enim. Aliquam lorem
						ante, dapibus in, viverra quis, feugiat a, tellus.
						Phasellus viverra nulla ut metus varius laoreet. Quisque
						rutrum. Aenean imperdiet. Etiam ultricies nisi vel
						augue. Curabitur ullamcorper ultricies nisi. Nam eget
						dui. Etiam rhoncus. Maecenas tempus, tellus eget
						condimentum rhoncus, sem quam semper libero, sit amet
						adipiscing sem neque
					</p>
				</Box>
				<Box id='education' title='Education'>
					<Timeline></Timeline>
				</Box>
				<Box id='experience' title='Experience'>
					<Expirience></Expirience>
				</Box>
				<Box id='skills' title='Skills'>
					<Skills></Skills>
				</Box>
				<Box id='portfolio' title='Portfolio'>
					<Portfolio></Portfolio>
				</Box>
				<Box id='contacts' title='Address'>
					<Contacts></Contacts>
				</Box>
				<Box id='feedbacks' title='Feedbacks'>
					<Feedbacks></Feedbacks>
				</Box>
				<Button className='up-btn' onClick={scrollToTop}>
					<IoIosArrowUp size={18}></IoIosArrowUp>
				</Button>
			</main>
		</div>
	);
};

export default Inner;
