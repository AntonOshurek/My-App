import { IWeatherHourDataType, IWeatherOneDayDataType } from "../../applications/weather-app/types/weather-data-types";
import { getZero } from "../auxiliary/auxiliary";

export function formatDate(dateStr: string | undefined) {
	if(dateStr) {
		const date = new Date(dateStr);
		const options: {[value: string]: string} = { year: "numeric", month: "short", day: "numeric" };
		return date.toLocaleDateString("en-US", options);
	} else {
		return '';
	};
};

export function getWeekday(dateStr: string | undefined) {
	if(dateStr) {
		const date = new Date(dateStr);
		const options: {[value: string]: string} = { weekday: "long" };
		return date.toLocaleDateString("en-US", options);
	} else {
		return '';
	};
};

export function getAbbreviationWeekday(dateStr: string | undefined) {
	if(dateStr) {
		const date = new Date(dateStr);
		const options: {[value: string]: string} = { weekday: "short" };
		return date.toLocaleDateString("en-US", options);
	} else {
		return '';
	};
};

export function compareDates(date1: string, date2: Date | string) {
	const firstDate = new Date(date1);
	const secondDate = new Date(date2);

	if(firstDate.toDateString() === secondDate.toDateString()) {
		return true;
	} else {
		return false;
	};
};

export function getTimeFromString(dateString: string) {
  const date = new Date(dateString);
	return `${getZero(date.getHours())}:${getZero(date.getMinutes())}`;
}

export const getFullDate = (): string => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const dateMonth = +date.getMonth() + 1;
  const month: number | string = getZero(dateMonth);
  const day: number | string = getZero(date.getDate());

  const fullDate: string = `${day}-${month}-${year}`;

  return fullDate;
};

interface ICurrentTempAndHour {
	temp: string,
	hour: string,
};

export const getCurrentTempAndHour = (weather: IWeatherOneDayDataType): ICurrentTempAndHour => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

	let result: ICurrentTempAndHour = {
		temp: '',
		hour: currentHour.toString(),
	};

	if(compareDates(currentDate.toString(), weather.date)) {
		const filtredItems = weather.hour.find((item) => {
			const objectDate = new Date(item.time);
			const objectHour = objectDate.getHours();

			if(objectHour === currentHour) {
				return item;
			};
		});

		if(!filtredItems) {
			result.temp = weather.day.avgTempC.toString();
		} else {
			result.temp = filtredItems.tempC.toString();
		};

	} else {
		result.temp = weather.day.avgTempC.toString();
	};

	return result;
};

export const convertTo24HourFormat = (time: string): string => {
  const timeParts = time.split(':');
  const hours = parseInt(timeParts[0]);
  const period = timeParts[1].split(' ')[1];

  let convertedHours = hours;

  if (period === 'PM' && hours !== 12) {
    convertedHours += 12;
  };

  if (period === 'AM' && hours === 12) {
    convertedHours = 0;
  };

	console.log(`time - ${time}. period - ${period}. convertedHours - ${convertedHours}`);

  return convertedHours.toString();
};
