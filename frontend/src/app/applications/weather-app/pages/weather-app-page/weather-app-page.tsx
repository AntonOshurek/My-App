import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import { CurrentWeather, WeatherControls, WeatherFullInfo, ChoiceLocationModal } from '../../components/';
//api
import weatherApi from '../../api/weather-api';
//services
import locationService from '../../../../services/location-service';
//utils
import { compareDates } from '../../../../generic-utils/utils/date-utils';
//store
import { useAppDispatch, useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetMyCityState, SelectorGetLanguageState } from '../../../../store/selectors/selectors';
import { setMyCityAction } from '../../../../store/slices/app-slice';
//types
import type { AdaptedDaysDataType, IAdaptedOneDayDataType } from '../../types/weather-adapted-data-types';
//styles
import './weather-app-page.scss';

const WeatherAppPage = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const myCity = useAppSelector(SelectorGetMyCityState);
	const myLanguage = useAppSelector(SelectorGetLanguageState);

	const { location, day } = useParams();

	const [daysWeather, setDaysWeather] = useState<AdaptedDaysDataType | null>(null);
	const [currentWeather, setCurrentWeather] = useState<IAdaptedOneDayDataType | null>(null);
	const [cityFilled, setCityFilled] = useState<boolean>(true);

	// useEffect(() => {
	// 	if((location && location.length !== 0) && (location !== myCity)) {
	// 		dispatch(setMyCityAction({myCity: location}));
	// 		//show modal for change your city "do you want change your city to - city name
	// 	} else if (!location && !myCity) {
	// 		locationService.getCurrentLocation()
	// 		.then((result) => {
	// 			dispatch(setMyCityAction({myCity: result}));
	// 		})
	// 		.catch(error => {
	// 			dispatch(setMyCityAction({myCity: ''}));
	// 			console.log(error)
	// 			//if message === User denied Geolocation show error notification for client!
	// 			//user has denied access to location data - message
	// 		});
	// 	};
	// }, []);

	//проверка дня из url и назначение данных в currentWeather
	useEffect(() => {
		if (daysWeather && day && day.length !== 0) {
			daysWeather.map(item => {
				if (compareDates(item.date, day)) {
					setCurrentWeather(item);
				};
			});
		} else if (daysWeather) {
			setCurrentWeather(daysWeather[0]);
		};
	}, [day, daysWeather]);

	useEffect(() => {
		console.log(myCity)
		if (myCity || myCity.length) {
			setCityFilled(true);

			weatherApi.getWeather(myCity, myLanguage)
				.then((response) => {
					setDaysWeather(response);
				})
				.catch((error) => {
					if (error instanceof Error) {
						if (error.message.search('City error') >= 0) {
							console.log(error.message);
						}
					} else {
						console.log('somthing wrong...');
					};
				});
		} else {
			//do something.... without location
			//show modal for choise city

			setCityFilled(false);
		}
	}, [myCity]);


	return (
		<div className='weather-app-page'>
			<h1 className='visually-hidden'>title</h1>

			{/* {
				cityFilled ?  null : <ChoiceLocationModal/>
			} */}

			<main className='weather-app-page__main'>

				<section className='weather-app-page__application container'>
					<h2 className='visually-hidden'>Weather</h2>

					<CurrentWeather
						currentWeather={currentWeather ? currentWeather : null}
					/>
					<WeatherControls
						currentWeather={currentWeather ? currentWeather : null}
						daysWeather={daysWeather ? daysWeather : null}
					/>

				</section>

				<WeatherFullInfo
					currentWeather={currentWeather ? currentWeather : null}
				/>

			</main>
		</div>
	);
};

export default WeatherAppPage;
