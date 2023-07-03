//components
import  {BySubscription} from '../../../../components';
import {SecurePassGenerator} from '../';
//styles
import './secure-pass-wrap.scss';

const SecurePassWrap = (): JSX.Element => {
	return (
		<div className='secure-pass-wrap'>
			<SecurePassGenerator/>
			<BySubscription text='if you want save all your password in our database, you need buy a subscripton'/>
		</div>
	);
};

export default SecurePassWrap;
