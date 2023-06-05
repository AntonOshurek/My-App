//components
import WeatherFullInfoItem from './weather-full-info-item/weather-full-info-item';
//store
import { useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetWeatherCurrentDay } from '../../../../store/selectors/weather-selectors';
//types
import type { SelectorGetWeatherCurrentDayType } from '../../../../types/selector-types';
//styles
import './weather-full-info.scss';

const WeatherFullInfo = (): JSX.Element => {
	const currentWeather: SelectorGetWeatherCurrentDayType = useAppSelector(SelectorGetWeatherCurrentDay);

	return (
		<section className='weather-full-info'>
			<h2 className='visually-hidden'>full information about current day weather</h2>

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
		</section>
	);
};

export default WeatherFullInfo;
