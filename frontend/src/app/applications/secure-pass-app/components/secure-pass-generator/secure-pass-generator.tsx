import { useEffect, useState } from 'react';
//components
import { PasswordResult, PasswordGeneratorOptions } from '../';
//types
import { IPassOptions } from '../../../../types/app-types';
//styles
import './secure-pass-generator.scss';

const SecurePassGenerator = (): JSX.Element => {
	const defaulstPassOptions: IPassOptions = {
		length: 10,
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: false,
		phrase: '',
	};

	const [resultPassword, setResultPassword] = useState<string>('');
	const [passOptions, setPassOptions] = useState<IPassOptions>(defaulstPassOptions);

	const lengthHandler = (length: number): void => {
		setPassOptions((prev) => {
			return {
				...prev,
				length: length,
			}
		})
	};

	useEffect(() => {
		//here we will be generation new password
		// console.log(passOptions);
	}, [passOptions])

	return (
		<section className='global-styles__double-app-block'>
			<h2 className='visually-hidden'>Password generator</h2>

			<PasswordResult resultPssword={resultPassword}/>
			<PasswordGeneratorOptions lengtHandler={lengthHandler} passOptions={passOptions}/>
		</section>
	);
};

export default SecurePassGenerator;
