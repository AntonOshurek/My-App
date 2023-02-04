import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//services
import { formatDate, getWeekday } from '../../services/date-service';
import unsplash from '../../services/unsplash-service';
//store
import { useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetMyCityState } from '../../../../store/selectors/selectors';
//types
import {
	IAdaptedOneDayDataType,
} from '../../types/weather-adapted-data-types';
//styles
import './current-weather.scss';

interface ICurrentWeatherPropsType {
	currentWeather: IAdaptedOneDayDataType | null,
}

const CurrentWeather = ({currentWeather}: ICurrentWeatherPropsType): JSX.Element => {
	const { location } = useParams();

	const myCity = useAppSelector(SelectorGetMyCityState);

	const [styles, setStyles] = useState<any>(null);
	const [image, setImage] = useState<any>(null);

	useEffect(() => {
		if(location) {
			unsplash.searchCity(location).then(imageData => {
				setImage(imageData);
				setStyles({
					backgroundImage: `url(${ imageData?.imageUrl })`
				});
			});
		};
	}, [location]);

	return (
		<article className='current-weather' style={styles}>
			<h3 className='visually-hidden'>Weather for tooday</h3>
			<div className='current-weather__wrap'>
				<time className='current-weather__date' dateTime={currentWeather?.date}>
					<span className='current-weather__date-text current-weather__date-text--day'>{getWeekday(currentWeather?.date)}</span>
					<span className='current-weather__date-text'>{formatDate(currentWeather?.date)}</span>
				</time>

				<p className='current-weather__city'>{myCity}</p>

				<img className='current-weather__image' src={currentWeather?.day.condition.icon} alt={currentWeather?.day.condition.text}/>

				<p className='current-weather__temperature'>{currentWeather?.day.avgTempC}°C</p>
				<p className='current-weather__temperature-info'>{currentWeather?.day.condition.text}</p>
			</div>
			<div className='current-weather__image-info'>
				<h4 className='current-weather__image-info-title'>image</h4>
				<p className='current-weather__image-author'>{image?.userName}</p>
				<a className='current-weather__image-link' href={image?.userPage} target="_blank" rel="noreferrer">unsplash</a>
			</div>
		</article>
	);
};

export default CurrentWeather;
