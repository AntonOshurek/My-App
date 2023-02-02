import { IDefaultDataForCurrentWeatherType } from "../types/weather-data-types";
import type { IAdaptedDataForCurrentWeatherType } from "../types/weather-adapted-data-types";

export function createCurrentWeatherDataAdapter(data: IDefaultDataForCurrentWeatherType): IAdaptedDataForCurrentWeatherType {
  return {
    location: {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      lat: data.location.lat,
      lon: data.location.lon,
      tzid: data.location.tz_id,
      localtimeEpoch: data.location.localtime_epoch,
      localtime: data.location.localtime,
    },
    current: {
			cloudCover: data.current.cloud,
			condition: data.current.condition.text,
			conditionIcon: data.current.condition.icon,
			feelsLikeC: data.current.feelslike_c,
			feelsLikeF: data.current.feelslike_f,
			gustKPH: data.current.gust_kph,
			gustMPH: data.current.gust_mph,
			humidity: data.current.humidity,
			isDay: data.current.is_day,
			lastUpdated: data.current.last_updated,
			precipIn: data.current.precip_in,
			precipMM: data.current.precip_mm,
			pressureIn: data.current.pressure_in,
			pressureMB: data.current.pressure_mb,
			temperatureC: data.current.temp_c,
			temperatureF: data.current.temp_f,
			UVIndex: data.current.uv,
			visibilityKM: data.current.vis_km,
			visibilityMiles: data.current.vis_miles,
			windDegree: data.current.wind_degree,
			windDirection: data.current.wind_dir,
			windKPH: data.current.wind_kph,
			windMPH: data.current.wind_mph
    },
  };
};
