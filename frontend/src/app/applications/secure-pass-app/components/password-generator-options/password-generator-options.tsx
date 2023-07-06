import { ChangeEvent } from 'react';
//components
import { AppCheckbox, AppRange, AppInput } from '../../../../components/controls';
//variables
import { InputsTypes, passGeneratorCheckboxOptionsID } from '../../../../variables/app-variables';
//types
import type { IPassOptions } from '../../../../types/app-types';
//styles
import './password-generator-options.scss';

interface IPasswordGeneratorOptionsPropsType {
	passOptions: IPassOptions,
	lengtHandler: (length: number) => void,
	userValueHandler: (userPhrase: string) => void,
	optionsCheckboxHandler: (optionName: string) => void,
};

const PasswordGeneratorOptions = ({ lengtHandler, passOptions, userValueHandler, optionsCheckboxHandler }: IPasswordGeneratorOptionsPropsType): JSX.Element => {
	const onLengthRangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		const length = +evt.target.value;
		lengtHandler(length);
	};

	const onOptionCheckboxHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		const optionName = evt.target.value;
		const optionChecked = evt.target.checked;

		console.log(`${optionName} - ${optionChecked}`);

		optionsCheckboxHandler(optionName);
	};

	const onUserValueInputHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		userValueHandler(evt.target.value);
	};

	return (
		<div className='pass-generator__options'>
			<h3 className='secure-pass-generator__block-title unselectable'>choise options</h3>

			<AppRange
				callback={onLengthRangeHandler}
				name={'Length'}
				rangeValues={{min: 4, max: 40, value: passOptions.length}}
			/>

			<AppCheckbox
				callback={onOptionCheckboxHandler}
				name='Include Uppercase'
				value={passGeneratorCheckboxOptionsID.UPPERCASE}
				checked={passOptions[passGeneratorCheckboxOptionsID.UPPERCASE]}
			/>

			<AppCheckbox
				callback={onOptionCheckboxHandler}
				name='Include Lowercase'
				value={passGeneratorCheckboxOptionsID.LOWERCASE}
				checked={passOptions[passGeneratorCheckboxOptionsID.LOWERCASE]}
			/>

			<AppCheckbox
				callback={onOptionCheckboxHandler}
				name='Include Numbers'
				value={passGeneratorCheckboxOptionsID.NUMBERS}
				checked={passOptions[passGeneratorCheckboxOptionsID.NUMBERS]}
			/>

			<AppCheckbox
				callback={onOptionCheckboxHandler}
				name='Include Symbols'
				value={passGeneratorCheckboxOptionsID.SYMBOLS}
				checked={passOptions[passGeneratorCheckboxOptionsID.SYMBOLS]}
			/>

			<AppInput
				onChange={onUserValueInputHandler}
				name='Include phrase'
				type={InputsTypes.TEXT}
				placeholder=''
				value={passOptions.phrase}
			/>
		</div>
	);
};

export default PasswordGeneratorOptions;
