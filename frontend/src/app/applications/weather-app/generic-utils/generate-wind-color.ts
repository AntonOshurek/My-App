export function generateWindColor(windSpeed: number): string {
	const WIND_SPEED_RECORD: number = 32;
	const WIND_PERCENT = windSpeed * 100 / WIND_SPEED_RECORD;

	const MAX_RGB_VALUE = 110;
	const MIN_RGB_VALUE = 191;

	const RGB_COLOR_RANGE = MIN_RGB_VALUE - MAX_RGB_VALUE;
	const newRGBColor = MIN_RGB_VALUE - Math.round(RGB_COLOR_RANGE * WIND_PERCENT / 100);

	return `rgb(${newRGBColor}, ${newRGBColor}, ${newRGBColor})`;
};
