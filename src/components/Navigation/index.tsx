import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaSuitcase, FaUser } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';
import { IoDiamondOutline } from 'react-icons/io5';
import { BiSolidNavigation } from 'react-icons/bi';
import { BsChat } from 'react-icons/bs';

import './styles.scss';

const Navigation: React.FC = () => {
	const [activeLink, setActiveLink] = useState('aboutme');
	const onNavigate = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	useEffect(() => {
		const sections = document.querySelectorAll('.box');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveLink(entry.target.id);
					}
				});
			},
			{ threshold: 1 } // Adjust this threshold as needed
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);
	return (
		<ul className='navigation'>
			<li
				className={`navigation__item ${activeLink === 'aboutme' ? 'active' : ''}`}
				onClick={() => {
					onNavigate('aboutme');
				}}
			>
				<FaUser />
				<p className='navigation__item-link'>About me</p>
			</li>
			<li
				className={`navigation__item ${activeLink === 'education' ? 'active' : ''}`}
				onClick={() => {
					onNavigate('education');
				}}
			>
				<FaGraduationCap />
				<p className='navigation__item-link'>Education</p>
			</li>
			<li
				className={`navigation__item ${activeLink === 'experience' ? 'active' : ''}`}
				onClick={() => {
					onNavigate('experience');
				}}
			>
				<RiPencilFill />
				<p className='navigation__item-link'>Experience</p>
			</li>
			<li
				className={`navigation__item ${activeLink === 'skills' ? 'active' : ''}`}
				onClick={() => {
					onNavigate('skills');
				}}
			>
				<IoDiamondOutline />
				<p className='navigation__item-link'>Skills</p>
			</li>
			<li
				className={`navigation__item ${activeLink === 'portfolio' ? 'active' : ''}`}
				onClick={() => {
					onNavigate('portfolio');
				}}
			>
				<FaSuitcase />
				<p className='navigation__item-link'>Portfolio</p>
			</li>
			<li
				className={`navigation__item ${activeLink === 'contacts' ? 'active' : ''}`}
				onClick={() => {
					onNavigate('contacts');
				}}
			>
				<BiSolidNavigation />
				<p className='navigation__item-link'>Contacts</p>
			</li>
			<li
				className={`navigation__item ${activeLink === 'feedbacks' ? 'active' : ''}`}
				onClick={() => {
					onNavigate('feedbacks');
				}}
			>
				<BsChat />
				<p className='navigation__item-link'>Feedbacks</p>
			</li>
		</ul>
	);
};

export default Navigation;
