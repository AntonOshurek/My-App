import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

class WeatherApi {
	#BACKEND_URL: string
  #key: string;
	#weather: any;
	#REQUEST_TIMEOUT: number = 5000;
	#api: AxiosInstance;

  constructor() {
    this.#key = '05ecde74b40547f2a6f210042220912';
		this.#BACKEND_URL = `http://api.weatherapi.com/v1`;
		this.#weather = {};

		this.#api = axios.create({
			baseURL: this.#BACKEND_URL,
			timeout: this.#REQUEST_TIMEOUT,
		});
  }

	//http://api.weatherapi.com/v1/forecast.json?key=05ecde74b40547f2a6f210042220912&q=Poznan&lang=ru&alerts=yes&days=3

	getKey() {
		return this.#key;
	}

	async fetchWeather() {
		await this.#api.get(`/forecast.json?key=${this.#key}&q=${'Poznan'}&lang=${'ru'}&alerts=yes&days=3`)
		.then(function (response) {
			// handle success
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.finally(function () {
			// always executed
		});
	}

	getWeather() {
		return this.#weather;
	}

}

// export default WeatherApi;

const weatherApi = new WeatherApi();

export default weatherApi;
