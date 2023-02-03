//services
import { getWeekday, getAbbreviationWeekday } from '../../../services/date-service';
//types
import type {
	IAdaptedOneDayDataType
} from '../../../types/weather-adapted-data-types';
//styles
import './weather-day-item.scss';

interface IWeatherDayItemPropsType {
	weather: IAdaptedOneDayDataType,
};

const WeatherDayItem = ({weather}: IWeatherDayItemPropsType): JSX.Element => {
	console.log(weather)

	//weather-days__item--current
	return (
		<li className='weather-days__item '>
			<h4 className='visually-hidden'>{getWeekday(weather.date)}</h4>
			<p className='weather-days__days-name'>{getAbbreviationWeekday(weather.date)}.</p>
			<p className='weather-days__temperature'>
				{weather.day.avgTempC}
				<span className='weather-days__temperature-symbol'>°C</span>
			</p>
			<img className='weather-days__image' src={weather.day.condition.icon}/>

			<a className='weather-days__link' href="#">
				<span className='visually-hidden'>Detailed weather for the day</span>
			</a>
		</li>
	);
};

export default WeatherDayItem;
