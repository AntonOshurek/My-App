//styles
import './error.scss';

interface IErrorPropsType {
	errorInfo: string;
};

const Error = ({ errorInfo }: IErrorPropsType): JSX.Element => {
	return (
		<div className='error'>
			<h3 className='error__info'>{errorInfo}</h3>
		</div>
	);
};

export default Error;
