//components
import WeatherFullInfoItem from './weather-full-info-item/weather-full-info-item';
import { Loading, Error } from '../../../../components';
//store
import { useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetWeatherCurrentDay, SelectorGetWeatherError, SelectorGetWeatherLoading } from '../../../../store/selectors/weather-selectors';
//types
import type { SelectorGetWeatherCurrentDayType, SelectorGetWeatherErrorType, SelectorGetWeatherLoadingType } from '../../../../types/selector-types';
//styles
import './weather-full-info.scss';

const WeatherFullInfo = (): JSX.Element => {
	const currentWeather: SelectorGetWeatherCurrentDayType = useAppSelector(SelectorGetWeatherCurrentDay);
	const weatherLoading: SelectorGetWeatherLoadingType = useAppSelector(SelectorGetWeatherLoading);
	const weatherErrors: SelectorGetWeatherErrorType = useAppSelector(SelectorGetWeatherError);

	console.log(weatherErrors);


	let content: JSX.Element;

	if(weatherLoading) {
		content = <Loading/>;
	} else if (weatherErrors !== null) {
		content = <Error errorInfo={weatherErrors}/>;
	} else {
		content = (
			<>
				<ul className='weather-full-info__list'>
					<div className='weather-full-info__list-wrap'>
						{
							currentWeather ? currentWeather.hour.map((hourWeather) => {
								const hours = [1, 4, 7, 10, 13, 16, 19, 23];
								const date = new Date(hourWeather.time);

								if (hours.includes(date.getHours())) {
									return <WeatherFullInfoItem key={hourWeather.time} hourWeather={hourWeather} />
								} else {
									return null;
								};
							}) : null
						}
					</div>
				</ul>
			</>
		);
	}

	return (
		<section className='weather-full-info'>
			<h2 className='visually-hidden'>full information about current day weather</h2>
			{
				content
			}
		{/* {
			weatherLoading ? <Loading/> : (
				<ul className='weather-full-info__list'>
					<div className='weather-full-info__list-wrap'>
						{
							currentWeather ? currentWeather.hour.map((hourWeather) => {
								const hours = [1, 4, 7, 10, 13, 16, 19, 23];
								const date = new Date(hourWeather.time);

								if (hours.includes(date.getHours())) {
									return <WeatherFullInfoItem key={hourWeather.time} hourWeather={hourWeather} />
								} else {
									return null;
								};
							}) : null
						}
					</div>
				</ul>
			)
		} */}

		</section>
	);
};

export default WeatherFullInfo;
