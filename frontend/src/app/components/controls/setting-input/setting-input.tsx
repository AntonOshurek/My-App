import { ChangeEvent } from 'react';
//styles
import './setting-input.scss';

interface ISettingInputTypeProps {
	text: string,
	placeholder: string,
	value: string,
	onChange: (evt: ChangeEvent<HTMLInputElement>) => void,
	type: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color";
}

const SettingInput = ({ text, placeholder, value, onChange, type }: ISettingInputTypeProps): JSX.Element => {

	return (
		<label className='setting-input'>
			<span className='setting-input__text'>
				{text}
			</span>
			<input className='setting-input__input'
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</label>
	);
};

export default SettingInput;
