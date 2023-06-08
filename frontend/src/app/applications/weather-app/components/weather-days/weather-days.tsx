//components
import WeatherDayItem from './weather-day-item/weather-day-item';
//store
import { useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetWeatherAllDays, SelectorGetWeatherError, SelectorGetWeatherLoading } from '../../../../store/selectors/weather-selectors';
//types
import type { SelectorGetWeatherAllDaysType, SelectorGetWeatherErrorType, SelectorGetWeatherLoadingType } from '../../../../types/selector-types';
//styles
import './weather-days.scss';
import './weather-days-skeleton.scss';

const WeatherDays = (): JSX.Element => {
	const weatherAllDays: SelectorGetWeatherAllDaysType = useAppSelector(SelectorGetWeatherAllDays);
	const weatherLoading: SelectorGetWeatherLoadingType = useAppSelector(SelectorGetWeatherLoading);
	const weatherErrors: SelectorGetWeatherErrorType = useAppSelector(SelectorGetWeatherError);

	const skeletonClass = weatherLoading || weatherErrors !== null ? 'weather-days__skeleton' : '';

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
