//components
import WeatherFullInfoItem from './weather-full-info-item/weather-full-info-item';
//utils
// import { getTimeFromString } from '../../../../generic-utils/utils/date-utils';
//types
import { IAdaptedOneDayDataType } from '../../types/weather-adapted-data-types';
//styles
import './weather-full-info.scss';

interface IWeatherFullInfoPropsType {
	currentWeather: IAdaptedOneDayDataType | null,
}

const WeatherFullInfo = ({currentWeather}: IWeatherFullInfoPropsType): JSX.Element => {
	console.log(currentWeather)

	return (
		<section className='weather-full-info'>
			<h2 className='visually-hidden'>full information about current day weather</h2>
			<button className='weather-full-info__show-button'>show info</button>

			{
				currentWeather ?
				<ul className='weather-full-info__list'>
					<div className='weather-full-info__list-wrap'>
						{
							currentWeather.hour.map((hourWeather) => {
								return <WeatherFullInfoItem key={hourWeather.time} hourWeather={hourWeather}/>
							})
						}
					</div>

					{/* <li className='weather-full-info__item'>
						<article className='weather-full-info__day-article'>
							<h3 className='weather-full-info__day-hour'></h3>
							<p>
								<time dateTime={currentWeather?.hour[1].time}>{getTimeFromString(currentWeather?.hour[1].time)}</time>
							</p>

						</article>
					</li> */}
				</ul> :	null
			}
		</section>
	);
};

export default WeatherFullInfo;
