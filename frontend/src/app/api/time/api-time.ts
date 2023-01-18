//utils
import { getZero } from "../../generic-utils/auxiliary/auxiliary";
//types
// import { IGetTime } from "../../types/generic-utils-types";
import { IGetTime } from "../../types/api-types";

class APITime {
	getTime(): IGetTime {
		const currentTime = new Date()
		return {
			hours: getZero(currentTime.getHours()),
			minutes: getZero(currentTime.getMinutes()),
			seconds: getZero(currentTime.getSeconds()),
		};
	};
};

const ApiTime = new APITime();

export default ApiTime;
