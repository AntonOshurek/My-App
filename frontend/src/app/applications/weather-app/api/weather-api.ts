import axios, { AxiosInstance } from "axios";
//srvices
import locationService from "../../../services/location-service";
//adapters
import weatherDataAdapter from "../services/weather-data-adapter";
//types
import type { AdaptedDaysDataType } from "../types/weather-adapted-data-types";
//utils
import { replaceNonEnglish } from "../../../generic-utils/utils/replaceNonEnglish";

class WeatherApi {
  private WEATHER_API_INSTANCE: AxiosInstance;
	private WEATHER_API_KEY: string
	private WEATHER_API_URL: string
	private REQUEST_TIMEOUT: number = 5000;

  constructor(apiKey: string, apiUrl: string) {
		this.WEATHER_API_KEY = apiKey;
		this.WEATHER_API_URL = apiUrl;

    this.WEATHER_API_INSTANCE = axios.create({
      baseURL: this.WEATHER_API_URL,
      params: {
        key: this.WEATHER_API_KEY,
				timeout: this.REQUEST_TIMEOUT,
      },
    });
  };

  async getWeather(city: string, lang: string = 'eng'): Promise<AdaptedDaysDataType> {
		const currentCity: string = replaceNonEnglish(city);
		const days: number = 3;
		const currentLang: string = lang;

    try {
			const cityData = await locationService
			.isRealCity(currentCity)
			.then((result) => result)
			.catch((error) => Promise.reject(error));

			if (!cityData) {
				return Promise.reject(new Error(`City error: city - "${currentCity}" not found`));
			};

      const response = await this.WEATHER_API_INSTANCE.get(
				`forecast.json?q=${currentCity}&lang=${currentLang}&days=${days}`
			);

			if (response.status >= 200 && response.status < 300) {
				return weatherDataAdapter.createForecastDaysAdapter(response.data);
			} else {
				return Promise.reject(new Error(response.statusText));
			};

    } catch (error) {
			if(error instanceof Error) {
				return Promise.reject(new Error(error.message));
			} else {
				return Promise.reject('somthing wrong in getWeather.');
			};
    };
  };
};

const weatherApi = new WeatherApi(
	'05ecde74b40547f2a6f210042220912',
	'https://api.weatherapi.com/v1/'
	);

export default weatherApi;
