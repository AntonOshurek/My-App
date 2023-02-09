//components
import WeatherDayItem from './weather-day-item/weather-day-item';
//types
import type {
	AdaptedDaysDataType,
} from '../../types/weather-adapted-data-types';
//styles
import './weather-days.scss';

interface IWeatherDaysPropsType {
	daysWeather: AdaptedDaysDataType | null,
}

const WeatherDays = ({ daysWeather }: IWeatherDaysPropsType): JSX.Element => {
	return (
		<>
			<h3 className='visually-hidden'>Weather for three days</h3>
			<ul className='weather-days'>
				{
					daysWeather?.map((dayWeather) => {
						return <WeatherDayItem key={dayWeather.dateEpoch} weather={dayWeather}/>
					})
				}
			</ul>
		</>
	);
};

export default WeatherDays;
