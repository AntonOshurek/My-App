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

export function compareDates(date1: string, date2: string): boolean {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  return firstDate.getTime() === secondDate.getTime();
}
