//abstract classes
import AbstractStoreDataApi from "./abstract-store-data-api";
import AbstractStorageApi from "../storage-api/abstract-storage-api";
//API
import myAppStorageApi from "../storage-api/my-app-storage-api";
//types
import type { IAppStoreDataType } from "../../types/store-data-types";
//data
import { basicAppStoreData } from "../../store/store-data/basic-app-store-data";

class AppStoreDataApi extends AbstractStoreDataApi {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(data: IAppStoreDataType, storageApi: AbstractStorageApi) {
		super(data, storageApi);
	};
};

const appStoreDataApi = new AppStoreDataApi(basicAppStoreData, myAppStorageApi);

export default appStoreDataApi;
