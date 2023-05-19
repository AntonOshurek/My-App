//services
import languageService from '../../../services/language.service';
//types
import type { LanguageItemType } from '../../../types/data-types';
//styles
import './settings-select.scss';

const SettingsSelect = (): JSX.Element => {
	return (
		<div className='settings-select'>
			<label className='settings-select__label'>
				Language
				<select className='settings-select__select' name="language">

					{
						languageService.getLanguages().map((lang: LanguageItemType) => {
							return <option className='settings-select__option' value={lang.abbreviation} key={`${lang.abbreviation}-${lang.fullName}`}>{lang.fullName}</option>
						})
					}
				</select>
			</label>
		</div>
	);
};

export default SettingsSelect;
