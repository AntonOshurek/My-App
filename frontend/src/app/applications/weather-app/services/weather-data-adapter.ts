import { IDefaultCurrentWeatherDataType, IDefaultLocationDataType } from "../types/weather-data-types";
import type { IAdaptedCurrentWeatherDataType, IAdaptedWeatherLocationDataType } from "../types/weather-adapted-data-types";

class WeatherDataAdapter {

	createCurrentWeatherDataAdapter(currentWeatherData: IDefaultCurrentWeatherDataType): IAdaptedCurrentWeatherDataType {
		return {
			cloudCover: currentWeatherData.cloud,
			condition: currentWeatherData.condition.text,
			conditionIcon: currentWeatherData.condition.icon,
			feelsLikeC: currentWeatherData.feelslike_c,
			feelsLikeF: currentWeatherData.feelslike_f,
			gustKPH: currentWeatherData.gust_kph,
			gustMPH: currentWeatherData.gust_mph,
			humidity: currentWeatherData.humidity,
			isDay: currentWeatherData.is_day,
			lastUpdated: currentWeatherData.last_updated,
			precipIn: currentWeatherData.precip_in,
			precipMM: currentWeatherData.precip_mm,
			pressureIn: currentWeatherData.pressure_in,
			pressureMB: currentWeatherData.pressure_mb,
			temperatureC: currentWeatherData.temp_c,
			temperatureF: currentWeatherData.temp_f,
			UVIndex: currentWeatherData.uv,
			visibilityKM: currentWeatherData.vis_km,
			visibilityMiles: currentWeatherData.vis_miles,
			windDegree: currentWeatherData.wind_degree,
			windDirection: currentWeatherData.wind_dir,
			windKPH: currentWeatherData.wind_kph,
			windMPH: currentWeatherData.wind_mph,
		};
	};

	createLocationWeatherDataAdapter(locationWeatherData: IDefaultLocationDataType): IAdaptedWeatherLocationDataType {
		return {
			name: locationWeatherData.name,
      region: locationWeatherData.region,
      country: locationWeatherData.country,
      lat: locationWeatherData.lat,
      lon: locationWeatherData.lon,
      tzid: locationWeatherData.tz_id,
      localtimeEpoch: locationWeatherData.localtime_epoch,
      localtime: locationWeatherData.localtime,
		};
	};
};

const weatherDataAdapter = new WeatherDataAdapter();

export default weatherDataAdapter;
