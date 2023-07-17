import { ChangeEvent } from 'react';
//styles
import './app-checkbox.scss';

interface IAppCheckboxPropsType {
	name: string,
	callback: (evt: ChangeEvent<HTMLInputElement>) => void,
	value: string,
	checked: boolean,
	disabled?: boolean,
}

const AppCheckbox = ({ name, callback, value, checked, disabled }: IAppCheckboxPropsType): JSX.Element => {
	return (
		<label className='app-checkbox'>
			<span className='app-checkbox__title unselectable'>{name}</span>
			<input
				className='visually-hidden app-checkbox__input'
				type="checkbox"
				value={value}
				onChange={callback}
				checked={checked}
				disabled={disabled}
			/>
			<div className='app-checkbox__switch'></div>
		</label>
	);
};

export default AppCheckbox;
