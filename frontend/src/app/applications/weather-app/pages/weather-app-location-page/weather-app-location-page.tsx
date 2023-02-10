import { useState, ChangeEvent } from "react";
//components
import { PopularLocaions, WeatherSearchLocations } from '../../components';
//services
import cityHints from "../../services/city-hints";
//styles
import './weather-app-location.scss';

const WeatherAppLocationPage = (): JSX.Element => {

  const [hintCity, setHintCity] = useState<string[] | null>(null);
	const [city, setCity] = useState<string>('')

  const handleCityInput = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.trim();
		if(value === '') {
			setHintCity(null);
		} else {
			setCity(value);
			const cityHint = cityHints.getHints(value);
			setHintCity(cityHint);
		};
  };

	return (
		<div className='weather-app-location-page'>
			<h1 className='visually-hidden'>change location for weather</h1>

			<main className='weather-app-location-page__main'>

				<section className='weather-app-location-page__application container'>
					<h2 className='visually-hidden'>change location</h2>
					<PopularLocaions hintCity={hintCity}/>
					<WeatherSearchLocations handleCityInput={handleCityInput}/>
				</section>

			</main>
		</div>
	);
};

export default WeatherAppLocationPage;
