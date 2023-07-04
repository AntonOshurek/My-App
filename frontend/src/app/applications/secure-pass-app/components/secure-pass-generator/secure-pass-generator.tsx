//components
import { PasswordResult, PasswordGeneratorOptions } from '../';

const SecurePassGenerator = (): JSX.Element => {

	return (
		<section className='global-styles__double-app-block'>
			<h2 className='pass-generator__title unselectable visually-hidden'>Password generator</h2>

			<PasswordResult/>
			<PasswordGeneratorOptions/>
		</section>
	);
};

export default SecurePassGenerator;
