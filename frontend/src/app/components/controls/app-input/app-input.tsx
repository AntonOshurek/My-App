import { ChangeEvent, useState, useEffect } from 'react';
//variables
import { InputsTypes } from '../../../variables/app-variables';
//utils
import { replaceMultipleSpacesWithOne } from '../../../generic-utils/auxiliary/auxiliary';
//styles
import './app-input.scss';

interface IAppInputPropsType {
	name?: string,
	type: InputsTypes,
	placeholder: string,
	value: string,
	maxLength?: number,
	onChange: (text: string) => void,
};

const AppInput = ({ name, type, placeholder, onChange, maxLength }: IAppInputPropsType): JSX.Element => {
	const [text, setText] = useState<string>('');

	const onInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.value;
    const inputWithoutSpaces = inputValue.replace(/\s/g, '');

    if (maxLength && inputWithoutSpaces.length <= maxLength -1) {
			setText(replaceMultipleSpacesWithOne(inputValue));
    };
	};

	useEffect(() => {
		onChange(text.trim());
	}, [text]);

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
					onChange={onInputHandler}
					value={text}
				/>
			</span>
		</label>
	);
};

export default AppInput;
