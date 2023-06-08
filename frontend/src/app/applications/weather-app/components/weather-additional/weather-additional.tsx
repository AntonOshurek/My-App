//utils
import { convertWindKmhToMs } from '../../generic-utils/convert-wind-kmh-to-ms';
//store
import { useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetWeatherCurrentDay, SelectorGetWeatherError, SelectorGetWeatherLoading } from '../../../../store/selectors/weather-selectors';
//types
import type { SelectorGetWeatherCurrentDayType, SelectorGetWeatherErrorType, SelectorGetWeatherLoadingType } from '../../../../types/selector-types';
//styles
import './weather-additional.scss';
import './weather-additional-skeleton.scss';

const WeatherAdditional = (): JSX.Element => {
	const weatherCurrentDay: SelectorGetWeatherCurrentDayType = useAppSelector(SelectorGetWeatherCurrentDay);
	const weatherLoading: SelectorGetWeatherLoadingType = useAppSelector(SelectorGetWeatherLoading);
	const weatherErrors: SelectorGetWeatherErrorType = useAppSelector(SelectorGetWeatherError);

	const skeletonClass = weatherLoading || weatherErrors !== null ? 'weather-additional__skeleton' : '';

	return (
		<>
			<h3 className='visually-hidden'>Additional information about current day</h3>
			<dl className={`weather-additional ${skeletonClass}`}>
				<dt className='weather-additional__info-subject'>Осадки:</dt>
				<dd className='weather-additional__info-content'>
					{weatherCurrentDay ? weatherCurrentDay.day.totalPrecipMm : null} mm
				</dd>

				<dt className='weather-additional__info-subject'>Влажность:</dt>
				<dd className='weather-additional__info-content'>
					{weatherCurrentDay ? weatherCurrentDay.day.avgHumidity : null} %
				</dd>

				<dt className='weather-additional__info-subject'>Ветер макс:</dt>
				<dd className='weather-additional__info-content'>
					{weatherCurrentDay ? convertWindKmhToMs(weatherCurrentDay.day.maxWindKph) : null}	m/s
				</dd>
			</dl>
		</>
	);
};

export default WeatherAdditional;
