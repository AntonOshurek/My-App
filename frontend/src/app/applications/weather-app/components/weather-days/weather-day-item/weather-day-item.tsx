import { useEffect, useState } from 'react';
//utils
import { getWeekday, getAbbreviationWeekday, compareDates } from '../../../../../generic-utils/utils/date-utils';
//types
import type {
	IWeatherOneDayDataType
} from '../../../types/weather-data-types';
//store
import { useAppSelector, useAppDispatch } from '../../../../../generic-utils/hooks/hooks';
import { SelectorGetWeatherCurrentDay } from '../../../../../store/selectors/weather-selectors';
import { setWeatherCurrentDayAction } from '../../../../../store/actions/weather-actions';
//styles
import './weather-day-item.scss';

interface IWeatherDayItemPropsType {
	weather: IWeatherOneDayDataType,
};

const WeatherDayItem = ({ weather }: IWeatherDayItemPropsType): JSX.Element => {
	const currentDay = useAppSelector(SelectorGetWeatherCurrentDay);
	const dispatch = useAppDispatch();

	const [activeClass, setActiveClass] = useState<string | null>(null);

	const onWeatherDayButtonhandler = (): void => {
		dispatch(setWeatherCurrentDayAction({weather: weather}));
	};

	useEffect(() => {
		if (currentDay !== null) {
			if (compareDates(weather.date, currentDay.date)) {
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
	}, [currentDay]);

	//weather-days__item--current
	return (
		<li className={`weather-days__item ${activeClass && activeClass}`}>
			<h4 className='visually-hidden'>{getWeekday(weather.date)}</h4>
			<p className='weather-days__days-name'>{getAbbreviationWeekday(weather.date)}.</p>
			<p className='weather-days__temperature'>
				{weather.day.avgTempC}°C
			</p>
			<img className='weather-days__image' src={weather.day.condition.icon} alt={weather.day.condition.text} width='30' height='30' />

			<button className='weather-days__button' type='button' onClick={onWeatherDayButtonhandler}>
				<span className='visually-hidden'>Detailed weather for the {weather.date} day</span>
			</button>
		</li>
	);
};

export default WeatherDayItem;
