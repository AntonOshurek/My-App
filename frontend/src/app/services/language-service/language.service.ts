//variables
import { languagesData } from "../../data/languages-data";
//types
import type { ILanguageService } from './language.service.interface';
import type { LanguagesDataType } from '../../types/data-types';

class LanguageService implements ILanguageService{
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
