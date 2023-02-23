import { ChangeEvent, useState } from 'react';
//components
import SettingButton from '../../controls/setting-button/setting-button';
//services
import { LanguageService } from 'typescript';
//store
import { useAppDispatch, useAppSelector } from '../../../generic-utils/hooks/hooks';
import { SelectorGetMyCityState, SelectorGetLoginState, SelectorGetLanguageState } from '../../../store/selectors/selectors';
import { setMyCityAction, setLoginAction, setLanguageAction } from '../../../store/slices/app-slice';
//styles
import './menu-account-settings.scss';
import languageService from '../../../services/language-service';

interface IMenuAccountSettingsPropsType {
	returnButtonHandler: () => void
}

// <div className='menu-settings'>  required!!!! for all settings components!
// it is a wraper for all settings
const MenuAccountSettings = ({returnButtonHandler}: IMenuAccountSettingsPropsType): JSX.Element => {

	const myCity = useAppSelector(SelectorGetMyCityState);
	const myLogin = useAppSelector(SelectorGetLoginState);
	const myLanguage = useAppSelector(SelectorGetLanguageState);

	const [login, setLogin] = useState<string>(myLogin);
	const [city, setCity] = useState<string>(myCity);
	const [language, setLanguage] = useState<string>(myLanguage);

	const dispath = useAppDispatch();

	const onLoginInputHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		const inputText = evt.target.value;

		setLogin(inputText);
	};

	const onCityInputHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		const inputText = evt.target.value;

		setCity(inputText);
	}

	const onLanguageInputHandler = (evt: ChangeEvent<HTMLSelectElement>): void => {
		const inputText = evt.target.value;

		setLanguage(inputText);
	};

	const saveButtonHandler = () => {
		console.log('save settings');
		//3 раза будет вызывать сохранение в lockalStorage!

		dispath(setLoginAction({login: login}));
		dispath(setMyCityAction({myCity: city}));
		dispath(setLanguageAction({language: language}));
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
					<select className='menu-account-settings__select' onChange={onLanguageInputHandler} value={language}>
						{
							languageService.getLanguages().map((lang, i) => {
								return <option key={lang.abbreviation + i} value={lang.abbreviation} className='menu-account-settings__select-option'>{lang.fullName}</option>
							})
						}
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
