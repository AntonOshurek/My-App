import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//store
import { useAppSelector } from "../../../../generic-utils/hooks/hooks";
import { SelectorGetMyCityState } from "../../../../store/selectors/app-selectors";
import { WeatherAppRoute } from "../../variables/weather-app-routes";
//styles
import './weather-search-locations.scss';

interface IWeatherSearchLocationsPropsType {
	cityInputHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
	onSaveCityButtonHandler: (evt: MouseEvent<HTMLButtonElement>) => void,
	city: string,
	message: string,
};

const WeatherSearchLocations = ({ cityInputHandler, onSaveCityButtonHandler, city, message }: IWeatherSearchLocationsPropsType): JSX.Element => {
	const myCity = useAppSelector(SelectorGetMyCityState);

	const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (message) {
			setIsVisible(true);
      timer = setTimeout(() => {
				setIsVisible(false);
      }, 3000);
    };

    return () => {
      if (timer) {
        clearTimeout(timer);
      };
    };
  }, [message]);

	return (
		<form className='weather-search-location'>
			<label className='weather-search-location__label'>
				<span className='weather-search-location__placeholder'>
					Search location
				</span>

				{
					(message && isVisible) ? <p className="weather-search-location__message">{message}</p> : null
				}

				<input
					className='weather-search-location__input'
					type="text" placeholder={myCity !== null ? myCity : ''}
					onChange={cityInputHandler}
					value={city}
				/>
			</label>



			<div className="weather-search-location__controls">
				<button
					className='weather-search-location__submit weather-button weather-button--main'
					type='button'
					onClick={onSaveCityButtonHandler}
				>
					save location
					<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" aria-hidden='true'>
						<path fill="currentColor" d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3Zm1 8q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"></path>
					</svg>
				</button>

				<Link
					className='weather-button weather-button--second'
					to={WeatherAppRoute.BACK_TO_WEATHER_APP}
				>
					back to forecast
				</Link>
			</div>
		</form>
	);
};

export default WeatherSearchLocations;
