import { Link } from 'react-router-dom';
//components
import { SettingsInput, SettingsLinkToSubsettings, SettingsSelect } from '../../../../controls/';
//vars
import { AppRoute } from '../../../../../variables/app-routes';
//styles
import './account-settings.scss';

const AccountSettings = (): JSX.Element => {
	return (
		<form className='account-settings'>
			<h3 className='account-settings__title'>Account settings</h3>
			<p className='account-settings__sub-title'>Settings will be saved after clicking on the "save settings" button</p>

			<SettingsInput title={'Login'} value={''} />
			<SettingsSelect />
			<SettingsLinkToSubsettings route={AppRoute.CHANGE_LOCATION} text={'Change locaation'}/>

		</form>
	);
};

export default AccountSettings;
