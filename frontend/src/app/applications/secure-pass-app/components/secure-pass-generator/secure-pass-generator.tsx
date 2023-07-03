import { ChangeEvent } from 'react';
//components
import { AppRange } from '../../../../components/controls';
//styles
import './secure-pass-generator.scss';

const SecurePassGenerator = (): JSX.Element => {

	const callback = (evt: ChangeEvent<HTMLInputElement>): void => {
		console.log(evt.target.value);
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

					<AppRange callback={callback} name={'Length'} rangeValues={{min: 0, max: 40}}/>

					<label className='pass-generator__option'>
						<span className='pass-generator__option-title'>Include Uppercase</span>
						<input className='visually-hidden pass-generator__option__checkbox' type="checkbox" />
						<div className='pass-generator__option-switch'></div>
					</label>

					<label className='pass-generator__option'>
						<span className='pass-generator__option-title'>Include Lowercase</span>
						<input className='visually-hidden pass-generator__option__checkbox' type="checkbox" />
						<div className='pass-generator__option-switch'></div>
					</label>

					<label className='pass-generator__option'>
						<span className='pass-generator__option-title'>Include Numbers</span>
						<input className='visually-hidden pass-generator__option__checkbox' type="checkbox" />
						<div className='pass-generator__option-switch'></div>
					</label>

					<label className='pass-generator__option'>
						<span className='pass-generator__option-title'>Include Symbols</span>
						<input className='visually-hidden pass-generator__option__checkbox' type="checkbox" />
						<div className='pass-generator__option-switch'></div>
					</label>
				</div>
			</div>
		</section>
	);
};

export default SecurePassGenerator;
