import React from 'react';
import { FaPhoneAlt, FaSkype, FaTwitter, FaFacebook } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import './styles.scss';

const Contacts: React.FC = () => {
	return (
		<article className='address'>
			<div className='address__item'>
				<FaPhoneAlt size={30}></FaPhoneAlt>
				<div className='address__item__info'>
					<a
						className='address__item__info-header'
						href='tel:+77054753526'
					>
						<b>+7-(705)-47-535-26</b>
					</a>
				</div>
			</div>
			<div className='address__item'>
				<IoIosMail size={30}></IoIosMail>
				<div className='address__item__info'>
					<a
						className='address__item__info-header'
						href='mailto:baitassovnurlan1507@gmail.com'
					>
						<b>baitassovnurlan1507@gmail.com</b>
					</a>
				</div>
			</div>
			<div className='address__item'>
				<FaTwitter size={30}></FaTwitter>
				<div className='address__item__info'>
					<a is-title='true' className='address__item__info-header'>
						<b>Twitter</b>
					</a>
					<a
						href='https://twitter.com/wordpress'
						className='address__item__info-value'
					>
						https://twitter.com/wordpress
					</a>
				</div>
			</div>
			<div className='address__item'>
				<FaFacebook size={30}></FaFacebook>
				<div className='address__item__info'>
					<a is-title='true' className='address__item__info-header'>
						<b>Facebook</b>
					</a>
					<a
						href='https://www.facebook.com/facebook'
						className='address__item__info-value'
					>
						https://www.facebook.com/facebook/nurlan1507
					</a>
				</div>
			</div>
			<div className='address__item'>
				<FaSkype size={30}></FaSkype>
				<div className='address__item__info'>
					<a is-title='true' className='address__item__info-header'>
						<b>Skype</b>
					</a>
					<a
						href='skype:nurik123513?chat'
						className='address__item__info-value'
					>
						nurik123513
					</a>
				</div>
			</div>
		</article>
	);
};

export default Contacts;
