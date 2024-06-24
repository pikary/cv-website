import React, { useState, useRef, useEffect } from 'react';
import PortfolioItem from './components/PortfolioItem';
import UI_IMG from '../../assets/ui.png';
import CODE_IMG from '../../assets/code.png';
import { motion } from 'framer-motion';
import Isotope from 'isotope-layout';

import './styles.scss';

const data = [
	{
		title: 'Some text',
		description:
			'Donec pede justo, fringilla vel, aliquet nec,vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
		link: 'View Source',
		type: 'UI',
		img: UI_IMG,
	},
	{
		title: 'Some text',
		description:
			'Donec pede justo, fringilla vel, aliquet nec,vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
		link: 'View Source',
		type: 'UI',
		img: UI_IMG,
	},
	{
		title: 'Some text',
		description:
			'Donec pede justo, fringilla vel, aliquet nec,vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
		link: 'View Source',
		type: 'Code',
		img: CODE_IMG,
	},
	{
		title: 'Some text',
		description:
			'Donec pede justo, fringilla vel, aliquet nec,vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
		link: 'View Source',
		type: 'Code',
		img: CODE_IMG,
	},
];
type PortfolioType = 'Code' | 'UI' | 'All';

const Portfolio: React.FC = () => {
	const [activeTab, setActiveTab] = useState<PortfolioType>('All');
	const portfolioItems = useRef<Isotope | null>();
	const onTabPressed = (tab: PortfolioType) => {
		setActiveTab(tab);
	};
	useEffect(() => {
		portfolioItems.current = new Isotope('.portfolio__content', {
			itemSelector: '.portfolio-item',
			layoutMode: 'fitRows',
		});
		return () => portfolioItems.current?.destroy();
	}, []);

	useEffect(() => {
		if (activeTab === 'All')
			portfolioItems.current?.arrange({ filter: `*` });
		else portfolioItems.current?.arrange({ filter: `.${activeTab}` });
	}, [activeTab]);

	return (
		<div className='portfolio'>
			<div className='portfolio__filter'>
				<button
					onClick={() => {
						onTabPressed('All');
					}}
					className={`portfolio__filter-btn ${activeTab == 'All' && 'active'}`}
				>
					All
				</button>
				<button
					onClick={() => {
						onTabPressed('UI');
					}}
					className={`portfolio__filter-btn ${activeTab == 'UI' && 'active'}`}
				>
					Ui
				</button>
				<button
					onClick={() => {
						onTabPressed('Code');
					}}
					className={`portfolio__filter-btn ${activeTab == 'Code' && 'active'}`}
				>
					Code
				</button>
			</div>
			<div className='portfolio__content'>
				{data.map((item, index) => (
					<PortfolioItem
						key={index}
						ind={index}
						title={item.title}
						description={item.description}
						link={item.link}
						img={item.img}
						className={`portfolio-item ${item.type}`}
					></PortfolioItem>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
