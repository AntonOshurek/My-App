import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
//store
import { useAppSelector } from "../../generic-utils/hooks/hooks";
import { SelectorGetMyCityState } from "../../store/selectors/app-selectors";
//types
import type { IInfoText } from "../../types/app-types";
//styles
import './search-locations.scss';

interface ISearchLocationsPropsType {
	cityInputHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
	onSaveCityButtonHandler: (evt: MouseEvent<HTMLButtonElement>) => void,
	city: string,
	message: IInfoText,
};

const SearchLocations = ({ cityInputHandler, onSaveCityButtonHandler, city, message }: ISearchLocationsPropsType): JSX.Element => {
	const myCity = useAppSelector(SelectorGetMyCityState);

	const [isVisible, setIsVisible] = useState(false);
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (message.error.length > 0 || message.message.length > 0) {

			if(timer !== null) {
				clearTimeout(timer);
			};

			setIsVisible(true);

      const newTimer = setTimeout(() => {
				setIsVisible(false);
      }, 3000);

			setTimer(newTimer);
    };

    return () => {
      if (timer) {
        clearTimeout(timer);
      };
    };
  }, [message]);

	return (
		<form className='search-location'>
			<label className='search-location__label'>
				<span className='search-location__placeholder'>
					Search location
				</span>

				{
					(isVisible) ? <p className="search-location__message">{message.error} {message.message}</p> : null
				}

				<input
					className='search-location__input'
					type="text" placeholder={myCity !== null ? myCity : ''}
					onChange={cityInputHandler}
					value={city}
				/>
			</label>

			<div className="search-location__controls">
				<button
					className='search-location__submit weather-button weather-button--main'
					type='button'
					onClick={onSaveCityButtonHandler}
				>
					save location
					<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" aria-hidden='true' focusable='false'>
						<path fill="currentColor" d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3Zm1 8q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"></path>
					</svg>
				</button>
			</div>
		</form>
	);
};

export default SearchLocations;
