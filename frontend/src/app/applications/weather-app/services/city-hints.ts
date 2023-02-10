//utils
import { replaceNonEnglish } from "../../../generic-utils/utils/replaceNonEnglish";
//variables
import { CITIES } from "../variables/cities";

class CityHints {
  private cities: string[];

  constructor(cities: string[]) {
    this.cities = cities;
  };

  getHints(query: string): string[] {
    // return this.cities.filter(city => city.toLowerCase().startsWith(query.toLowerCase()));
		return this.cities.filter((city) => city.toLowerCase().includes(replaceNonEnglish(query).toLowerCase()));
  };
}

const cityHints = new CityHints(CITIES);

export default cityHints;
