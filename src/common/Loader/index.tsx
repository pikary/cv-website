import React from 'react';
import './styles.scss';
import { HiOutlineRefresh } from 'react-icons/hi';

interface LoaderProps {
	color: string;
	size: number;
	className: string;
}
const Loader: React.FC<LoaderProps> = ({ color, size, className }) => {
	return (
		<div className={`loader ${className}`}>
			<HiOutlineRefresh size={size || 20}></HiOutlineRefresh>
		</div>
	);
};

export default Loader;
