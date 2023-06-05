//types
import type {
	IDefaultCurrentWeatherDataType,
	IDefaultLocationDataType,
	IAllWeatherDataType
} from "../types/source-weather-data-types";

import type {
	IWeatherAllDaysDataType,
	IWeatherCurrentDataType,
	IWeatherHourDataType,
	IWeatherLocationDataType,
	IWeatherOneDayDataType,
} from "../types/weather-data-types";

import type { IOneDayDataType } from "../types/source-weather-data-types";

class WeatherDataAdapter {

	createCurrentWeatherDataAdapter(currentWeatherData: IDefaultCurrentWeatherDataType): IWeatherCurrentDataType {
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

	createLocationWeatherDataAdapter(locationWeatherData: IDefaultLocationDataType): IWeatherLocationDataType {
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

	createForecastDayAdapter(dayData: IOneDayDataType): IWeatherOneDayDataType {
		return {
			date: dayData.date,
			dateEpoch: dayData.date_epoch,
			day: {
				maxTempC: dayData.day.maxtemp_c,
				maxTempF: dayData.day.maxtemp_f,
				minTempC: dayData.day.mintemp_c,
				minTempF: dayData.day.mintemp_f,
				avgTempC: dayData.day.avgtemp_c,
				avgTempF: dayData.day.avgtemp_f,
				maxWindMph: dayData.day.maxwind_mph,
				maxWindKph: dayData.day.maxwind_kph,
				totalPrecipMm: dayData.day.totalprecip_mm,
				totalPrecipIn: dayData.day.totalprecip_in,
				totalSnowCm: dayData.day.totalsnow_cm,
				avgVisKm: dayData.day.avgvis_km,
				avgVisMiles: dayData.day.avgvis_miles,
				avgHumidity: dayData.day.avghumidity,
				dailyWillItRain: dayData.day.daily_will_it_rain,
				dailyChanceOfRain: dayData.day.daily_chance_of_rain,
				dailyWillItSnow: dayData.day.daily_will_it_snow,
				dailyChanceOfSnow: dayData.day.daily_chance_of_snow,
				condition: {
					text: dayData.day.condition.text,
					icon: dayData.day.condition.icon,
					code: dayData.day.condition.code,
				},
				uv: dayData.day.uv,
			},
			astro: {
				sunrise: dayData.astro.sunrise,
				sunset: dayData.astro.sunset,
				moonrise: dayData.astro.moonrise,
				moonset: dayData.astro.moonset,
				moonPhase: dayData.astro.moon_phase,
				moonIllumination: dayData.astro.moon_illumination,
				isMoonUp: dayData.astro.is_moon_up,
				isSunUp: dayData.astro.is_sun_up,
			},
			hour: dayData.hour.map((hour): IWeatherHourDataType => {
				return {
					timeEpoch: hour.time_epoch,
					time: hour.time,
					tempC: hour.temp_c,
					tempF: hour.temp_f,
					isDay: hour.is_day,
					condition: {
						text: hour.condition.text,
						icon: hour.condition.icon,
						code: hour.condition.code,
					},
					windMph: hour.wind_mph,
					windKph: hour.wind_kph,
					windDegree: hour.wind_degree,
					windDir: hour.wind_dir,
					pressureMb: hour.pressure_mb,
					pressureIn: hour.pressure_in,
					precipMm: hour.precip_mm,
					precipIn: hour.precip_in,
					humidity: hour.humidity,
					cloud: hour.cloud,
					feelslikeC: hour.feelslike_c,
					feelslikeF: hour.feelslike_f,
					windchillC: hour.windchill_c,
					windchillF: hour.windchill_f,
					heatindexC: hour.heatindex_c,
					heatindexF: hour.heatindex_f,
					dewpointC: hour.dewpoint_c,
					dewpointF: hour.dewpoint_f,
					willItRain: hour.will_it_rain,
					chanceOfRain: hour.chance_of_rain,
					willItSnow: hour.will_it_snow,
					chanceOfSnow: hour.chance_of_snow,
					visKm: hour.vis_km,
					visMiles: hour.vis_miles,
					gustMph: hour.gust_mph,
					gustKph: hour.gust_kph,
					uv: hour.uv,
				};
			}),
		};
	};

	createForecastDaysAdapter(data: IAllWeatherDataType): IWeatherAllDaysDataType {
		const days: IWeatherAllDaysDataType = [];

		data.forecast.forecastday.map((dayWeather: IOneDayDataType) => {
			days.push(this.createForecastDayAdapter(dayWeather));
		});

		return days;
	}
};

const weatherDataAdapter = new WeatherDataAdapter();

export default weatherDataAdapter;
