//styles
import './password-result.scss';

interface IPasswordResultPropsType {
	resultPssword: string,
};

const PasswordResult = ({ resultPssword }: IPasswordResultPropsType): JSX.Element => {
	return (
		<div className='password-result global-styles__left-block-of-double'>
			<h3 className='secure-pass-generator__block-title unselectable'>Your new Password</h3>

			<span className='password-result__pass-result'>
				{resultPssword}
			</span>
		</div>
	);
};

export default PasswordResult;
