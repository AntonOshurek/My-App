import { useState, ChangeEvent, MouseEvent } from "react";
//components
import { PopularLocaions, WeatherSearchLocations } from '../../components';
//services
import cityHints from "../../services/city-hints";
import locationService from "../../services/location-service";
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

	const onSaveCityButtonHandler = (): void => {

		if(city.trim().length > 0) {
			locationService.isARealCity(city)
			.then((result) => {
				console.log(result);
			})
			.catch(error => {
				console.log(error);
			});
		} else {
			console.log('enter a city')
		}

		//check it is a real city?
		//if true, save city to global store
		//else show error for user
	};

	return (
		<div className='weather-app-location-page'>
			<h1 className='visually-hidden'>change location for weather</h1>

			<main className='weather-app-location-page__main'>

				<section className='weather-app-location-page__application container'>
					<h2 className='visually-hidden'>change location</h2>

					<PopularLocaions hintCity={hintCity} cityButtonHandler={cityButtonHandler}/>

					<WeatherSearchLocations
						cityInputHandler={cityInputHandler}
						city={city}
						onSaveCityButtonHandler={onSaveCityButtonHandler}
					/>

				</section>

			</main>
		</div>
	);
};

export default WeatherAppLocationPage;
