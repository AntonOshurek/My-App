import axios, { AxiosInstance } from "axios";
//types
import { IGetWeatherConfigurationType } from "../types/weather-app-types";

class WeatherApi {
  private axiosInstance: AxiosInstance;
	private REQUEST_TIMEOUT: number = 5000;
	private KEY: string

  constructor(apiKey: string) {
		this.KEY = apiKey;
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
			// check if the city is a real city
			const cityCheckResponse = await axios.get(
				`http://api.weatherapi.com/v1/search.json?key=${this.KEY}&q=${city}`
			);

			const cityData = cityCheckResponse.data;

			if (!cityData || !cityData.length) {
				return Promise.reject(new Error(`City error "${city}" not found`));
			}

      const response = await this.axiosInstance.get(
				`forecast.json?q=${city}&lang=${lang}&days=${days}`
			);

      return response.data;
    } catch (error) {
			return Promise.reject(error);
    };
  }
}

const weatherApi = new WeatherApi("05ecde74b40547f2a6f210042220912");

export default weatherApi;
