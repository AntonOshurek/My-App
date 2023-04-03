//abstract api's
import AbstractStorageApi from "./storage-api/abstract-storage-api";
import AbstractAppDataApi from "./app-data-api/abstract-app-data-api";
//other api's
import appStorageApi from "./storage-api/my-app-storage-api";
import appDataApi from "./app-data-api/app-data-api";

export { AbstractAppDataApi, appDataApi, AbstractStorageApi, appStorageApi };
