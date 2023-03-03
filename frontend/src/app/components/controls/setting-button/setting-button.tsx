//styles
import './setting-button.scss';

interface ISettingButtonPropsType {
	buttonName: string,
	buttonHandler: () => void,
	additionalClass?: string,
	buttonType?: 'main' | 'second',
}

const SettingButton = ({buttonName, buttonHandler, additionalClass, buttonType}: ISettingButtonPropsType): JSX.Element => {
	// setting-button--dark-theme
	return (
		<button
			className={`setting-button ${additionalClass && additionalClass} ${buttonType ? buttonType : ''}`}
			type='button'
			onClick={buttonHandler}
		>
			{buttonName}
		</button>
	);
};

export default SettingButton;
