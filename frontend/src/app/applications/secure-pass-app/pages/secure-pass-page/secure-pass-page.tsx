//components
import { SecurePassAppHeader, SecurePassPageWrap } from '../../components';
//styles
import './secure-pass-page.scss';

const SecurePassPage = (): JSX.Element => {
	return (
		// <div className='secure-pass-page'>
		// <main className='secure-pass-page__main'>
		<div className='global-styles__application-page'>
			<SecurePassAppHeader/>

			<main className='global-styles__application-main'>

				<SecurePassPageWrap/>

			</main>
		</div>
	);
};

export default SecurePassPage;
