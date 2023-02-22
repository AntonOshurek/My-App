//components
import SettingButton from '../../controls/setting-button/setting-button';
//styles
import './menu-account-settings.scss';

interface IMenuAccountSettingsPropsType {
	returnButtonHandler: () => void
}

const MenuAccountSettings = ({returnButtonHandler}: IMenuAccountSettingsPropsType): JSX.Element => {

	const saveButtonHandler = () => {
		console.log('save settings')
	};

	return (
		<div className='menu-settings'>

			<form className='menu-account-settings'>
				<label className='menu-account-settings__label'>
					Your login
					<input type="text" />
				</label>
				<label className='menu-account-settings__label'>
					Your city
					<input type="text" />
				</label>
				<label className='menu-account-settings__label'>
					Your language
					<input type="text" />
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
