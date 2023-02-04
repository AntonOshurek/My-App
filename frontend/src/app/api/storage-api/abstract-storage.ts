//types
import { StoreDataTypes } from "../../types/store-data-types";
//variables and consts
import { ApplicationStorageApiNames } from "../../variables/variables";

abstract class AbstractStorage {
  #name: ApplicationStorageApiNames;

  constructor(name: ApplicationStorageApiNames) {
    if(new.target === AbstractStorage) {
      throw new Error('can\'t instantiate AbstractStorage, only concrete one.');
    };

    this.#name = name;
  };

  getDataFromStorage(): StoreDataTypes | null {
    const jsonData: string | null = localStorage.getItem(this.#name);

    if(jsonData) {
      const parsedJsonData: StoreDataTypes = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    };
  };

  setData(items: StoreDataTypes) {
    localStorage.setItem(this.#name, JSON.stringify(items));
  };

  clearStore() {
    localStorage.removeItem(this.#name);
  };
}

export default AbstractStorage;
