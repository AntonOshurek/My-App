import { useState, useEffect, MouseEvent } from 'react';
//components
import PopularLocationItem from './popular-location-item/popular-location-item';
//styles
import './popular-locations.scss';

interface IPopularLocaionsPropsType {
	cityButtonHandler: (evt: MouseEvent<HTMLButtonElement>) => void,
	hintCity: string[] | null,
};

const PopularLocaions = ({ hintCity, cityButtonHandler }: IPopularLocaionsPropsType): JSX.Element => {

	const [cities, setCities] = useState<string[] | null>(hintCity)
	const [title, setTitle] = useState<string>('Popular locations');

	const defaultPopularCityes = ["New York", "London", "Paris", "Berlin", "Tokyo", "Wroclaw"]

	useEffect(() => {

		if(hintCity) {
			if(hintCity.length < 1 || hintCity[0] === '') {
				//show last results of hint cities! this is work :)
				//it's not a bug, it's a feature :)
			} else {
				setCities(hintCity.slice(0, 9));
				setTitle('Hint cities');
			};
		} else {
			setCities(defaultPopularCityes);
			setTitle('Popular locations');
		};

	}, [hintCity])


	return (
		<article className='popular-location'>
			<h3 className='popular-location__title'>{title}</h3>

			<ul className='popular-location__list'>

				{
					cities?.map((city, i) => {
						return <PopularLocationItem city={city} key={city + i} cityButtonHandler={cityButtonHandler}/>
					})
				}

			</ul>
		</article>
	);
};

export default PopularLocaions;
