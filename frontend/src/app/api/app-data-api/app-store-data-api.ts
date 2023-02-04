//abstract classes
import AbstractStoreDataApi from "./abstract-store-data-api";
//types
import type { IAppStoreDataType } from "../../types/store-data-types";
//data
import { basicAppStoreData } from "../../store/store-data/basic-app-store-data";

class AppStoreDataApi extends AbstractStoreDataApi {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(data: IAppStoreDataType) {
		super(data);
	};
};

const appStoreDataApi = new AppStoreDataApi(basicAppStoreData);

export default appStoreDataApi;
