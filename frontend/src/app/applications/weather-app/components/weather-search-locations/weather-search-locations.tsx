import { ChangeEvent } from "react";
//styles
import './weather-search-locations.scss';

interface IWeatherSearchLocationsPropsType {
	handleCityInput: (evt: ChangeEvent<HTMLInputElement>) => void
};

const WeatherSearchLocations = ({ handleCityInput }: IWeatherSearchLocationsPropsType): JSX.Element => {

	return (
		<form className='weather-search-location'>
			<label className='weather-search-location__label'>
				<span className='weather-search-location__placeholder'>Search location</span>
				<input className='weather-search-location__input' type="text" placeholder='Poznań'
					onChange={handleCityInput}
				/>
			</label>

			<button className='weather-search-location__submit' type='button'>
				save location
				<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-hidden='true'>
					<path fill="currentColor" d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3Zm1 8q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"></path>
				</svg>
			</button>

      {/* {hint.length > 0 && (
        <ul>
          {hint.map((city: any) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      )} */}
		</form>
	);
};

export default WeatherSearchLocations;
