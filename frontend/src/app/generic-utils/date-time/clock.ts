//utils
import { getZero } from "../auxiliary/auxiliary";
//types
import { IGetTime } from "../../types/generic-utils-types";

export const getTime = (): IGetTime => {
	const date = new Date();

	return {
		hours: getZero(date.getHours()),
		minutes: getZero(date.getMinutes()),
		seconds: getZero(date.getSeconds()),
	};
};
