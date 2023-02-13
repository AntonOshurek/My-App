import axios, { AxiosInstance } from "axios";

class LocationService {
	#REQUEST_TIMEOUT: number = 5000;
	#OPEN_WEATHER_MAP_API_KEY = '3ee1caa005bcc97e06effbf8377e9a06';
	#OPEN_WEATHER_MAP_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
	#OPEN_WEATHER_MAP_INSTANCE: AxiosInstance;


	constructor() {
		this.#OPEN_WEATHER_MAP_INSTANCE = axios.create({
			baseURL: this.#OPEN_WEATHER_MAP_BASE_URL,
      params: {
        key: this.#OPEN_WEATHER_MAP_API_KEY,
				timeout: this.#REQUEST_TIMEOUT,
      }
		});
	};

  async getCurrentLocation(): Promise<string> {
    try {
      const position = await new Promise<any>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );

      const cityData = await response.json();

			return cityData.address.city;
    } catch (error) {
      throw error;
    };
  };

	async isRealCity(city: string): Promise<boolean> {
		try {
			const response = await this.#OPEN_WEATHER_MAP_INSTANCE.get(
				`weather?q=${city}&appid=${this.#OPEN_WEATHER_MAP_API_KEY}`
			);
			return response.data.cod === 200;
		} catch (error) {

			// if(error instanceof Error) {
			// 	console.log(error.message);
			// }

			return false
		};
	};

};

const locationService = new LocationService();

export default locationService;
