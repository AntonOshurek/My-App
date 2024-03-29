import { useState, useEffect } from 'react';
//services
import { formatDate, getWeekday } from '../../../../generic-utils/utils/date-utils';
import unsplashApi from '../../../../api/unsplash-api/unsplash-api';
//utils
import { getCurrentTempAndHour } from '../../../../generic-utils/utils/date-utils';
//store
import { useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetMyCityState } from '../../../../store/selectors/app-selectors';
import { SelectorGetWeatherCurrentDay, SelectorGetWeatherError, SelectorGetWeatherLoading } from '../../../../store/selectors/weather-selectors';
//types
import type { SelectorGetMyCityStateType, SelectorGetWeatherCurrentDayType, SelectorGetWeatherErrorType, SelectorGetWeatherLoadingType } from '../../../../types/selector-types';
//styles
import './current-weather.scss';
import './current-weather-skeleton.scss';
//images
import reserveWeatherImage from './images/reserve_weather_image.jpg';

interface ICurrentTempAndHour {
	temp: string,
	hour: string,
};

const CurrentWeather = (): JSX.Element => {
	const myCity: SelectorGetMyCityStateType = useAppSelector(SelectorGetMyCityState);
	const weatherCurrentDay: SelectorGetWeatherCurrentDayType = useAppSelector(SelectorGetWeatherCurrentDay);
	const weatherLoading: SelectorGetWeatherLoadingType = useAppSelector(SelectorGetWeatherLoading);
	const weatherErrors: SelectorGetWeatherErrorType = useAppSelector(SelectorGetWeatherError);

	const skeletonClass = weatherLoading || weatherErrors !== null ? 'current-weather__skeleton' : '';

	const [styles, setStyles] = useState<any>(null);
	const [image, setImage] = useState<any>(null);
	const [currentTempAndHour, setCurrentTempAndHout] = useState<ICurrentTempAndHour | null>(null);

	useEffect(() => {
		if(weatherCurrentDay) {
			setCurrentTempAndHout(getCurrentTempAndHour(weatherCurrentDay));
		}
	}, [weatherCurrentDay]);

	useEffect(() => {
		if (myCity && myCity.length > 0) {
			unsplashApi.getKeywordImage(myCity).then(imageData => {
				setImage(imageData);
				setStyles({
					backgroundImage: `url(${imageData.imageUrl})`
				})
			}).catch(() => {
				setStyles({
					backgroundImage: `url(${reserveWeatherImage})`
				})
			});
		};
	}, [myCity]);

	return (
		<article className={`current-weather global-styles__left-block-of-double ${skeletonClass}`} style={styles}>
			<h3 className='visually-hidden'>Weather for {weatherCurrentDay?.date} date</h3>

			<div className='current-weather__wrap'>
				<time className='current-weather__date' dateTime={weatherCurrentDay?.date}>
					<span className='current-weather__date-text current-weather__date-text--big'>{getWeekday(weatherCurrentDay?.date)}</span>
					<span className='current-weather__date-text'>{formatDate(weatherCurrentDay?.date)}</span>
				</time>

				<p className='current-weather__city'>{myCity}</p>

				<div className='current-weather__image-time'>
					<img className='current-weather__image' src={weatherCurrentDay?.day.condition.icon} alt={weatherCurrentDay?.day.condition.text} width='70' height='70' />
					{currentTempAndHour && `${currentTempAndHour.hour}:00`}
				</div>


				<p className='current-weather__temperature'>
					{currentTempAndHour && currentTempAndHour.temp} °C
				</p>
				<p className='current-weather__temperature-info'>{weatherCurrentDay?.day.condition.text}</p>
			</div>

			{
				image && <>
					<div className='current-weather__image-info'>
						<h4 className='current-weather__image-info-title'>image</h4>
						<p className='current-weather__image-author'>{image?.userName}</p>
						<a className='current-weather__image-link' href={image?.userPage} target="_blank" rel="noreferrer">unsplash</a>
					</div>
				</>
			}
		</article>
	);
};

export default CurrentWeather;
