//variables
import { passGeneratorCheckboxOptionsID } from "../variables/app-variables";

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
	'length': number,
	[passGeneratorCheckboxOptionsID.LOWERCASE]: boolean,
	[passGeneratorCheckboxOptionsID.UPPERCASE]: boolean,
	[passGeneratorCheckboxOptionsID.NUMBERS]: boolean,
	[passGeneratorCheckboxOptionsID.SYMBOLS]: boolean,
	'phrase': string,
};
