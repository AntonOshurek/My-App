import { useEffect, useRef, useState } from 'react';
//store
import { useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetWeatherCurrentDay } from '../../../../store/selectors/weather-selectors';
//styles
import './sun-range.scss';
import { convertTo24HourFormat } from '../../../../generic-utils/utils/date-utils';

const SunRange = (): JSX.Element => {
	const weather = useAppSelector(SelectorGetWeatherCurrentDay);

	const range = useRef<HTMLDivElement | null>(null);
	const [sunsetPosition, setSunsetPosition] = useState<React.CSSProperties>({left: '0'});
	const [sunrisePosition, setSunrisePosition] = useState<React.CSSProperties>({left: '0'});

	const currentTime = new Date().getHours();

	useEffect(() => {
		if(range.current && weather) {
			const width = range.current.clientWidth;
			const oneHourOfWidth = width / 24;

			const sunriseTime = convertTo24HourFormat(weather.astro.sunrise);
			const sunsetTime = convertTo24HourFormat(weather.astro.sunset);

			console.log(weather.astro.sunrise)

			const sunsetLeftPosition = +sunsetTime * oneHourOfWidth;
			const sunriseLeftPosition = +sunriseTime * oneHourOfWidth;
			// console.log(`${sunriseTime}`)
			// console.log(sunriseLeftPosition)

			setSunsetPosition({left: sunsetLeftPosition});
			setSunrisePosition({left: sunriseLeftPosition});
		};
	}, [range, weather]);


	// console.log(weather?.astro)
	return (
		<section className='sur-range'>
			<h2 className='visually-hidden'>Sun Range</h2>


			<div className='sun-range__progress' ref={range}>
				<progress className='sun-range__progress' max='24' value={currentTime}></progress>
				<span className='sun-range__item sun-range__item--sunset' style={sunsetPosition}>
					{weather?.astro.sunset}
					<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M120-773.334V-840h120v66.666H120Zm117.666 217.667L190-602.333l85-85 47.666 46.666-85 85ZM480-653.334q-77 0-130.5-54.5Q296-762.333 293.334-840H360q2 50 36.333 85 34.334 35 83.667 35t83.667-35Q598-790 600-840h66.666Q664-762.333 610.5-707.834q-53.5 54.5-130.5 54.5ZM480-840Zm-33.333 360v-120h66.666v120h-66.666Zm275.667-76.334-84.667-85L684.333-688 770-604l-47.666 47.666Zm-2.334-217V-840h120v66.666H720Zm-640 646V-194q38 0 59.833-22 21.834-22 71.5-22 49.667 0 72.5 24.667 22.834 24.667 60.834 24.667 38.666 0 62.166-24.667Q430.334-238 480-238q49 0 72.833 24.667 23.834 24.667 61.834 24.667 38.666 0 61.5-24.667Q699-238 748.667-238q49.666 0 71.5 22Q842-194 880-194v66.666q-50.333 0-72.167-22-21.833-22-59.166-22-37.334 0-60.834 24.667T614.667-122q-49 0-73.167-24.667T480-171.334q-38 0-61.833 24.667Q394.333-122 344.667-122q-49.667 0-72.5-24.667-22.834-24.667-60.834-24.667t-59.166 22q-21.167 22-72.167 22Zm0-160V-354q38 0 59.833-22 21.834-22 71.5-22 49 0 72.167 24.667t61.167 24.667q38.666 0 62.166-24.667Q430.334-398 480-398q49 0 72.667 24.667 23.666 24.667 61.333 24.667 38.667 0 61.834-24.667Q699-398 748.667-398q49 0 71.5 22T880-354v66.666q-51 0-72.5-22t-58.833-22q-37.334 0-60.834 24.667T614.667-282q-49 0-73.167-24.667T480-331.334q-38 0-61.5 24.667T345.333-282q-49.666 0-73.166-24.667t-60.834-24.667q-37.333 0-59.166 22-21.834 22-72.167 22Z"/></svg>
				</span>
				<span className='sun-range__item sun-range__item--sunrise' style={sunrisePosition}>
					{weather?.astro.sunrise}
					<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="m729.333-560.667-46.666-48.666 86-84 46.666 46.666-86 86ZM80-166.667v-66.666h800v66.666H80ZM446.667-680v-120h66.666v120h-66.666Zm-216 118L146-648.667l46.667-46.666 86.666 86.666L230.667-562Zm46.999 175.334h404.668Q662.001-452 607-492.667q-55-40.667-127-40.667t-127 40.667Q297.999-452 277.666-386.666ZM200-320q0-117 81.5-198.5T480-600q117 0 198.5 81.5T760-320H200Zm280-66.666Z"/></svg>
				</span>
			</div>

		</section>
	);
};

export default SunRange;
