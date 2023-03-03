export interface ITimeServiceGetTimeType {
	hours: string,
	minutes: string,
	seconds: string,
};

export type LanguageObjectType = {['abbreviation']: string, ['fullName']: string};

export type IGetLanguagesType = LanguageObjectType[];
