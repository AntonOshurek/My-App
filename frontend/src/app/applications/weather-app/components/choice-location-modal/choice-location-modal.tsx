import './choice-location-modal.scss';

const ChoiceLocationModal = (): JSX.Element => {
	return (
		<div className='choice-location-modal'>
			<section className='choice-location-modal__wrap'>
				<h2>Please, choice your city for show forecast</h2>

				<label className='basic-input'>
					<span className='basic-input__placeholder'>
						Search location
					</span>
					<input
						type="text"
					/>
				</label>

				<button
					className='weather-search-location__submit basic__weather-button basic__weather-button--main'
					type='button'
				>
					save location
					<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" aria-hidden='true'>
						<path fill="currentColor" d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3Zm1 8q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"></path>
					</svg>
				</button>
			</section>
		</div>
	);
};

export default ChoiceLocationModal;
