import { languagesData } from "../variables/languages";
import type { IGetLanguagesType } from "../types/services-types";

class LanguageService {
	private languagesData: IGetLanguagesType;

	constructor(languages: IGetLanguagesType) {
		this.languagesData = languages;
	}

	getLanguages() {
		return this.languagesData;
	}
};

const languageService = new LanguageService(languagesData);

export default languageService;
