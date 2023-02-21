//utils
import { getZero } from "../generic-utils/auxiliary/auxiliary";
//types
import type { ITimeServiceGetTimeType } from "../types/services-types";

class TimeService {
	getTime(): ITimeServiceGetTimeType {
		const currentTime = new Date()
		return {
			hours: getZero(currentTime.getHours()),
			minutes: getZero(currentTime.getMinutes()),
			seconds: getZero(currentTime.getSeconds()),
		};
	};
};

const timeService = new TimeService();

export default timeService;
