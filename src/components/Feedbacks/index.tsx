import React from 'react';
import { data } from './data';
import Info from '../Info';
import './styles.scss';

const Feedbacks: React.FC = () => {
	return (
		<article className='feedback-list'>
			{data.map((feedback, index) => (
				<div className='feedback-list__item' key={index}>
					<Info text={feedback.feedback}></Info>
					<div className='feedback-list__item__reporter'>
						<img
							width={50}
							height={50}
							src={feedback.reporter.photoUrl}
							alt='ava'
						/>
						<p className='feedback-list__item__reporter__name'>
							{feedback.reporter.name} ,&nbsp;
							<a href=''>{feedback.reporter.citeUrl}</a>
						</p>
					</div>
				</div>
			))}
		</article>
	);
};

export default Feedbacks;
