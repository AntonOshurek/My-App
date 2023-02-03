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

export interface IAdaptedDayDataType {
	maxTempC: number;
	maxTempF: number;
	minTempC: number;
	minTempF: number;
	avgTempC: number;
	avgTempF: number;
	maxWindMph: number;
	maxWindKph: number;
	totalPrecipMm: number;
	totalPrecipIn: number;
	totalSnowCm: number;
	avgVisKm: number;
	avgVisMiles: number;
	avgHumidity: number;
	dailyWillItRain: number;
	dailyChanceOfRain: number;
	dailyWillItSnow: number;
	dailyChanceOfSnow: number;
	condition: {
		text: string;
		icon: string;
		code: number;
	};
	uv: number;
};

export interface IAdaptedAstroDataType {
	sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moonPhase: string;
  moonIllumination: string;
  isMoonUp: number;
  isSunUp: number;
};

export interface IAdaptedWeatherHourDataType {
	timeEpoch: number;
  time: string;
  tempC: number;
  tempF: number;
  isDay: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  windMph: number;
  windKph: number;
  windDegree: number;
  windDir: string;
  pressureMb: number;
  pressureIn: number;
  precipMm: number;
  precipIn: number;
  humidity: number;
  cloud: number;
  feelslikeC: number;
  feelslikeF: number;
  windchillC: number;
  windchillF: number;
  heatindexC: number;
  heatindexF: number;
  dewpointC: number;
  dewpointF: number;
  willItRain: number;
  chanceOfRain: number;
  willItSnow: number;
  chanceOfSnow: number;
  visKm: number;
  visMiles: number;
  gustMph: number;
  gustKph: number;
  uv: number;
};

export interface IAdaptedOneDayDataType {
  date: string;
  dateEpoch: number;
	day: IAdaptedDayDataType;
	astro: IAdaptedAstroDataType;
	hour: IAdaptedWeatherHourDataType[];
};
