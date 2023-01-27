import './popular-locations.scss';

const PopularLocaions = (): JSX.Element => {
	return (
		<article className='popular-location'>
			<h3 className='popular-location__title'>Popular locations</h3>

			<ul className='popular-location__list'>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Warszawa</button>
				</li>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Poznań</button>
				</li>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Białystok</button>
				</li>
				<li className='popular-location__item'>
					<button className='popular-location__location-button'>Wrocław</button>
				</li>
			</ul>
		</article>
	);
};

export default PopularLocaions;
