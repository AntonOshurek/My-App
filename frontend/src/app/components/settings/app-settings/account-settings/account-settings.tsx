//components
import SettingsInput from '../../../controls/settings-input/settings-input';
import SettingsSelect from '../../../controls/settings-select/settings-select';
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
