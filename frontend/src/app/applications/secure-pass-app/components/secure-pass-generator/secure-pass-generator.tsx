import { ChangeEvent } from 'react';
//components
import { AppRange, AppCheckbox } from '../../../../components/controls';
//styles
import './secure-pass-generator.scss';

const SecurePassGenerator = (): JSX.Element => {

	const onLengthRangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		console.log(evt.target.value);
	};

	const onOptionCheckboxHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		const optionName = evt.target.value;
		const optionChecked = evt.target.checked;

		console.log(`${optionName} - ${optionChecked}`);
	};


	return (
		<section className='pass-generator'>
			<h2 className='pass-generator__title unselectable'>Password generator</h2>

			<div className='pass-generator__wrap application-block-shadows'>
				<div className='pass-generator__result'>
					<h3 className='pass-generator__subtitle unselectable'>Your new Password</h3>

					<span className='pass-generator__pass-result'>
						06v~E:73oG~*mH2!WVN8+h62BxtRrc
					</span>

				</div>
				<div className='pass-generator__options unselectable'>
					<h3 className='pass-generator__subtitle'>choise options</h3>

					<AppRange callback={onLengthRangeHandler} name={'Length'} rangeValues={{min: 4, max: 40}}/>

					<AppCheckbox callback={onOptionCheckboxHandler} name='Include Uppercase' value='Uppercase'/>
					<AppCheckbox callback={onOptionCheckboxHandler} name='Include Lowercase' value='Lowercase'/>
					<AppCheckbox callback={onOptionCheckboxHandler} name='Include Numbers' value='Numbers'/>
					<AppCheckbox callback={onOptionCheckboxHandler} name='Include Symbols' value='Symbols'/>
				</div>
			</div>
		</section>
	);
};

export default SecurePassGenerator;
