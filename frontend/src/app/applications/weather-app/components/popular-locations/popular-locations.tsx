//styles
import './popular-locations.scss';

const PopularLocaions = (): JSX.Element => {
	return (
		<article className='popular-location'>
			<h3 className='popular-location__title'>Popular locations</h3>

			<ul className='popular-location__list'>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Warszawa
						<svg className='popular-location__button-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden='true' width="18" height="18" viewBox="0 0 24 24">
							<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"/>
						</svg>
					</button>
				</li>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Poznań
						<svg className='popular-location__button-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden='true' width="18" height="18" viewBox="0 0 24 24">
							<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"/>
						</svg>
					</button>
				</li>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Białystok
						<svg className='popular-location__button-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden='true' width="18" height="18" viewBox="0 0 24 24">
							<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"/>
						</svg>
					</button>
				</li>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Wrocław
						<svg className='popular-location__button-icon' xmlns="http://www.w3.org/2000/svg" aria-hidden='true' width="18" height="18" viewBox="0 0 24 24">
							<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"/>
						</svg>
					</button>
				</li>
			</ul>
		</article>
	);
};

export default PopularLocaions;
