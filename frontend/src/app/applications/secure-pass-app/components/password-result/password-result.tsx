//components
import { AppButton } from '../../../../components/controls';
//styles
import './password-result.scss';

interface IPasswordResultPropsType {
	resultPssword: string,
	errorMessage: string,
};

const PasswordResult = ({ resultPssword, errorMessage }: IPasswordResultPropsType): JSX.Element => {
	const handleCopy = () => {
    navigator.clipboard.writeText(resultPssword)
      .then(() => {
        console.log('Текст скопирован в буфер обмена');
      })
      .catch((error) => {
        console.error('Ошибка при копировании текста: ', error);
      });
  };

	return (
		<div className='password-result global-styles__left-block-of-double'>
			<h3 className='secure-pass-generator__block-title unselectable'>Your new Password</h3>

			<span className='password-result__pass-result'>
				{resultPssword}
			</span>

			{
				errorMessage && <p className='password-result__error-message'>{errorMessage}</p>
			}

			<AppButton text={'copy new password'} onClickHandler={handleCopy}/>
		</div>
	);
};

export default PasswordResult;
