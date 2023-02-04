//abstract classes
import AbstractStorage from "./abstract-storage";
//types
import { ApplicationStorageApiNames } from "../../variables/variables";

class MyAppStorageApi extends AbstractStorage {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(name: ApplicationStorageApiNames.APP_STORAGE) {
    super(name);
  };
};

const myAppStorageApi = new MyAppStorageApi(ApplicationStorageApiNames.APP_STORAGE);

export default myAppStorageApi;
