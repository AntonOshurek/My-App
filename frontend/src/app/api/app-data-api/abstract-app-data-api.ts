//types
import { StoreDataTypes } from "../../types/store-data-types";
//abstract classes
import AbstractStorageApi from "../storage-api/abstract-storage-api";

abstract class AbstractAppDataApi {
	#data: StoreDataTypes
	#storageApi: AbstractStorageApi

	constructor(appData: StoreDataTypes, storageApi: AbstractStorageApi) {
		this.#data = appData;
		this.#storageApi = storageApi
	};

	private getDefaultData(): StoreDataTypes {
    return this.#data;
  };

	private getDataFromStorage(): StoreDataTypes | null {
    return this.#storageApi.getDataFromStorage();
  };

	getData(): StoreDataTypes {
    const resultFromStorage: StoreDataTypes | null = this.getDataFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultData();
    };
  };
};

export default AbstractAppDataApi;
