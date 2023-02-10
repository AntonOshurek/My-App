import { useState, ChangeEvent, MouseEvent } from "react";
//components
import { PopularLocaions, WeatherSearchLocations } from '../../components';
//services
import cityHints from "../../services/city-hints";
//styles
import './weather-app-location.scss';

const WeatherAppLocationPage = (): JSX.Element => {

  const [hintCity, setHintCity] = useState<string[] | null>(null);
	const [city, setCity] = useState<string>('')

  const cityInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value.trim();
		setCity(value);

		if(value === '') {
			setHintCity(null);
		} else {
			const cityHint = cityHints.getHints(value);
			setHintCity(cityHint);
		};
  };

	const cityButtonHandler = (evt: MouseEvent<HTMLButtonElement>): void => {
		setCity(evt.currentTarget.textContent || '');
	};

	return (
		<div className='weather-app-location-page'>
			<h1 className='visually-hidden'>change location for weather</h1>

			<main className='weather-app-location-page__main'>

				<section className='weather-app-location-page__application container'>
					<h2 className='visually-hidden'>change location</h2>
					<PopularLocaions hintCity={hintCity} cityButtonHandler={cityButtonHandler}/>
					<WeatherSearchLocations cityInputHandler={cityInputHandler} city={city}/>
				</section>

			</main>
		</div>
	);
};

export default WeatherAppLocationPage;
