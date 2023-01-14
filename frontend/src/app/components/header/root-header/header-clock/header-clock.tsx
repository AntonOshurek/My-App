import './header-clock.scss';

const HeaderClock = (): JSX.Element => {
	return (
		<div className='header-clock'>
			<div className='header-clock__time'>
				<span>11</span>
				<span>:</span>
				<span>01</span>
			</div>
		</div>
	);
};

export default HeaderClock;
