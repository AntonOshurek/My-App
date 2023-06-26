//components
import { AppNavigation } from '../../../../../components/navigation';
//styles
import './secure-pass-app-header';

const SecurePassAppHeader = (): JSX.Element => {
	return (
		<header className='secure-pass-app-header'>
			<h1 className='visually-hidden'>Secure password generator page</h1>

			<AppNavigation />
		</header>
	);
};

export default SecurePassAppHeader;
