//types
import { IAppStoreDataType } from "../../types/store-data-types";
//data
import appStoreDataApi from "../../api/app-data-api/app-store-data-api";

export const appStoreData: IAppStoreDataType = appStoreDataApi.getData();
