//abstract classes
import { AbstractStorageApi } from "../";
//variables and consts
import { ApplicationStorageApiNames } from "../../variables/app-variables";

class AppStorageApi extends AbstractStorageApi {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(name: ApplicationStorageApiNames.APP_STORAGE) {
    super(name);
  };
};

const appStorageApi = new AppStorageApi(ApplicationStorageApiNames.APP_STORAGE);

export default appStorageApi;
