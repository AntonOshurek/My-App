import axios, { AxiosInstance } from "axios";
//types
import { IGetWeatherConfigurationType } from "../types/weather-app-types";

// class WeatherApi {
// 	#BACKEND_URL: string = 'http://api.weatherapi.com/v1';
//   	#KEY: string = '05ecde74b40547f2a6f210042220912';
// 	#REQUEST_TIMEOUT: number = 5000;
// 	#API: AxiosInstance;

//   constructor() {
// 		this.#API = axios.create({
// 			baseURL: this.#BACKEND_URL,
// 			timeout: this.#REQUEST_TIMEOUT,
// 		});
//   }

// 	//http://api.weatherapi.com/v1/forecast.json?key=05ecde74b40547f2a6f210042220912&q=Poznan&lang=ru&alerts=yes&days=3

// 	async getWeather(configuration: IGetWeatherConfigurationType) {
// 		const {days, lang, city} = configuration;

// 		return await this.#API.get(`/forecast.json?key=${this.#KEY}&q=${city}&lang=${lang}&days=${days}&alerts=yes`);
// 	};
// };

// const weatherApi = new WeatherApi();

// export default weatherApi;

class WeatherApi {
  private axiosInstance: AxiosInstance;
	private REQUEST_TIMEOUT: number = 5000;

  constructor(private apiKey: string) {
    this.axiosInstance = axios.create({
      baseURL: "http://api.weatherapi.com/v1/",
      params: {
        key: apiKey,
				timeout: this.REQUEST_TIMEOUT,
      }
    });
  }

  async getWeather(configuration: IGetWeatherConfigurationType): Promise<any> {
		const {days, lang, city} = configuration;

    try {
      const response = await this.axiosInstance.get(`forecast.json?q=${city}&lang=${lang}&days=${days}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

const weatherApi = new WeatherApi("05ecde74b40547f2a6f210042220912");

export default weatherApi;

// weatherApi.getWeather("London", "en").then(data => {
//   console.log(data);
// });
