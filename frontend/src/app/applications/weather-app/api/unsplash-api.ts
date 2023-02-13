import axios, {AxiosInstance} from "axios";
//utils
import { getRandomInt } from "../../../generic-utils/auxiliary/auxiliary";

interface ISearchImageType {
	imageUrl: string,
	userName: string,
	userPage: string,
};

class UnsplashApi {
   #API_KEY = "WSog3thiKnxry8lDG1ctSpH1VuRlt63PF79jqgi3pYE";
	 private UNSPLASH_INSTANCE: AxiosInstance;
	 private UNSPLASH_BASE_URL: string;
	 private UNSPLASH_API_KEY: string;

	 constructor(unsplashUrl: string, unsplashKey: string) {
		this.UNSPLASH_BASE_URL = unsplashUrl;
		this.UNSPLASH_API_KEY = unsplashKey;

		this.UNSPLASH_INSTANCE = axios.create({
			baseURL: this.UNSPLASH_BASE_URL,
			params: {
				key: this.UNSPLASH_API_KEY,
			},
		});
	 };

  async searchCity(cityName: string): Promise<ISearchImageType> {
    try {
			const response = await this.UNSPLASH_INSTANCE.get(
				`photos?query=${cityName}&client_id=${this.#API_KEY}`
			);

			if (response.status >= 200 && response.status < 300) {
				const count = response.data.results.length;
				const imageData = response.data.results[getRandomInt(count)];

				return {
					imageUrl: imageData.urls.regular,
					userName: imageData.user.name,
					userPage: imageData.user.links.html
				};
			} else {
				return Promise.reject(new Error(response.statusText))
			};

    } catch (error) {
      return Promise.reject(error);
    }
  };
};

const unsplashApi = new UnsplashApi('https://api.unsplash.com/search/', 'WSog3thiKnxry8lDG1ctSpH1VuRlt63PF79jqgi3pYE');

export default unsplashApi;
