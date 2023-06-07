//components
import WeatherDayItem from './weather-day-item/weather-day-item';
//store
import { useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetWeatherAllDays, SelectorGetWeatherLoading } from '../../../../store/selectors/weather-selectors';
//types
import type { SelectorGetWeatherAllDaysType, SelectorGetWeatherLoadingType } from '../../../../types/selector-types';
//styles
import './weather-days.scss';
import './weather-days-skeleton.scss';

const WeatherDays = (): JSX.Element => {
	const weatherAllDays: SelectorGetWeatherAllDaysType = useAppSelector(SelectorGetWeatherAllDays);
	const weatherLoading: SelectorGetWeatherLoadingType = useAppSelector(SelectorGetWeatherLoading);

	const skeletonClass = weatherLoading ? 'weather-days__skeleton' : '';

	return (
		<>
			<h3 className='visually-hidden'>Weather for three days</h3>
			<ul className={`weather-days  ${skeletonClass}`}>
				{
					weatherAllDays ? weatherAllDays.map((dayWeather) => {
						return <WeatherDayItem key={dayWeather.dateEpoch} weather={dayWeather} />
					}) : null
				}
			</ul>
		</>
	);
};

export default WeatherDays;
