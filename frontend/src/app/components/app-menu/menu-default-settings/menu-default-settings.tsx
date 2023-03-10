import { MouseEvent } from 'react';
//components
import ThemeSwitcher from '../../theme-switcher/theme-switcher';
//variables
import { settingsNames } from '../../../variables/app-variables';
//styles
import './menu-default-settings.scss';

interface IMenuDefaultSettingsPropsType {
	settingsButtonHandler: (evt: MouseEvent<HTMLButtonElement>) => void
}

// <div className='menu-settings'>  required!!!! for all settings components!
// it is a wraper for all settings
const MenuDefaultSettings = ({settingsButtonHandler}: IMenuDefaultSettingsPropsType): JSX.Element => {

	return (
		<div className='menu-settings'>

			<div className='menu-default-settings__fast'>
				<h3 className='visually-hidden'>Fast controls</h3>
				<p className='menu-default-settings__fast-title'>Theme</p>
				<ThemeSwitcher/>
			</div>

			<div className='menu-default-settings__body'>
				<h3 className='visually-hidden'>Main application controls</h3>

				<ul className='menu-default-settings__list'>
					<li className='menu-default-settings__item'>
						<button className='menu-default-settings__item-button' type='button' onClick={settingsButtonHandler}>
							{settingsNames.ACCOUNT}
							<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30" aria-hidden="true" focusable="false">
								<path fill='#222831' d="M480 567.333q-72.975 0-120.487-47.512Q312 472.309 312 399.334t47.513-120.487Q407.025
								231.334 480 231.334t120.487 47.513Q648 326.359 648 399.334t-47.513 120.487Q552.975 567.333
								480 567.333Zm-340 369V816q0-41 19.959-71.535Q179.917 713.931 212 698q68-32.666 134.272-48.666
								66.272-16 133.666-16 67.395 0 133.395 16.333 66 16.333 133.947 48.463 32.951 16.014 52.835
								46.442Q820 775 820 816v120.333H140Zm84-84h512V816q0-14.333-6.716-25.783-6.717-11.449-16.951-16.217-61.666-29.667-118.166-43.167T480
								717.333q-57.667 0-114.5 13.333Q308.667 744 247.667 774 237 778.666 230.5 790.04 224 801.414 224
								816v36.333Zm256-368.999q36 0 60-24t24-60q0-36-24-60t-60-24q-36 0-60 24t-24 60q0 36 24 60t60 24Zm0-84Zm0 452.999Z"
								/>
							</svg>
						</button>
					</li>
					<li className='menu-default-settings__item'>
						<button className='menu-default-settings__item-button' type='button' onClick={settingsButtonHandler}>
						{settingsNames.SUPPORT}
							<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30" aria-hidden="true" focusable="false">
								<path fill='#222831' d="M58.667 1004V230.666q0-33.483 25.137-58.741 25.138-25.258 58.862-25.258h674.668q33.483
								0 58.741 25.258 25.258 25.258 25.258 58.741v512.001q0 33.483-25.258 58.741-25.258 25.259-58.741
								25.259H236L58.667 1004Zm83.999-203.332 58.668-58.001h616V230.666H142.666v570.002Zm0-570.002v570.002-570.002Z"/>
							</svg>
						</button>
					</li>
					<li className='menu-default-settings__item'>
						<button className='menu-default-settings__item-button' type='button' onClick={settingsButtonHandler}>
							give feedback
							<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30" aria-hidden="true" focusable="false">
								<path fill='#222831' d="M481.906 826q20.427 0 34.594-14.073 14.166-14.073 14.166-34.5t-14.072-34.593q-14.073-14.167-34.5-14.167T447.5
								742.74q-14.166 14.072-14.166 34.499 0 20.428 14.072 34.594Q461.479 826 481.906 826Zm-43.239-158h79.999q0-31.432
								6.167-53.883 6.167-22.45 44.5-56.117 29.333-24.666 43.667-50.586 14.333-25.919 14.333-59.43
								0-58.261-40.014-90.789-40.015-32.528-101.673-32.528-58.312 0-97.979 29t-55.667 77L402.666 458q6.667-23.667 26.501-42.834Q449
								396 483.333 396q31 0 50.167 17t19.167 41.667q0 21.333-13.476 40.167-13.476 18.833-35.858 37.833Q464.667 566 451.667 590t-13
								78Zm41.027 329.333q-86.667 0-163.507-33.353-76.84-33.354-133.827-90.34-56.986-56.987-90.34-133.914Q58.667 662.799 58.667
								576q0-87.48 33.412-164.42 33.413-76.94 90.624-134.163 57.211-57.224 133.864-89.987 76.652-32.763 163.138-32.763 87.515 0
								164.655 32.763 77.141 32.763 134.224 90 57.082 57.237 89.916 134.292 32.833 77.056 32.833 164.667 0 86.944-32.763
								163.337-32.763 76.392-89.987 133.587-57.223 57.195-134.261 90.608-77.037 33.412-164.628 33.412Zm.306-83.999q140.513
								0 238.923-98.744 98.411-98.744 98.411-238.59 0-140.513-98.411-238.923-98.41-98.411-238.923-98.411-139.846 0-238.59
								98.411-98.744 98.41-98.744 238.923 0 139.846 98.744 238.59T480 913.334ZM480 576Z"/>
							</svg>
						</button>
					</li>
					<li className='menu-default-settings__item'>
						<button className='menu-default-settings__item-button' type='button' onClick={settingsButtonHandler}>
							about
							<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30" aria-hidden="true" focusable="false">
								<path fill='#222831' d="M440.667 786.667h83.999V536h-83.999v250.667Zm39.204-337.333q17.796 0 29.962-11.833Q522
								425.668 522 408.176q0-18.809-12.021-30.825-12.021-12.017-29.792-12.017-18.52 0-30.354 11.841Q438
								389.016 438 407.492q0 17.908 12.038 29.875 12.038 11.967 29.833 11.967Zm.001 547.999q-87.157
								0-163.841-33.353-76.684-33.354-133.671-90.34-56.986-56.987-90.34-133.808-33.353-76.821-33.353-164.165
								0-87.359 33.412-164.193 33.413-76.834 90.624-134.057 57.211-57.224 133.757-89.987t163.578-32.763q87.394
								0 164.429 32.763 77.034 32.763 134.117 90 57.082 57.237 89.916 134.292 32.833 77.056 32.833 164.49 0
								87.433-32.763 163.67-32.763 76.236-89.987 133.308-57.223 57.073-134.261 90.608-77.037 33.535-164.45
								33.535Zm.461-83.999q140.18 0 238.59-98.744 98.411-98.744 98.411-238.923 0-140.18-98.286-238.59Q620.763
								238.666 480 238.666q-139.846 0-238.59 98.286Q142.666 435.237 142.666 576q0 139.846 98.744 238.59t238.923
								98.744ZM480 576Z"/>
							</svg>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MenuDefaultSettings;
