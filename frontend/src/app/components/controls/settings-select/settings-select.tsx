import { ChangeEvent } from 'react';
//types
import type { ISettingsSelectOptionDataType, SettingsSelectDataType } from '../../../types/app-types';
//styles
import './settings-select.scss';

interface ISettingsSelectPropsType {
	selectOptions: SettingsSelectDataType,
	current: string,
	onChangeHandler: (evt: ChangeEvent<HTMLSelectElement>) => void,
};

const SettingsSelect = ({selectOptions, current, onChangeHandler}: ISettingsSelectPropsType): JSX.Element => {

	return (
		<div className='settings-select'>
			<label className='settings-select__label'>
				Language
				<select className='settings-select__select' name="language" onChange={onChangeHandler}>

					{
						selectOptions.map((item: ISettingsSelectOptionDataType) => {
							return <option
								className='settings-select__option'
								value={item.abbreviation}
								key={`${item.abbreviation}-${item.fullName}`}
								selected={current === item.abbreviation ? true : false}>
									{item.fullName}
							</option>
						})
					}
				</select>
			</label>
		</div>
	);
};

export default SettingsSelect;
