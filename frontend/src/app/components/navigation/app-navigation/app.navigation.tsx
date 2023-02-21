import './app-navigation.scss';

const AppNavigation = (): JSX.Element => {
	return (
		<nav className='app-nav'>
			<ul className='app-nav__list'>
				<li className='app-nav__item'>
					<a className='app-nav__link' href='w'>
						<span className='visually-hidden'>home</span>
						<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40" aria-hidden="true" focusable="false">
							<path fill='#222831' d="M228 869.334h123.667V613.667H609v255.667h123V490.666L480
							301.999 228 490.444v378.89Zm-84 83.999v-505l336-250.999
							336 250.999v505H525V697.666h-89.334v255.667H144Zm336-368Z"
							/>
						</svg>
					</a>
				</li>
				<li className='app-nav__item'>
					<a className='app-nav__link' href='w'>
						<span className='visually-hidden'>settings</span>
						<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40" aria-hidden="true" focusable="false">
							<path fill='#222831' d="m367.001 997.333-20-131.667q-13.001-5.333-28.467-13.969-15.465-8.637-27.534-18.031l-124
							54.333L53.667 686l108-81.443q-.667-6.149-1-14.923-.333-8.775-.333-15.967
							0-6.441.333-14.517t1-15.15l-108-80L167 263.334l121.333 53.667q12-9 28.5-18.334 16.501-9.333
							30.501-15l19.667-130.333h226.665l19 130.666q14 5.667 30.834 15 16.833 9.334 28.167 18.334l122-54L907
							464l-110 80q.666 7.333 1.333 16.333.667 9 .667 15.667t-.667 15.333q-.667 8.667-.667 15.334l108
							79.333-113.333 201.999-123.666-54.333Q657 842.333 641.833 851.5q-15.167 9.166-28.167 13.833l-20
							132H367.001ZM479 726.666q63.066 0 107.533-44.439T631 574.761q0-63.027-44.467-107.561Q542.066
							422.667 479 422.667q-63.333 0-107.666 44.439Q327 511.545 327 574.572q0 63.028 44.334 107.561Q415.667
							726.666 479 726.666Zm-.451-83.999q-28.216 0-47.882-19.923Q411 602.82 411
							574.549t19.843-48.077q19.843-19.805 48-19.805T527 526.59q20 19.923 20 48.194 0 28.272-20.118
							48.077-20.117 19.806-48.333 19.806ZM479.667 575ZM437 913.334h85.425l14.075-111q33.167-8
							62.414-24.752 29.246-16.752 53.874-40.915l102.212 44L795 710l-90-67.667q4.334-15.757
							7.167-32.886Q715 592.319 715 574.659q0-17.659-2.333-33.826Q710.334 524.667 706 507l89-66.333L756.334
							370 653 413.333Q630.334 388 600.82 370.372q-29.513-17.629-64.755-24.039l-12.398-109h-87.334L423.667
							346q-35.667 8.333-65.5 25.667-29.834 17.333-52.501 41.666L204.521 370l-40.855 70.667L253.333
							508q-4.333 18.333-6.667 34.333-2.333 16-2.333 31.798 0 15.536 2.333 32.202Q249 623 253.333
							642.667L163.666 710l40.667 70.667 102.333-44.334q26 25.667
							55.334 42.334 29.333 16.667 61.667 24.667l13.333 110Z"
							/>
						</svg>
					</a>

				</li>
			</ul>
		</nav>
	);
};

export default AppNavigation;
