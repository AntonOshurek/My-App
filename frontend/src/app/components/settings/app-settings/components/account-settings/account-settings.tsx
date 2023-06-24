import { ChangeEvent, useState, MouseEvent, useEffect } from 'react';
//components
import { SettingsButton, SettingsInput, SettingsLinkToSubsettings, SettingsSelect } from '../../../../controls/';
//store
import { useAppSelector,useAppDispatch } from '../../../../../generic-utils/hooks/hooks';
import { SelectorGetLoginState, SelectorGetLanguageState } from '../../../../../store/selectors/app-selectors';
//vars
import { AppRoute } from '../../../../../variables/app-routes';
//styles
import './account-settings.scss';
import { setLanguageAction, setLoginAction } from '../../../../../store/actions/app-actions';
import languageService from '../../../../../services/language-service/language.service';
import { SettingsSelectDataType } from '../../../../../types/app-types';

const AccountSettings = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const currentLogin = useAppSelector(SelectorGetLoginState);
	const currentLanguage = useAppSelector(SelectorGetLanguageState);

	const [login, setLogin] = useState<string>(currentLogin);
	const [language, setlanguage] = useState<string>(currentLanguage);

	const onLoginInputHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		setLogin(evt.target.value);
	};

	const onLanguageSelectHandler = (evt: ChangeEvent<HTMLSelectElement>): void => {
		setlanguage(evt.target.value);
	};

	const onSaveSettingsButtonHandler = (evt: MouseEvent<HTMLButtonElement>): void => {
		evt.preventDefault();
		dispatch(setLoginAction({login: login}));
		dispatch(setLanguageAction({language: language}));
	};

	const languagesArray: SettingsSelectDataType = languageService.getLanguages().map((lang) => {
		//transform array for settingsSelect component props
		return {
			abbreviation: lang.abbreviation,
			fullName: lang.fullName,
		};
	});

	return (
		<form className='account-settings'>
			<h3 className='account-settings__title'>Account settings</h3>
			<p className='account-settings__sub-title'>Settings will be saved after clicking on the "save settings" button</p>

			<SettingsInput title={'Login'} value={login} handler={onLoginInputHandler}/>
			<SettingsSelect selectOptions={languagesArray} onChangeHandler={onLanguageSelectHandler} current={language}/>
			<SettingsLinkToSubsettings route={AppRoute.CHANGE_LOCATION} text={'Change your locaation'}/>

			<SettingsButton text='save account settings' onClickHandler={onSaveSettingsButtonHandler} />
		</form>
	);
};

export default AccountSettings;
function ISetLoginActionType(arg0: { login: string; }): any {
	throw new Error('Function not implemented.');
}

