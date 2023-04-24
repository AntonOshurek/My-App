//components
import { SettingsInput, SettingsSelect } from '../../../../controls/';
//styles
import './account-settings.scss';

const AccountSettings = (): JSX.Element => {
	return (
		<form className='account-settings'>
			<h3 className='account-settings__title'>Account settings</h3>
			<p className='account-settings__sub-title'>Settings will be saved after clicking on the "save settings" button</p>


			<SettingsInput title={'Login'} value={''} />
			<SettingsInput title={'City'} value={''} />
			<SettingsSelect />

		</form>
	);
};

export default AccountSettings;
