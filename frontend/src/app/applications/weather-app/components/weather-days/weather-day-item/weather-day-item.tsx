import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

const WeatherDayItem = ({ weather }: IWeatherDayItemPropsType): JSX.Element => {
	const { day } = useParams();
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
			}
		};
	}, [day]);


	function compareDates(date1: string, date2: Date | string) {
		const firstDate = new Date(date1);
		const secondDate = new Date(date2);

		if(firstDate.toDateString() === secondDate.toDateString()) {
			return true;
		} else {
			return false;
		};
	};

	//weather-days__item--current
	return (
		<li className={'weather-days__item ' + activeClass}>
			<h4 className='visually-hidden'>{getWeekday(weather.date)}</h4>
			<p className='weather-days__days-name'>{getAbbreviationWeekday(weather.date)}.</p>
			<p className='weather-days__temperature'>
				{weather.day.avgTempC}
				<span className='weather-days__temperature-symbol'>°C</span>
			</p>
			<img className='weather-days__image' src={weather.day.condition.icon}/>

			<Link className='weather-days__link' to={`../poznan/${weather.date}`}>
				<span className='visually-hidden'>Detailed weather for the {weather.date} day</span>
			</Link>
		</li>
	);
};

export default WeatherDayItem;
