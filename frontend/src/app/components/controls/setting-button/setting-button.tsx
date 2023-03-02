//styles
import './setting-button.scss';

type settingButtonType = 'main' | 'second'

interface ISettingButtonPropsType {
	buttonName: string,
	buttonHandler: () => void,
	additionalClass?: string,
	buttonType?: settingButtonType,
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
