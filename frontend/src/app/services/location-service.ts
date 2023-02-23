import axios, { AxiosInstance } from "axios";

class LocationService {
	private OPEN_WEATHER_MAP_INSTANCE: AxiosInstance;
	private OPEN_WEATHER_MAP_API_KEY: string;
	private OPEN_WEATHER_MAP_BASE_URL: string;

	private STREET_MAP_INSTANCE: AxiosInstance;
	private STREET_MAP_BASE_URL: string;

	private REQUEST_TIMEOUT: number = 5000;

	constructor(weatherApiKey: string, weatherApiUrl: string, streetMapUrl: string) {
		this.OPEN_WEATHER_MAP_API_KEY = weatherApiKey;
		this.OPEN_WEATHER_MAP_BASE_URL = weatherApiUrl;

		this.OPEN_WEATHER_MAP_INSTANCE = axios.create({
			baseURL: this.OPEN_WEATHER_MAP_BASE_URL,
      params: {
        key: this.OPEN_WEATHER_MAP_API_KEY,
				timeout: this.REQUEST_TIMEOUT,
      },
		});

		this.STREET_MAP_BASE_URL = streetMapUrl;

		this.STREET_MAP_INSTANCE = axios.create({
			baseURL: this.STREET_MAP_BASE_URL,
      params: {
				timeout: this.REQUEST_TIMEOUT,
      },
		});
	};

  async getCurrentLocation(): Promise<string> {
    try {
			const position = await new Promise<GeolocationPosition>((resolve, reject) => {
				navigator.geolocation.getCurrentPosition((pos) => {
					resolve(pos as GeolocationPosition);
				}, reject);
			});

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

			const response = await this.STREET_MAP_INSTANCE.get(
				`reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
			);

			if (response.status >= 200 && response.status < 300) {
				return response.data.address.city;
			} else {
				return Promise.reject(new Error(response.statusText))
			};

    } catch (error) {
      throw error;
    };
  };

	async isRealCity(city: string): Promise<boolean> {
		try {
			const response = await this.OPEN_WEATHER_MAP_INSTANCE.get(
				`weather?q=${city}&appid=${this.OPEN_WEATHER_MAP_API_KEY}`
			);
			return response.data.cod === 200;
		} catch (error) {
			return false;
		};
	};

};

const locationService = new LocationService(
	'3ee1caa005bcc97e06effbf8377e9a06',
	'https://api.openweathermap.org/data/2.5/',
	'https://nominatim.openstreetmap.org/',
	);

export default locationService;
