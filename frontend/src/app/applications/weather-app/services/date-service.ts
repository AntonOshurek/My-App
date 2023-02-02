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
