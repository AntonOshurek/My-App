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
