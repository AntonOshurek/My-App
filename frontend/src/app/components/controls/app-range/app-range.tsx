import { ChangeEvent, useState } from 'react';
//styles
import './app-range.scss';

interface IAppRangePropsType {
	name: string,
	callback: (evt: ChangeEvent<HTMLInputElement>) => void,
	rangeValues: {
		min: number,
		max: number,
	},
};

const AppRange = ({ name, callback, rangeValues }: IAppRangePropsType): JSX.Element => {

	const [value, setValue] = useState<number>(0);

	const onRangeInputHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
		setValue(+evt.target.value)
		callback(evt);
	}

	return (
		<label className='app-range'>
			<span className='app-range__name unselectable'>
				{name} - {value}
			</span>
			<input
				className='app-range__input'
				type="range"
				onChange={onRangeInputHandler}
				min={rangeValues.min}
				max={rangeValues.max}
				value={value}
			/>
		</label>
	);
};

export default AppRange;
