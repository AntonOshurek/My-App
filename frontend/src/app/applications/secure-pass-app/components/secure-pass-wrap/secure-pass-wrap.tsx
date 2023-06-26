//components
import { BySubscription } from '../../../../components';
//styles
import './secure-pass-wrap';

const SecurePassWrap = (): JSX.Element => {
	return (
		<div className='secure-pass-wrap'>
			<section>
				<h2>Password generator</h2>
			</section>

			<BySubscription text='if you want sava all your password in our database, you need buy a subscripton'/>
		</div>
	);
};

export default SecurePassWrap;
