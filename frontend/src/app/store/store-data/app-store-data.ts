//types
import type { IAppStoreDataType } from "../../types/store-data-types";
//API
import { appDataApi } from "../../api/";

export const appStoreData: IAppStoreDataType = appDataApi.getData();
