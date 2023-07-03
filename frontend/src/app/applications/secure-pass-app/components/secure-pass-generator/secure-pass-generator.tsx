import './secure-pass-generator.scss';

const SecurePassGenerator = (): JSX.Element => {
	return (
		<section className='pass-generator'>
			<h2 className='pass-generator__title unselectable'>Password generator</h2>

			<div className='pass-generator__wrap application-block-shadows'>
				<div className='pass-generator__result'>
					<h3 className='pass-generator__subtitle unselectable'>Your new Password</h3>

					<span className='pass-generator__pass-result pass-generator__item-styles'>
						06v~E:73oG~*mH2!WVN8+h62BxtRrc
					</span>

				</div>
				<div className='pass-generator__options unselectable'>
					<h3 className='pass-generator__subtitle'>choise options</h3>

					<label className='pass-generator__option pass-generator__option--full-width pass-generator__item-styles'>
						<span>Length</span>
						<input type="range" />
					</label>

					<label className='pass-generator__option pass-generator__item-styles'>
						<span>Include Uppercase</span>
						<input type="checkbox" />
					</label>

					<label className='pass-generator__option pass-generator__item-styles'>
						<span>Include Lowercase</span>
						<input type="checkbox" />
					</label>

					<label className='pass-generator__option pass-generator__item-styles'>
						<span>Include Numbers</span>
						<input type="checkbox" />
					</label>

					<label className='pass-generator__option pass-generator__item-styles'>
						<span>Include Symbols</span>
						<input type="checkbox" />
					</label>
				</div>
			</div>
		</section>
	);
};

export default SecurePassGenerator;
