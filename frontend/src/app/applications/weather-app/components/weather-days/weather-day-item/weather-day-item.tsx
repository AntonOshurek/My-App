import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
//services
import { getWeekday, getAbbreviationWeekday, compareDates } from '../../../services/date-service';
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
	const {day} = useParams();
	let activeDayClass: string = '';

	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	if(weather.date === day) {
		activeDayClass = 'weather-days__item--current';
	}
	// console.log(now.toDateString())

	if(compareDates(now.toDateString(), today.toDateString())) {
		activeDayClass = 'weather-days__item--current';
	} else {
		activeDayClass = '';
	}

	useEffect(() => {
		// console.log(day)
	}, [day]);

	// if(day === compareDate(weather.date)) {
	// 		activeDayClass = 'weather-days__item--current';
	// } else {
	// 	if(compareDate(weather.date) === 'today') {
	// 		activeDayClass = 'weather-days__item--current';
	// 	}
	// }

	// const [activeDayClass, setActiveDayClass] = useState<string>('');

	// useEffect(() => {
	// 	console.log(day)
	// 	if(day) {
	// 		if(day === compareDate(weather.date)) {
	// 			setActiveDayClass('weather-days__item--current');
	// 		};

	// 		// if(compareDate(weather.date) === 'today') {
	// 		// 	setActiveDayClass('weather-days__item--current');
	// 		// }
	// 	} else {
	// 		setActiveDayClass('')
	// 	}
	// }, [day]);

	// function compareDate(input: string): string {
	// 	const now = new Date();
	// 	const inputDate = new Date(input);

	// 	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	// 	const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
	// 	const afterTomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2);


	// 	if (inputDate < today) {
	// 		return "past";
	// 	} else if (inputDate.toDateString() === now.toDateString()) {
	// 		return "today";
	// 	} else if (inputDate.toDateString() === tomorrow.toDateString()) {
	// 		return "tomorrow";
	// 	} else if (inputDate.toDateString() === afterTomorrow.toDateString()) {
	// 		return "afterTomorrow";
	// 	} else {
	// 		return "future";
	// 	}
	// };

	//weather-days__item--current
	return (
		<li className={'weather-days__item ' + activeDayClass}>
			<h4 className='visually-hidden'>{getWeekday(weather.date)}</h4>
			<p className='weather-days__days-name'>{getAbbreviationWeekday(weather.date)}.</p>
			<p className='weather-days__temperature'>
				{weather.day.avgTempC}
				<span className='weather-days__temperature-symbol'>°C</span>
			</p>
			<img className='weather-days__image' src={weather.day.condition.icon}/>

			<Link className='weather-days__link' to={`../poznan/${weather.date}`}>
				<span className='visually-hidden'>Detailed weather for the day</span>
			</Link>
		</li>
	);
};

export default WeatherDayItem;
