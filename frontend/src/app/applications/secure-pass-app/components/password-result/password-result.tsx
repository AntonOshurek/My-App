//styles
import './password-result.scss';

interface IPasswordResultPropsType {
	resultPssword: string,
	errorMessage: string,
};

const PasswordResult = ({ resultPssword, errorMessage }: IPasswordResultPropsType): JSX.Element => {
	return (
		<div className='password-result global-styles__left-block-of-double'>
			<h3 className='secure-pass-generator__block-title unselectable'>Your new Password</h3>

			<span className='password-result__pass-result'>
				{resultPssword}
			</span>

			{
				errorMessage && <p className='password-result__error-message'>{errorMessage}</p>
			}

		</div>
	);
};

export default PasswordResult;
