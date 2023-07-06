export type SetActiveLinkType = {
	isActive: boolean,
};

export interface IInfoText {
	error: string,
	message: string,
};

export interface ISettingsSelectOptionDataType {
	['abbreviation']: string,
	['fullName']: string,
};

export type SettingsSelectDataType = ISettingsSelectOptionDataType[];

export interface IPassOptions {
	length: number,
	uppercase: boolean,
	lowercase: boolean,
	numbers: boolean,
	symbols: boolean,
	phrase: string,
};
