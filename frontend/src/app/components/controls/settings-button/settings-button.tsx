import { MouseEvent } from 'react';
//styles
import './settings-button.scss';

interface ISettingsButtonProps {
	text: string,
	onClickHandler: (evt: MouseEvent<HTMLButtonElement>) => void,
};

const SettingsButton = ({text, onClickHandler}: ISettingsButtonProps): JSX.Element => {
	return (
		<button className='settings-button' type='button' onClick={onClickHandler}>{text}</button>
	);
};

export default SettingsButton;
