export interface IAdaptedCurrentWeatherDataType {
  cloudCover: number;
  condition: string;
  conditionIcon: string;
  feelsLikeC: number;
  feelsLikeF: number;
  gustKPH: number;
  gustMPH: number;
  humidity: number;
  isDay: number;
  lastUpdated: string;
  precipIn: number;
  precipMM: number;
  pressureIn: number;
  pressureMB: number;
  temperatureC: number;
  temperatureF: number;
  UVIndex: number;
  visibilityKM: number;
  visibilityMiles: number;
  windDegree: number;
  windDirection: string;
  windKPH: number;
  windMPH: number;
};

export interface IAdaptedWeatherLocationDataType {
	name: string,
	region: string,
	country: string,
	lat: number,
	lon: number,
	tzid: string,
	localtimeEpoch: number,
	localtime: string,
};
