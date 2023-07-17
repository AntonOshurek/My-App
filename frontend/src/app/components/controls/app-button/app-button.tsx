//styles
import './app-button.scss';

interface IAppButtonPropsType {
	text: string,
	onClickHandler: () => void,
};

const AppButton = ({ text, onClickHandler }: IAppButtonPropsType): JSX.Element => {
	return (
		<button
			className='app-button'
			type='button'
			onClick={onClickHandler}
		>
			{text}
		</button>
	);
};

export default AppButton;
