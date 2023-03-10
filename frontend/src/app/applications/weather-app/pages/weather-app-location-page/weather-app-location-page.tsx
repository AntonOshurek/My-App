import { useState, ChangeEvent, MouseEvent } from "react";
//components
import { PopularLocaions, WeatherSearchLocations } from '../../components';
//services
import cityHintsService from "../../services/city-hints-service";
import locationService from "../../../../services/location-service";
//store
import { useAppDispatch } from "../../../../generic-utils/hooks/hooks";
import { setMyCityAction } from "../../../../store/slices/app-slice";
//styles
import './weather-app-location.scss';

const WeatherAppLocationPage = (): JSX.Element => {
	const dispatch = useAppDispatch();

  const [hintCity, setHintCity] = useState<string[] | null>(null);
	const [city, setCity] = useState<string>('')
	const [message, setMessage] = useState<string>('');

  const cityInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value.trim();
		setCity(value);

		if(value === '') {
			setHintCity(null);
		} else {
			const cityHint = cityHintsService.getHints(value);
			setHintCity(cityHint);
		};
  };

	const cityButtonHandler = (evt: MouseEvent<HTMLButtonElement>): void => {
		const cityButtonText = evt.currentTarget.textContent;
		if(cityButtonText) {
			setCity(cityButtonText.trim());
		} else {
			setCity('');
		};
	};

	const onSaveCityButtonHandler = (evt: MouseEvent<HTMLButtonElement>): void => {
		evt.preventDefault();

		if(city.length > 0) {
			locationService.isRealCity(city)
			.then((result) => {
				if(result === true) {
					dispatch(setMyCityAction({myCity: city}));
					setMessage('New city saved');
				} else {
					setMessage('We couldn\'t find your city. Please check the spelling of the city.')
				};
			})
			.catch(error => {
				setMessage('error' + error.message)
			});
		} else {
			setMessage('Please enter the name of your city or select it from the list.')
		};
	};

	return (
		<div className='weather-app-location-page'>
			<h1 className='visually-hidden'>change location for weather</h1>

			<main className='weather-app-location-page__main'>

				<section className='weather-app-location-page__application'>
					<h2 className='visually-hidden'>change location</h2>

					<PopularLocaions hintCity={hintCity} cityButtonHandler={cityButtonHandler}/>

					<WeatherSearchLocations
						cityInputHandler={cityInputHandler}
						city={city}
						onSaveCityButtonHandler={onSaveCityButtonHandler}
						message={message}
					/>

				</section>

			</main>
		</div>
	);
};

export default WeatherAppLocationPage;
