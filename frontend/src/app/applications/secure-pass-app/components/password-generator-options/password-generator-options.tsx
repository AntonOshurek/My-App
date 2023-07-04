import { ChangeEvent } from 'react';
//components
import { AppCheckbox, AppRange } from '../../../../components/controls';
//styles
import './password-generator-options.scss';

const PasswordGeneratorOptions = (): JSX.Element => {
	const onLengthRangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		console.log(evt.target.value);
	};

	const onOptionCheckboxHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		const optionName = evt.target.value;
		const optionChecked = evt.target.checked;

		console.log(`${optionName} - ${optionChecked}`);
	};

	return (
		<div className='pass-generator__options'>
			<h3 className='secure-pass-generator__block-title unselectable'>choise options</h3>

			<AppRange callback={onLengthRangeHandler} name={'Length'} rangeValues={{min: 4, max: 40}}/>

			<AppCheckbox callback={onOptionCheckboxHandler} name='Include Uppercase' value='Uppercase'/>
			<AppCheckbox callback={onOptionCheckboxHandler} name='Include Lowercase' value='Lowercase'/>
			<AppCheckbox callback={onOptionCheckboxHandler} name='Include Numbers' value='Numbers'/>
			<AppCheckbox callback={onOptionCheckboxHandler} name='Include Symbols' value='Symbols'/>
		</div>
	);
};

export default PasswordGeneratorOptions;
