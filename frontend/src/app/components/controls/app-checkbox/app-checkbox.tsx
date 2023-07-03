import { ChangeEvent } from 'react';
//styles
import './app-checkbox.scss';

interface IAppCheckboxPropsType {
	name: string,
	callback: (evt: ChangeEvent<HTMLInputElement>) => void,
	value: string,
}

const AppCheckbox = ({ name, callback, value }: IAppCheckboxPropsType): JSX.Element => {
	return (
		<label className='app-checkbox'>
			<span className='app-checkbox__title'>{name}</span>
			<input
				className='visually-hidden app-checkbox__input'
				type="checkbox"
				value={value}
				onChange={callback}
			/>
			<div className='app-checkbox__switch'></div>
		</label>
	);
};

export default AppCheckbox;
