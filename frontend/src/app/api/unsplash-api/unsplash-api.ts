import axios, {AxiosInstance} from "axios";
//utils
import { getRandomInt } from "../../generic-utils/auxiliary/auxiliary";

interface ISearchImageType {
	imageUrl: string,
	userName: string,
	userPage: string,
};

class UnsplashApi {
	private UNSPLASH_INSTANCE: AxiosInstance;
	private UNSPLASH_BASE_URL: string;
	private UNSPLASH_API_KEY: string;
	private UNSPLASH_RESERVE_KEYWORD: string;

	constructor(unsplashUrl: string, unsplashKey: string, reserveWord: string) {
	this.UNSPLASH_BASE_URL = unsplashUrl;
	this.UNSPLASH_API_KEY = unsplashKey;
	this.UNSPLASH_RESERVE_KEYWORD = reserveWord

	this.UNSPLASH_INSTANCE = axios.create({
		baseURL: this.UNSPLASH_BASE_URL,
		params: {
			key: this.UNSPLASH_API_KEY,
		},
	});
	};

  async getKeywordImage(keyword: string): Promise<ISearchImageType> {
    try {
			const response = await this.UNSPLASH_INSTANCE.get(
				`photos?query=${keyword}&client_id=${this.UNSPLASH_API_KEY}`
			);

			const count = response.data.results.length;

			if (response.status >= 200 && response.status < 300 && count > 0) {
				const imageData = response.data.results[getRandomInt(count)];

				return {
					imageUrl: imageData.urls.regular,
					userName: imageData.user.name,
					userPage: imageData.user.links.html
				};
			} else if (!count) {
				const response = await this.UNSPLASH_INSTANCE.get(
					`photos?query=${this.UNSPLASH_RESERVE_KEYWORD}&client_id=${this.UNSPLASH_API_KEY}`
				);

				const imageData = response.data.results[getRandomInt(response.data.results.length)];

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

const unsplashApi = new UnsplashApi('https://api.unsplash.com/search/', 'WSog3thiKnxry8lDG1ctSpH1VuRlt63PF79jqgi3pYE', 'weather');

export default unsplashApi;
