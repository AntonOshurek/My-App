import { useState, useEffect } from 'react';
//styles
import './popular-locations.scss';

interface IPopularLocaionsPropsType {
	hintCity: string[]
}

const PopularLocaions = ({ hintCity }: IPopularLocaionsPropsType): JSX.Element => {

	const [cities, setCities] = useState<string[]>(hintCity)

	const defaultPopularCityes = ["New York", "London", "Paris", "Berlin", "Tokyo", "Wroclaw"]


	useEffect(() => {
		if(hintCity.length < 2) {
			setCities(defaultPopularCityes)
		} else {
			setCities(hintCity);
		};
	}, [hintCity])


	return (
		<article className='popular-location'>
			<h3 className='popular-location__title'>Popular locations</h3>

			<ul className='popular-location__list'>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Warszawa
						<svg className='popular-location__button-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden='true' width="18" height="18" viewBox="0 0 24 24">
							<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"/>
						</svg>
					</button>
				</li>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Poznań
						<svg className='popular-location__button-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden='true' width="18" height="18" viewBox="0 0 24 24">
							<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"/>
						</svg>
					</button>
				</li>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Białystok
						<svg className='popular-location__button-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden='true' width="18" height="18" viewBox="0 0 24 24">
							<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"/>
						</svg>
					</button>
				</li>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Wrocław
						<svg className='popular-location__button-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden='true' width="18" height="18" viewBox="0 0 24 24">
							<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"/>
						</svg>
					</button>
				</li>
			</ul>
		</article>
	);
};

export default PopularLocaions;
