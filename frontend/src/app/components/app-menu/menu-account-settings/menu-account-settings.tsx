import { ChangeEvent, useState } from 'react';
//components
import SettingButton from '../../controls/setting-button/setting-button';
import SettingInput from '../../controls/setting-input/setting-input';
import SettingSelect from '../../controls/setting-select/setting-select';
//services
import languageService from '../../../services/language-service';
//store
import { useAppDispatch, useAppSelector } from '../../../generic-utils/hooks/hooks';
import { SelectorGetMyCityState, SelectorGetLoginState, SelectorGetLanguageState } from '../../../store/selectors/selectors';
import { setMyCityAction, setLoginAction, setLanguageAction } from '../../../store/slices/app-slice';
//types
import type { ISettingSelectOptionsDataType } from '../../../types/app-types';
import type { LanguageObjectType } from '../../../types/services-types';
//styles
import './menu-account-settings.scss';


interface IMenuAccountSettingsPropsType {
	returnButtonHandler: () => void
};

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

	//creating new language array for SettingSelect component
	const langChoiseItems: ISettingSelectOptionsDataType = [];
	languageService.getLanguages().map((lang: LanguageObjectType) => {
		langChoiseItems.push({
			'text': lang.fullName, 'value': lang.abbreviation
		});
	});

	const onLoginInputHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		const inputText = evt.target.value;

		setLogin(inputText);
	};

	const onCityInputHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		const inputText = evt.target.value;

		setCity(inputText);
	};

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

				<SettingInput text='Login' placeholder={login} value={login} type='text' onChange={onLoginInputHandler}/>

				<SettingInput text='City' placeholder={city} value={city} type='text' onChange={onCityInputHandler}/>

				<SettingSelect text='Language' value={language} onChange={onLanguageInputHandler} data={langChoiseItems}/>

				<div className='menu-account-settings__controls'>
					<SettingButton buttonName={'return'} buttonHandler={returnButtonHandler} additionalClass={'menu-account-settings__button'} buttonType={'second'}/>
					<SettingButton buttonName={'save'} buttonHandler={saveButtonHandler} additionalClass={'menu-account-settings__button'}/>
				</div>
			</form>

		</div>
	);
};

export default MenuAccountSettings;
