//components
import {SecurePassGenerator} from "..";
import { BySubscription } from "../../../../components";

const SecurePassPageWrap = (): JSX.Element => {
	return (
		<>
			<SecurePassGenerator/>

			<BySubscription text='if you want save all your password in our database, you need buy a subscripton'/>
		</>
	);
};

export default SecurePassPageWrap;
