//consts
import { AppTitles } from '../../../variables/text';
//styles
import './root-weather.scss';

const RootWeather = (): JSX.Element => {
	return (
		<section className='root-weather'>
			<h2 className='visually-hidden'>{AppTitles.ROOT_WEATHER_TITLE}</h2>
			<p className='root-weather__subtitle'>How's it look out there?</p>
			<ul className='root-weather__list'>
				<li className='root-weather__item'>
					<p className='root-weather__degree'>26&#176;c</p>
					<span className='root-weather__icon'></span>
					<time className='root-weather__time' dateTime='2008-02-14 20:00'>Valentines day</time>
				</li>
				<li className='root-weather__item'>
					<p className='root-weather__degree'>26&#176;c</p>
					<span className='root-weather__icon'></span>
					<time className='root-weather__time' dateTime='2008-02-14 20:00'>Valentines day</time>
				</li>
				<li className='root-weather__item'>
					<p className='root-weather__degree'>26&#176;c</p>
					<span className='root-weather__icon'></span>
					<time className='root-weather__time' dateTime='2008-02-14 20:00'>Valentines day</time>
				</li>
				<li className='root-weather__item'>
					<p className='root-weather__degree'>26&#176;c</p>
					<span className='root-weather__icon'></span>
					<time className='root-weather__time' dateTime='2008-02-14 20:00'>Valentines day</time>
				</li>
				<li className='root-weather__item'>
					<p className='root-weather__degree'>26&#176;c</p>
					<span className='root-weather__icon'></span>
					<time className='root-weather__time' dateTime='2008-02-14 20:00'>Valentines day</time>
				</li>
				<li className='root-weather__item'>
					<p className='root-weather__degree'>26&#176;c</p>
					<span className='root-weather__icon'></span>
					<time className='root-weather__time' dateTime='2008-02-14 20:00'>Valentines day</time>
				</li>
			</ul>
		</section>
	);
}

export default RootWeather;
