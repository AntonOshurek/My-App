import axios, { AxiosInstance } from "axios";
//srvices
import locationService from "../services/location-service";
//types
import { IGetWeatherConfigurationType } from "../types/weather-app-types";
import {IAllWeatherDataType} from '../types/weather-data-types';

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

  async getWeather(getWeatherConfiguration: IGetWeatherConfigurationType): Promise<IAllWeatherDataType> {
		const {days, lang, city} = getWeatherConfiguration;

    try {
			const cityData = await locationService
			.isRealCity(city)
			.then((result) => result)
			.catch((error) => Promise.reject(error));

			if (!cityData) {
				return Promise.reject(new Error(`City error: city - "${city}" not found`));
			};

      const response = await this.WEATHER_API_INSTANCE.get(
				`forecast.json?q=${city}&lang=${lang}&days=${days}`
			);

			if (response.status >= 200 && response.status < 300) {
				return response.data;
			} else {
				return Promise.reject(new Error(response.statusText))
			};

    } catch (error) {

			if(error instanceof Error) {
				return Promise.reject(new Error(error.message))
			} else {
				return Promise.reject('somthing wrong in getWeather')
			};

    };
  }
};

const weatherApi = new WeatherApi(
	'05ecde74b40547f2a6f210042220912',
	'http://api.weatherapi.com/v1/'
	);

export default weatherApi;
