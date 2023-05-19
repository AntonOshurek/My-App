//variables
import { languagesData } from "../data/languages-data";
//types
import type { LanguagesDataType } from '../types/data-types';

class LanguageService {
	private languagesData: LanguagesDataType;

	constructor(languages: LanguagesDataType) {
		this.languagesData = languages;
	}

	getLanguages(): LanguagesDataType {
		return this.languagesData;
	}
};

const languageService = new LanguageService(languagesData);

export default languageService;
