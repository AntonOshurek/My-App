//styles
import './weather-search-locations.scss';

const WeatherSearchLocations = (): JSX.Element => {
	return (
		<form className='weather-search-location'>
			<label className='weather-search-location__label'>
				<span className='weather-search-location__placeholder'>Search location</span>
				<input className='weather-search-location__input' type="text" placeholder='Poznań' />
			</label>

			<button className='weather-search-location__submit' type='button'>save location</button>
		</form>
	);
};

export default WeatherSearchLocations;
