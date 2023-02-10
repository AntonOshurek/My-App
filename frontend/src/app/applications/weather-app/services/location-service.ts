import axios from "axios";
import { TRUE } from "sass";
//types
import { ICityType } from "../types/location-service-types";

class LocationService {
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
      console.error(error);
      throw error;
    };
  };

	async isARealCity(city: string): Promise<any> {
		try {
			const cityCheckResponse = await axios.get(
				`http://api.weatherapi.com/v1/search.json?key=05ecde74b40547f2a6f210042220912&q=${city}`
			);

			const cityData: ICityType[] = cityCheckResponse.data;

			if (!cityData || !cityData.length) {
				return Promise.reject(new Error(`"${city}" not found`));
			};

			let cityExist = false;

			cityData.map((cityItem) => {
				if(cityItem.name.toLowerCase() === city.toLowerCase()) {
					console.log(cityItem)
					cityExist = true
					return cityData;
				}
			});

			if(cityExist === false) {
				return Promise.reject(new Error(`"${city}" not found`));
			}

		} catch (error) {
			return Promise.reject(error);
		};
	};
};

const locationService = new LocationService();

export default locationService;
