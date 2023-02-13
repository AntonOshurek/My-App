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
  return date.toLocaleTimeString();
}
