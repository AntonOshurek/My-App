import './secure-pass-generator.scss';

const SecurePassGenerator = (): JSX.Element => {
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

					<label className='pass-generator__option pass-generator__option--full-width'>
						<span>Length</span>
						<input className='pass-generator__range' type="range" />
					</label>

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
