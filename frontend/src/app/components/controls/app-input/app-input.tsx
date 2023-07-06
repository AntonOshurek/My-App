import { ChangeEvent } from 'react';
//variables
import { InputsTypes } from '../../../variables/app-variables';
//styles
import './app-input.scss';

interface IAppInputPropsType {
	name?: string,
	type: InputsTypes,
	placeholder: string,
	value: string,
	onChange: (evt: ChangeEvent<HTMLInputElement>) => void,
}

const AppInput = ({ name, type, placeholder, onChange }: IAppInputPropsType): JSX.Element => {
	return (
		<label className='app-input'>
			{
				name && <span className='app-input__name'>{name}</span>
			}
			<span className='app-input__wrap'>
				<input
					className='app-input__input'
					type={type}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</span>
		</label>
	);
};

export default AppInput;
