import { ChangeEvent } from 'react';
//styles
import './settings-input.scss';

interface ISettingsInputPropsType {
	title: string,
	value: string,
	handler: (evt: ChangeEvent<HTMLInputElement>) => void,
};

const SettingsInput = ({ title, value, handler }: ISettingsInputPropsType): JSX.Element => {
	return (
		<div className='settings-input'>
			<label className='settings-input__label'>
				{title}
				<input className='settings-input__input' type="text" value={value} onChange={handler} />
			</label>
		</div>
	);
};

export default SettingsInput;
