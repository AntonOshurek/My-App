export function generateWindColor(windSpeed: number): string {

	// return 'rgba(235, 236, 237, 1)'
	// return 'rgba(255, 235, 170, 1)'
	// return 'rgba(255, 170, 170, 1)'

	if(windSpeed <= 7) {
		return 'rgba(235, 236, 237, 1)';
	} else if(windSpeed > 7 && windSpeed <= 14 ) {
		return 'rgba(255, 235, 170, 1)';
	} else if(windSpeed > 14) {
		return 'rgba(255, 170, 170, 1)';
	} else {
		return '#ffffff';
	}

	// if(windSpeed < 0.2) {	// ffffff - < 0,2 - Штиль
	// 	return '#ffffff';
	// } else if (windSpeed >= 0.3 && windSpeed <= 1.5) {	// AEF1F9 - 0,3-1,5 - Тихий
	// 	return '#AEF1F9';
	// } else if (windSpeed >= 1.6 && windSpeed <= 3.3) {	// 96F7DC - 1,6-3,3 - Лёгкий
	// 	return '#96F7DC';
	// } else if (windSpeed >= 3.4 && windSpeed <= 5.4) {	// 96F7B4 - 3,4-5,4 - Слабый
	// 	return '#96F7B4';
	// } else if (windSpeed >= 5.5 && windSpeed <= 7.9) {	// 6FF46F - 5,5-7,9 - Умеренный
	// 	return '#6FF46F';
	// } else if (windSpeed >= 8.0 && windSpeed <= 10.7) {	// 73ED12 - 8,0-10,7 - Свежий
	// 	return '#73ED12';
	// } else if (windSpeed >= 10.8 && windSpeed <= 13.8) {	// A4ED12 - 10,8-13,8 - Сильный
	// 	return '#A4ED12';
	// } else if (windSpeed >= 13.9 && windSpeed <= 17.1) {	// DAED12 - 13,9-17,1 - Крепкий
	// 	return '#DAED12';
	// } else if (windSpeed >= 17.2 && windSpeed <= 20.7) {	// EDC212 - 17,2-20,7 - Очень крепкий
	// 	return '#EDC212';
	// } else if (windSpeed >= 20.8 && windSpeed <= 24.4) {	// ED8F12 - 20,8-24,4 - Шторм
	// 	return '#ED8F12';
	// } else if (windSpeed >= 24.5 && windSpeed <= 28.4) {	// ED6312 - 24,5-28,4 - Сильный шторм
	// 	return '#ED6312';
	// } else if (windSpeed >= 28.5 && windSpeed <= 32.6) {	// ED2912 - 28,5-32,6 - Жестокий шторм
	// 	return '#ED2912';
	// } else if (windSpeed >= 32.7) {	// D5102D - 32,7 и более - Ураган
	// 	return '#D5102D';
	// } else {
	// 	return '#ffffff';
	// };
};
