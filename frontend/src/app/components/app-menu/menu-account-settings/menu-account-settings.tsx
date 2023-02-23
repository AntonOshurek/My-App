import { ChangeEvent, useState } from 'react';
//components
import SettingButton from '../../controls/setting-button/setting-button';
//store
import { useAppDispatch, useAppSelector } from '../../../generic-utils/hooks/hooks';
import { SelectorGetMyCityState, SelectorGetLoginState } from '../../../store/selectors/selectors';
import { setMyCityAction, setLoginAction } from '../../../store/slices/app-slice';
//styles
import './menu-account-settings.scss';

interface IMenuAccountSettingsPropsType {
	returnButtonHandler: () => void
}

// <div className='menu-settings'>  required!!!! for all settings components!
// it is a wraper for all settings
const MenuAccountSettings = ({returnButtonHandler}: IMenuAccountSettingsPropsType): JSX.Element => {

	const myCity = useAppSelector(SelectorGetMyCityState);
	const myLogin = useAppSelector(SelectorGetLoginState);

	const [login, setLogin] = useState<string>(myLogin);
	const [city, setCity] = useState<string>(myCity);

	const dispath = useAppDispatch();

	const onLoginInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		const inputText = evt.target.value;

		setLogin(inputText);
	};

	const onCityInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		const inputText = evt.target.value;

		setCity(inputText);
	}

	const saveButtonHandler = () => {
		console.log('save settings')

		dispath(setLoginAction({login: login}));
		dispath(setMyCityAction({myCity: city}));
		//add check it is a real city?!!!
	};

	return (
		<div className='menu-settings'>

			<form className='menu-account-settings'>
				<label className='menu-account-settings__label'>
					login
					<input className='menu-account-settings__input'
						type="text"
						onChange={onLoginInputHandler}
						placeholder={login}
						value={login}
					/>
				</label>
				<label className='menu-account-settings__label'>
					city
					<input className='menu-account-settings__input'
						type="text"
						placeholder={city}
						value={city}
						onChange={onCityInputHandler}
					/>
				</label>
				<label className='menu-account-settings__label'>
					language
					<select className='menu-account-settings__select'>
						<option className='menu-account-settings__select-option'>English</option>
						<option className='menu-account-settings__select-option'>Polish</option>
						<option className='menu-account-settings__select-option'>Russian</option>
					</select>
				</label>

				<div className='menu-account-settings__controls'>
					<SettingButton buttonName={'return'} buttonHandler={returnButtonHandler} additionalClass={'menu-account-settings__button'} buttonType={'second'}/>
					<SettingButton buttonName={'save'} buttonHandler={saveButtonHandler} additionalClass={'menu-account-settings__button'}/>
				</div>
			</form>

		</div>
	);
};

export default MenuAccountSettings;
