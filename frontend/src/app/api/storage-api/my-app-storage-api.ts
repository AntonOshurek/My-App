//abstract classes
import AbstractStorageApi from "./abstract-storage-api";
//types
import { ApplicationStorageApiNames } from "../../variables/variables";

class MyAppStorageApi extends AbstractStorageApi {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(name: ApplicationStorageApiNames.APP_STORAGE) {
    super(name);
  };
};

const myAppStorageApi = new MyAppStorageApi(ApplicationStorageApiNames.APP_STORAGE);

export default myAppStorageApi;
