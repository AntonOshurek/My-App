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

			// console.log(cityData)

			return cityData.address.city;

      // return cityData.address.town || cityData.address.city || cityData.address.county || cityData.address.state;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const locationService = new LocationService();

export default locationService;
