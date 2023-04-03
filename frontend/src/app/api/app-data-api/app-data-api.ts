//abstract classes
import { AbstractAppDataApi, AbstractStorageApi } from "../";
//API
import { appStorageApi } from "../";
//types
import type { IAppStoreDataType } from "../../types/store-data-types";
//data
import { basicAppStoreData } from "../../store/store-data/basic-app-store-data";

class AppDataApi extends AbstractAppDataApi {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(data: IAppStoreDataType, storageApi: AbstractStorageApi) {
		super(data, storageApi);
	};
};

const appDataApi = new AppDataApi(basicAppStoreData, appStorageApi);

export default appDataApi;
