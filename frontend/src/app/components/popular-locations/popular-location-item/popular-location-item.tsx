import { MouseEvent } from 'react';
//styles
import './popular-location-item.scss';

interface IPopularLocationItemPropsType {
	cityButtonHandler: (evt: MouseEvent<HTMLButtonElement>) => void,
	city: string,
};

const PopularLocationItem = ({ city, cityButtonHandler }: IPopularLocationItemPropsType): JSX.Element => {
	return (
		<li className='popular-location__item'>
			<button className='popular-location__location-button'
				onClick={cityButtonHandler}
			>{city}
				<svg className='popular-location__button-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden='true' width="18" height="18" viewBox="0 0 24 24">
					<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7" />
				</svg>
			</button>
		</li>
	);
};

export default PopularLocationItem;
