import { getRandomInt } from "../../../generic-utils/auxiliary/auxiliary";

class Unsplash {
  private API_KEY = "WSog3thiKnxry8lDG1ctSpH1VuRlt63PF79jqgi3pYE";

  async searchCity(cityName: string) {
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${cityName}&client_id=${this.API_KEY}`);
      const data = await response.json();
			const count = data.results.length;
      const imageData = data.results[getRandomInt(count)];

      return {
        imageUrl: imageData.urls.regular,
        userName: imageData.user.name,
        userPage: imageData.user.links.html
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  };
};

const unsplash = new Unsplash();

export default unsplash;
