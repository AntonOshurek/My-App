import './secure-pass-generator.scss';

const SecurePassGenerator = (): JSX.Element => {
	return (
		<section className='pass-generator'>
			<h2 className='pass-generator__title'>Password generator</h2>

			<div className='pass-generator__wrap application-block-shadows'>
				<div className='pass-generator__input'>
					<h3>Your new Password</h3>


				</div>
				<div className='pass-generator__options'>
					<h3>choise options</h3>
				</div>
			</div>
		</section>
	);
};

export default SecurePassGenerator;
