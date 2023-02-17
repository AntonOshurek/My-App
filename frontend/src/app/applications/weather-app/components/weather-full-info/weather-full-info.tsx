//components
import WeatherFullInfoItem from './weather-full-info-item/weather-full-info-item';
//types
import type { IAdaptedOneDayDataType } from '../../types/weather-adapted-data-types';
//styles
import './weather-full-info.scss';

interface IWeatherFullInfoPropsType {
	currentWeather: IAdaptedOneDayDataType | null,
}

const WeatherFullInfo = ({currentWeather}: IWeatherFullInfoPropsType): JSX.Element => {

	return (
		<section className='weather-full-info'>
			<h2 className='visually-hidden'>full information about current day weather</h2>

			{
				currentWeather ?
				<ul className='weather-full-info__list'>
					<div className='weather-full-info__list-wrap'>
						{
							currentWeather.hour.map((hourWeather) => {
								const hours = [1, 4, 7, 10, 13, 16, 19, 23];
								const date = new Date(hourWeather.time);

								if (hours.includes(date.getHours())) {
									return <WeatherFullInfoItem key={hourWeather.time} hourWeather={hourWeather}/>
								} else {
									return null;
								};
							})
						}
					</div>
				</ul> :	null
			}
		</section>
	);
};

export default WeatherFullInfo;
