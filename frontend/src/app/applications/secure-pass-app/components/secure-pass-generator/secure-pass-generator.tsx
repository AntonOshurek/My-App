//components
import { PasswordResult, PasswordGeneratorOptions } from '../';
//styles
import './secure-pass-generator.scss';

const SecurePassGenerator = (): JSX.Element => {

	return (
		<section className='global-styles__double-app-block'>
			<h2 className='visually-hidden'>Password generator</h2>

			<PasswordResult/>
			<PasswordGeneratorOptions/>
		</section>
	);
};

export default SecurePassGenerator;
