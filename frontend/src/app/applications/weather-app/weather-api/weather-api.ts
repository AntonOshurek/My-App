import axios, { AxiosInstance } from "axios";
//types
import { IGetWeatherConfigurationType } from "../types/weather-app-types";

class WeatherApi {
	#BACKEND_URL: string = 'http://api.weatherapi.com/v1';
  #KEY: string = '05ecde74b40547f2a6f210042220912';
	#REQUEST_TIMEOUT: number = 5000;
	#API: AxiosInstance;

  constructor() {
		this.#API = axios.create({
			baseURL: this.#BACKEND_URL,
			timeout: this.#REQUEST_TIMEOUT,
		});
  }

	//http://api.weatherapi.com/v1/forecast.json?key=05ecde74b40547f2a6f210042220912&q=Poznan&lang=ru&alerts=yes&days=3

	async getWeather(configuration: IGetWeatherConfigurationType) {
		const {days, lang, city} = configuration;

		return await this.#API.get(`/forecast.json?key=${this.#KEY}&q=${city}&lang=${lang}&days=${days}&alerts=yes`);
	};
};

const weatherApi = new WeatherApi();

export default weatherApi;
