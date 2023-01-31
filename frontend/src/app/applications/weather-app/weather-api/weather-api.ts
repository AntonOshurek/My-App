class WeatherApi {

  #key: string;
	#weather: {};

  constructor(key: string) {
    this.#key = key;
		this.#weather = {};
  }

	getKey() {
		return this.#key;
	}

	private updateWeatherData() {

	}

	getWeather() {
		return this.#weather;
	}

}

export default WeatherApi;
