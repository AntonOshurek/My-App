//components
import { SecurePassAppHeader, SecurePassWrap } from '../../components';
//styles
import './secure-pass-page.scss';

const SecurePassPage = (): JSX.Element => {
	return (
		<div className='secure-pass-page basic-main-block-styles'>
			<SecurePassAppHeader/>

			<main className='secure-pass-page__main'>
				<SecurePassWrap/>
			</main>
		</div>
	);
};

export default SecurePassPage;
