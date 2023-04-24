//styles
import './settings-input.scss';

interface ISettingsInputPropsType {
	title: string,
	value: string,
};

const SettingsInput = ({ title, value }: ISettingsInputPropsType): JSX.Element => {
	return (
		<div className='settings-input'>
			<label className='settings-input__label'>
				{title}
				<input className='settings-input__input' type="text" value={value} />
			</label>
		</div>
	);
};

export default SettingsInput;
