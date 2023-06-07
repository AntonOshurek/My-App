//utils
import { convertWindKmhToMs } from '../../generic-utils/convert-wind-kmh-to-ms';
//store
import { useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetWeatherCurrentDay, SelectorGetWeatherLoading } from '../../../../store/selectors/weather-selectors';
//types
import type { SelectorGetWeatherCurrentDayType, SelectorGetWeatherLoadingType } from '../../../../types/selector-types';
//styles
import './weather-additional.scss';

const WeatherAdditional = (): JSX.Element => {
	const weatherCurrentDay: SelectorGetWeatherCurrentDayType = useAppSelector(SelectorGetWeatherCurrentDay);
	const weatherLoading: SelectorGetWeatherLoadingType = useAppSelector(SelectorGetWeatherLoading);

	const skeletonClass = weatherLoading ? 'skeleton' : '';

	return (
		<>
			<h3 className='visually-hidden'>Additional information about current day</h3>
			<dl className='weather-additional'>
				<dt className={`weather-additional__info-subject ${skeletonClass}`}>Осадки:</dt>
				<dd className={`weather-additional__info-content ${skeletonClass}`}>
					{weatherCurrentDay ? weatherCurrentDay.day.totalPrecipMm : null} mm
				</dd>

				<dt className={`weather-additional__info-subject ${skeletonClass}`}>Влажность:</dt>
				<dd className={`weather-additional__info-content ${skeletonClass}`}>
					{weatherCurrentDay ? weatherCurrentDay.day.avgHumidity : null} %
				</dd>

				<dt className={`weather-additional__info-subject ${skeletonClass}`}>Ветер макс:</dt>
				<dd className={`weather-additional__info-content ${skeletonClass}`}>
					{weatherCurrentDay ? convertWindKmhToMs(weatherCurrentDay.day.maxWindKph) : null}	m/s
				</dd>
			</dl>
		</>
	);
};

export default WeatherAdditional;
