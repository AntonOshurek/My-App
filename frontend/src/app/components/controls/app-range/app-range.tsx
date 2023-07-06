import { ChangeEvent } from 'react';
//styles
import './app-range.scss';

interface IAppRangePropsType {
	name: string,
	callback: (evt: ChangeEvent<HTMLInputElement>) => void,
	rangeValues: {
		min: number,
		max: number,
		value: number,
	},
};

const AppRange = ({ name, callback, rangeValues }: IAppRangePropsType): JSX.Element => {
	return (
		<label className='app-range'>
			<span className='app-range__name unselectable'>
				{name} - {rangeValues.value}
			</span>
			<input
				className='app-range__input'
				type="range"
				onChange={callback}
				min={rangeValues.min}
				max={rangeValues.max}
				value={rangeValues.value}
			/>
		</label>
	);
};

export default AppRange;
