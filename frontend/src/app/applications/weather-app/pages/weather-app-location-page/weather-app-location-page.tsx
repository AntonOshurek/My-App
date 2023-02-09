import { useState, ChangeEvent } from "react";
//components
import { PopularLocaions, WeatherSearchLocations } from '../../components';
//utils
import { replaceNonEnglish } from "../../../../generic-utils/utils/replaceNonEnglish";
//variables
//variables
import { CITIES } from '../../variables/cities';
//styles
import './weather-app-location.scss';

const WeatherAppLocationPage = (): JSX.Element => {

  const [hintCity, setHintCity] = useState<string[] | null>(null);
	const [city, setCity] = useState<string>('')

  const handleCityInput = (event: ChangeEvent<HTMLInputElement>) => {
		setCity(event.target.value);
    // const cities = ["New York", "London", "Paris", "Berlin", "Tokyo", "Wroclaw"];
    const cityHint = CITIES.filter((city) => city.toLowerCase().includes(replaceNonEnglish(event.target.value).toLowerCase()));
    setHintCity(cityHint);

		if(event.target.value === '') {
			setHintCity(null);
		}
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
