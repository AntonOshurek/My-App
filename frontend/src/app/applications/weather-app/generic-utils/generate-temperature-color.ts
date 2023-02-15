export 	function generateTemperatureColor(temperature: number): string {
	const PLUS_TEM_RECORD: number = 40;
	const MINUS_TEMP_RECORD: number = 40;

	const BASE_RGB_RANGE: number = 255;

	if(temperature === 0) {
		return `rgba(255, 255, 255, 1)`;
	} else if(temperature > 0) {
		const TEMPERATURE_PERCENT = temperature * 100 / PLUS_TEM_RECORD;

		const G_COLOR_MAX = 77;
		const G_COLOR_MIN = 180;
		const G_COLOR_RANGE = G_COLOR_MIN - G_COLOR_MAX;
		const newGColor = G_COLOR_MIN - Math.round(G_COLOR_RANGE * TEMPERATURE_PERCENT / 100);

		const B_COLOR_MAX = 0;
		const B_COLOR_MIN = 148;
		const B_COLOR_RANGE = B_COLOR_MIN - B_COLOR_MAX;
		const newBColor = B_COLOR_MIN - Math.round(B_COLOR_RANGE * TEMPERATURE_PERCENT / 100);

		return `rgba(${BASE_RGB_RANGE}, ${newGColor}, ${newBColor}, 1)`;
	} else if(temperature < 0) {
		const TEMPERATURE_PERCENT = temperature * 100 / MINUS_TEMP_RECORD;

		const R_COLOR_MAX = 0;
		const R_COLOR_MIN = 186;
		const R_COLOR_RANGE = R_COLOR_MIN - R_COLOR_MAX;
		const newRColor = R_COLOR_MIN - Math.round(R_COLOR_RANGE * TEMPERATURE_PERCENT / 100);

		const G_COLOR_MAX = 89;
		const G_COLOR_MIN = 210;
		const G_COLOR_RANGE = G_COLOR_MIN - G_COLOR_MAX;
		const newGColor = G_COLOR_MIN - Math.round(G_COLOR_RANGE * TEMPERATURE_PERCENT / 100);

		return `rgba(${newRColor}, ${newGColor}, ${BASE_RGB_RANGE}, 1)`;
	} else {
		return ''
	};
};
