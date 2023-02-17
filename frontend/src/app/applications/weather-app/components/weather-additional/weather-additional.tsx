//utils
import { convertWindKmhToMs } from '../../generic-utils/convert-wind-kmh-to-ms';
//types
import { IAdaptedOneDayDataType } from '../../types/weather-adapted-data-types';
//styles
import './weather-additional.scss';

interface IWeatherControlsPropsType {
	currentWeather: IAdaptedOneDayDataType | null,
};

const WeatherAdditional = ({ currentWeather }: IWeatherControlsPropsType): JSX.Element => {
	const skeletonClass = currentWeather ? '' : 'skeleton';

	return (
		<>
			<h3 className='visually-hidden'>Additional information about current day</h3>
			<dl className='weather-additional'>
				<dt className={`weather-additional__info-subject ${skeletonClass}`}>Осадки</dt>
				<dd className={`weather-additional__info-content ${skeletonClass}`}>
					{currentWeather ? currentWeather.day.totalPrecipMm : null} mm
				</dd>

				<dt className={`weather-additional__info-subject ${skeletonClass}`}>Влажность</dt>
				<dd className={`weather-additional__info-content ${skeletonClass}`}>
					{currentWeather ? currentWeather.day.avgHumidity : null} %
				</dd>

				<dt className={`weather-additional__info-subject ${skeletonClass}`}>Ветер</dt>
				<dd className={`weather-additional__info-content ${skeletonClass}`}>
					{currentWeather ? convertWindKmhToMs(currentWeather.day.maxWindKph) : null}	m/s
				</dd>
			</dl>
		</>
	);
};

export default WeatherAdditional;
