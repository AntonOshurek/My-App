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
		optionsCheckboxHandler(optionName);
	};

	const onUserValueInputHandler = (text: string): void => {
		userValueHandler(text);
	};

	const checkboxes = {
		[passGeneratorCheckboxOptionsID.LOWERCASE]: passOptions.lowercase,
		[passGeneratorCheckboxOptionsID.NUMBERS]: passOptions.numbers,
		[passGeneratorCheckboxOptionsID.UPPERCASE]: passOptions.upercase,
		[passGeneratorCheckboxOptionsID.SYMBOLS]: passOptions.symbols,
	};

	const shouldDisableCheckboxes = (checkboxName: passGeneratorCheckboxOptionsID) => {
		const isDisabled = Object.values(checkboxes).filter((isChecked) => isChecked).length;
		return checkboxes[checkboxName] && isDisabled === 1;
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
				disabled={shouldDisableCheckboxes(passGeneratorCheckboxOptionsID.UPPERCASE)}
			/>

			<AppCheckbox
				callback={onOptionCheckboxHandler}
				name='Include Lowercase'
				value={passGeneratorCheckboxOptionsID.LOWERCASE}
				checked={passOptions[passGeneratorCheckboxOptionsID.LOWERCASE]}
				disabled={shouldDisableCheckboxes(passGeneratorCheckboxOptionsID.LOWERCASE)}
			/>

			<AppCheckbox
				callback={onOptionCheckboxHandler}
				name='Include Numbers'
				value={passGeneratorCheckboxOptionsID.NUMBERS}
				checked={passOptions[passGeneratorCheckboxOptionsID.NUMBERS]}
				disabled={shouldDisableCheckboxes(passGeneratorCheckboxOptionsID.NUMBERS)}
			/>

			<AppCheckbox
				callback={onOptionCheckboxHandler}
				name='Include Symbols'
				value={passGeneratorCheckboxOptionsID.SYMBOLS}
				checked={passOptions[passGeneratorCheckboxOptionsID.SYMBOLS]}
				disabled={shouldDisableCheckboxes(passGeneratorCheckboxOptionsID.SYMBOLS)}
			/>

			<AppInput
				onChange={onUserValueInputHandler}
				name='Include phrase'
				type={InputsTypes.TEXT}
				placeholder='Write here your phrase'
				value={passOptions.phrase}
				maxLength={passOptions.length}
			/>
		</div>
	);
};

export default PasswordGeneratorOptions;
