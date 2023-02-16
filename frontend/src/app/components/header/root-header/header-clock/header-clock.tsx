import { useEffect, useState } from 'react';
//api
import ApiTime from '../../../../api/time/api-time';
//utils
import { getTimeAdvice } from '../../../../generic-utils/auxiliary/get-time-advice';
//types
import { IGetTime } from '../../../../types/api-types';
//styles
import './header-clock.scss';

const HeaderClock = (): JSX.Element => {
	const [currentTime, setCurrentTime] = useState<IGetTime>();
	const millisecondsInOneMinute: number = 60000;

	useEffect(() => {
		//for first launch
		setCurrentTime(ApiTime.getTime());

		const interval = setInterval(() => {
			setCurrentTime(ApiTime.getTime());
		}, millisecondsInOneMinute);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='header-clock'>
			<div className='header-clock__time'>
				<span className='header-clock__time-text'>{currentTime?.hours}</span>
				<span className='header-clock__time-text header-clock__time-text--separator'>:</span>
				<span className='header-clock__time-text'>{currentTime?.minutes}</span>
			</div>
			<p className='header-clock__time-info'>
				<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
					<path fill="#ffffff" d="M3.083 15.875v-2.396h1.146V9.25q0-1.979 1.188-3.562 1.187-1.584 3.125-2V2.646q0-.604.427-1.031.427-.427 1.031-.427.604 0 1.031.427.427.427.427 1.031v1.042q1.959.395 3.136 1.968t1.177 3.594v4.229h1.167v2.396ZM10 9.542Zm0 9.208q-.75 0-1.271-.531-.521-.531-.521-1.261h3.604q0 .75-.531 1.271-.531.521-1.281.521Zm-3.375-5.271h6.75V9.25q0-1.417-.979-2.396-.979-.979-2.396-.979-1.417 0-2.396.979-.979.979-.979 2.396Z"/>
				</svg>
				{getTimeAdvice()}
			</p>
		</div>
	);
};

export default HeaderClock;
