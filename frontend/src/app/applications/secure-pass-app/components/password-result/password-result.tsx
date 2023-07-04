//styles
import './password-result.scss';

const PasswordResult = (): JSX.Element => {
	return (
		<div className='password-result'>
			<h3 className='password-result__subtitle unselectable'>Your new Password</h3>

			<span className='password-result__pass-result'>
				06v~E:73oG~*mH2!WVN8+h62BxtRrc
			</span>
		</div>
	);
};

export default PasswordResult;
