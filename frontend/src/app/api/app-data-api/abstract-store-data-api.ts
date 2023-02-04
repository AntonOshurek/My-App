//types
import { StoreDataTypes } from "../../types/store-data-types";
//API
import myAppStorageApi from "../storage-api/my-app-storage";

abstract class AbstractStoreDataApi {
	#data: StoreDataTypes

	constructor(appData: StoreDataTypes) {
		this.#data = appData;
	};

	private getDefaultData(): StoreDataTypes {
    return this.#data;
  };

	private getDataFromStorage(): StoreDataTypes | null {
    return myAppStorageApi.getDataFromStorage();
		//change this for abstract class method who must be a realize in instance this class!
		//or add for this.#storageApi currently storage instance of api class
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

export default AbstractStoreDataApi;
