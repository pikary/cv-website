import React, { useEffect, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../store';
import './styles.scss';
import { fetchEducations } from '../../store/education/api';
import Loader from '../../common/Loader';
const Timeline: React.FC = () => {
	// const [data, setData] = useState<Education[]>([]); test husky3
	const { isLoading, data, error } = useTypedSelector(
		(state) => state.education
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		const fetchData = async () => {
			await dispatch(fetchEducations());
		};
		fetchData();
	}, [dispatch]);
	return (
		<div className='education'>
			{data.length > 0 &&
				data.map((timelime, index) => (
					<div key={index} className='education__timeline'>
						<div className='education__timeline__time'>
							<div className='education__timeline__time-content'>
								{index == 0 && (
									<div className='education__timeline__time-content__first-indicator'></div>
								)}
								<p>
									<b>{timelime.date}</b>
								</p>
								<div className='education__timeline__time-content__indicator'></div>
							</div>
						</div>
						<div className='education__timeline__description'>
							<h4>{timelime.title}</h4>
							<p>{timelime.text}</p>
							<div className='education__timeline__description-arrow'></div>
						</div>
					</div>
				))}
			{isLoading && (
				<Loader
					color={'green'}
					size={50}
					className='education__loader'
				></Loader>
			)}
			{error && <p className='education__error-msg'>{error}</p>}
		</div>
	);
};

export default Timeline;
