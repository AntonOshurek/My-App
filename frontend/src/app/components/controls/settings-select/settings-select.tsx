//styles
import './settings-select.scss';

const SettingsSelect = (): JSX.Element => {
	return (
		<div className='settings-select'>
			<label className='settings-select__label'>
				Language
				<select className='settings-select__select' name="language">
					<option className='settings-select__option' value="eng">English</option>
					<option className='settings-select__option' value="pol">Polish</option>
					<option className='settings-select__option' value="rus">Russian</option>
				</select>
			</label>
		</div>
	);
};

export default SettingsSelect;
