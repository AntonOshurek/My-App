import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//utils
import { getWeekday, getAbbreviationWeekday, compareDates } from '../../../../../generic-utils/utils/date-utils';
//types
import type {
	IAdaptedOneDayDataType
} from '../../../types/weather-adapted-data-types';
//store
import { useAppSelector } from '../../../../../generic-utils/hooks/hooks';
import { SelectorGetMyCityState } from '../../../../../store/selectors/selectors';
//styles
import './weather-day-item.scss';

interface IWeatherDayItemPropsType {
	weather: IAdaptedOneDayDataType,
};

const WeatherDayItem = ({ weather }: IWeatherDayItemPropsType): JSX.Element => {
	const { day } = useParams();
	const myCity = useAppSelector(SelectorGetMyCityState);

	const [ activeClass, setActiveClass ] = useState<string | null>(null);

	useEffect(() => {
		if(day) {
			if(compareDates(weather.date, day)) {
				setActiveClass('weather-days__item--current');
			} else {
				setActiveClass('');
			}
		} else {
			const now = new Date();
			const isCurrentDay = compareDates(weather.date, now);

			if (isCurrentDay) {
				setActiveClass('weather-days__item--current');
			} else {
				setActiveClass('')
			};
		};
	}, [day]);

	//weather-days__item--current
	return (
		<li className={'weather-days__item ' + activeClass}>
			<h4 className='visually-hidden'>{getWeekday(weather.date)}</h4>
			<p className='weather-days__days-name'>{getAbbreviationWeekday(weather.date)}.</p>
			<p className='weather-days__temperature'>
				{weather.day.avgTempC}°C
			</p>
			<img className='weather-days__image' src={weather.day.condition.icon} alt={weather.day.condition.text}/>

			<Link className='weather-days__link' to={`../${myCity}/${weather.date}`}>
				<span className='visually-hidden'>Detailed weather for the {weather.date} day</span>
			</Link>
		</li>
	);
};

export default WeatherDayItem;
