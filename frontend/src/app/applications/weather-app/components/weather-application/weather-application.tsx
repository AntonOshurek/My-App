//components
import { WeatherControls, CurrentWeather } from '..';
//types
import { IAdaptedOneDayDataType, AdaptedDaysDataType } from '../../types/weather-adapted-data-types';
//styles
import './weather-application.scss';

interface IWeatherApplicationPropsType {
	currentWeather: IAdaptedOneDayDataType | null,
	daysWeather: AdaptedDaysDataType | null,
};

const WeatherApplication = ({ currentWeather, daysWeather }: IWeatherApplicationPropsType): JSX.Element => {
	return (
		<section className='weather-application container'>
			<h2 className='visually-hidden'>Weather</h2>

			<CurrentWeather
				currentWeather={currentWeather ? currentWeather : null}
			/>
			<WeatherControls
				currentWeather={currentWeather ? currentWeather : null}
				daysWeather={daysWeather ? daysWeather : null}
			/>

		</section>
	);
};

export default WeatherApplication;
