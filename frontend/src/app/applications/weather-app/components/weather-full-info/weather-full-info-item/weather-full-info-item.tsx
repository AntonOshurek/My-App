//types
import { IAdaptedWeatherHourDataType } from '../../../types/weather-adapted-data-types';
//utils
import { getTimeFromString } from '../../../../../generic-utils/utils/date-utils';
//styles
import './weather-full-info-item.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain, faSnowflake, faUmbrella, faCloud, faThermometerHalf, faTint, faWind, faEye  } from '@fortawesome/free-solid-svg-icons'

interface IWeatherFullInfoItemPropsType {
	hourWeather: IAdaptedWeatherHourDataType;
}

const WeatherFullInfoItem = ({hourWeather}: IWeatherFullInfoItemPropsType): JSX.Element => {

	function convertWindKmhToMs(windKmh: number): number {
		// 1 km/h = 0.277778 m/s
		const windMs = windKmh * 0.277778;
		return windMs;
	};

	function windToGray(windSpeed: number): string {
		const WIND_SPEED_RECORD: number = 32;
		const WIND_PERCENT = windSpeed * 100 / WIND_SPEED_RECORD;

		const MAX_RGB_VALUE = 110;
		const MIN_RGB_VALUE = 191;

		const RGB_COLOR_RANGE = MIN_RGB_VALUE - MAX_RGB_VALUE;
		const newRGBColor = MIN_RGB_VALUE - Math.round(RGB_COLOR_RANGE * WIND_PERCENT / 100);

		console.log(newRGBColor);

		// const grayValue = Math.round(255 - (windSpeed * 2.55));


		return `rgb(${newRGBColor}, ${newRGBColor}, ${newRGBColor})`;
	};

	function generateTemperatureColor(temperature: number): string {
		const PLUS_TEM_RECORD: number = 40;
		const MINUS_TEMP_RECORD: number = 40;

		const BASE_RGB_RANGE: number = 255;

		if(temperature === 0) {
			return `rgba(255, 255, 255, 1)`;
		} else if(temperature > 0) {
			const TEMPERATURE_PERCENT = temperature * 100 / PLUS_TEM_RECORD;

			const G_COLOR_MAX = 77;
			const G_COLOR_MIN = 180;
			const G_COLOR_RANGE = G_COLOR_MIN - G_COLOR_MAX;
			const newGColor = G_COLOR_MIN - Math.round(G_COLOR_RANGE * TEMPERATURE_PERCENT / 100);

			const B_COLOR_MAX = 0;
			const B_COLOR_MIN = 148;
			const B_COLOR_RANGE = B_COLOR_MIN - B_COLOR_MAX;
			const newBColor = B_COLOR_MIN - Math.round(B_COLOR_RANGE * TEMPERATURE_PERCENT / 100);

			return `rgba(${BASE_RGB_RANGE}, ${newGColor}, ${newBColor}, 1)`;
		} else if(temperature < 0) {
			const TEMPERATURE_PERCENT = Math.abs(temperature) * 100 / MINUS_TEMP_RECORD;

			const R_COLOR_MAX = 0;
			const R_COLOR_MIN = 186;
			const R_COLOR_RANGE = R_COLOR_MIN - R_COLOR_MAX;
			const newRColor = R_COLOR_MIN - Math.round(R_COLOR_RANGE * TEMPERATURE_PERCENT / 100);

			const G_COLOR_MAX = 89;
			const G_COLOR_MIN = 210;
			const G_COLOR_RANGE = G_COLOR_MIN - G_COLOR_MAX;
			const newGColor = G_COLOR_MIN - Math.round(G_COLOR_RANGE * TEMPERATURE_PERCENT / 100);

			return `rgba(${newRColor}, ${newGColor}, ${BASE_RGB_RANGE}, 1)`;
		} else {
			return ''
		};
	};

	const tempBgColor = generateTemperatureColor(hourWeather.tempC);

	// const backgroundColor : string = windToGray(convertWindKmhToMs(hourWeather.windKph))
	const backgroundColor : string = windToGray(13);

	return (
		<li className='weather-full-info__item'>
			<article className='weather-full-info__day-article'>

				<p className='weather-full-info__text'>
					<img src={hourWeather.condition.icon} alt="" />
					<time dateTime={hourWeather.time}>{getTimeFromString(hourWeather.time)}</time>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faThermometerHalf} />
					Состояние:
					<span className='weather-full-info__data'>{hourWeather.condition.text}</span>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faTint} />
					Влажность:
					<span className='weather-full-info__data'>{hourWeather.humidity}</span>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faTint} />
					Осадки Mm:
					<span className='weather-full-info__data'>{hourWeather.precipMm}</span>
				</p>

				<p className='weather-full-info__text weather-full-info__text--black' style={{ backgroundColor:tempBgColor }}>
					<FontAwesomeIcon icon={faThermometerHalf} />
					Температура  C:
					<span className='weather-full-info__data weather-full-info__data--black'>{Math.round(hourWeather.tempC)}</span>
				</p>

				<p className='weather-full-info__text weather-full-info__text--black' style={{ backgroundColor }}>
					<FontAwesomeIcon icon={faWind} />
					Ветер м/с:
					<span className='weather-full-info__data weather-full-info__data--black'>{Math.round(hourWeather.windKph)}</span>
				</p>

			</article>
		</li>
	);
};

export default WeatherFullInfoItem;
