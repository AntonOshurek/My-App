import { useEffect, useState } from 'react';
//components
import { PasswordResult, PasswordGeneratorOptions } from '../';
//styles
import './secure-pass-generator.scss';

interface IPassOptions {
	length: number,
	uppercase: boolean,
	lowercase: boolean,
	numbers: boolean,
	symbols: boolean,
	phrase: string,
};

const SecurePassGenerator = (): JSX.Element => {
	const defaulstPassOptions: IPassOptions = {
		length: 20,
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
		// console.log(passOptions);
	}, [passOptions])

	return (
		<section className='global-styles__double-app-block'>
			<h2 className='visually-hidden'>Password generator</h2>

			<PasswordResult resultPssword={resultPassword}/>
			<PasswordGeneratorOptions lengtHandler={lengthHandler}/>
		</section>
	);
};

export default SecurePassGenerator;
