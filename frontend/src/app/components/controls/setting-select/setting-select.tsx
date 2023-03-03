import { ChangeEvent } from 'react';
//types
import type { ISettingSelectOptionsDataType } from '../../../types/app-types';
//styles
import './setting-select.scss';

interface ISettingSelectTypeProps {
	text: string,
	value: string,
	onChange: (evt: ChangeEvent<HTMLSelectElement>) => void,
	data: ISettingSelectOptionsDataType,
}

const SettingSelect = ({ text, value, onChange, data }: ISettingSelectTypeProps): JSX.Element => {
	return (
		<label className='setting-select'>
			<span className='setting-select__text'>{text}</span>

			<select className='setting-select__select' onChange={onChange} value={value}>
				{
					data.map((item, i) => {
						return <option key={item.value + i} value={item.value} className='setting-select__select-option'>{item.text}</option>
					})
				}
			</select>
		</label>
	);
};

export default SettingSelect;
