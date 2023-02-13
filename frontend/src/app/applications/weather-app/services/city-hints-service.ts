//utils
import { replaceNonEnglish } from "../../../generic-utils/utils/replaceNonEnglish";
//variables
import { CITIES } from "../variables/cities";

class CityHintsService {
  private cities: string[];

  constructor(cities: string[]) {
    this.cities = cities;
  };

  getHints(query: string): string[] {
    // return this.cities.filter(city => city.toLowerCase().startsWith(query.toLowerCase()));
		return this.cities.filter((city) => city.toLowerCase().includes(replaceNonEnglish(query).toLowerCase()));
  };
};

const cityHintsService = new CityHintsService(CITIES);

export default cityHintsService;
