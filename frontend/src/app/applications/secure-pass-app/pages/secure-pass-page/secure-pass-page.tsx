//components
import { BySubscription } from '../../../../components';
import { SecurePassAppHeader, SecurePassGenerator } from '../../components';
//styles
import './secure-pass-page.scss';

const SecurePassPage = (): JSX.Element => {
	return (
		<div className='secure-pass-page container'>
			<SecurePassAppHeader/>

			<main className='secure-pass-page__main'>
				<SecurePassGenerator/>

				<BySubscription text='if you want save all your password in our database, you need buy a subscripton'/>
			</main>
		</div>
	);
};

export default SecurePassPage;
