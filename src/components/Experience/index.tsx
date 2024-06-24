import React from 'react';
import './styles.scss';

const data = [
	{
		date: '2013-2014',
		info: {
			company: 'Google',
			job: 'Front-end developer / php programmer',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
		},
	},
	{
		date: '2012',
		info: {
			company: 'Twitter',
			job: 'Web developer',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
		},
	},
];
const Expirience: React.FC = () => {
	return (
		<article className='experience'>
			{data.map((item, ind) => (
				<div className='experience__job' key={ind}>
					<div className='experience__job__first'>
						<h5 className='experience__job__first-header'>
							{item.info.company}
						</h5>
						<p className='experience__job__first-date'>
							{item.date}
						</p>
					</div>
					<div className='experience__job__second'>
						<h5 className='experience__job__second-header'>
							{item.info.job}
						</h5>
						<p>{item.info.description}</p>
					</div>
				</div>
			))}
			<div></div>
		</article>
	);
};

export default Expirience;
