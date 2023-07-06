import { useEffect, useState } from 'react';
//components
import { PasswordResult, PasswordGeneratorOptions } from '../';
//variables
import { defaulstPassOptions } from '../../../../variables/app-variables';
//types
import { IPassOptions } from '../../../../types/app-types';
//styles
import './secure-pass-generator.scss';

const SecurePassGenerator = (): JSX.Element => {
	const [resultPassword, setResultPassword] = useState<string>('');
	const [passOptions, setPassOptions] = useState<IPassOptions>(defaulstPassOptions);

	const lengthHandler = (length: number): void => {
		setPassOptions((prev) => {
			return {
				...prev,
				length: length,
			};
		});
	};

	const userValueHandler = (userPhrase: string): void => {
		setPassOptions((prev) => {
			return {
				...prev,
				phrase: userPhrase,
			};
		});
	};

	const optionsCheckboxHandler = (optionName: string): void => {
		const indexString: keyof IPassOptions = optionName as keyof IPassOptions;

		setPassOptions((prev) => {
			return {
				...prev,
				[optionName]: !prev[indexString],
			};
		});
	};

	useEffect(() => {
		//here we will be generation new password
		console.log(passOptions);
	}, [passOptions])

	return (
		<section className='global-styles__double-app-block'>
			<h2 className='visually-hidden'>Password generator</h2>

			<PasswordResult resultPssword={resultPassword}/>
			<PasswordGeneratorOptions
				lengtHandler={lengthHandler}
				passOptions={passOptions}
				userValueHandler={userValueHandler}
				optionsCheckboxHandler={optionsCheckboxHandler}
			/>
		</section>
	);
};

export default SecurePassGenerator;
