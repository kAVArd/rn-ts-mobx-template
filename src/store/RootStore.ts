import Global, {GlobalStore} from './Global';

export enum Stores {
  globalStore = 'GLOBAL_STORE',
}

export enum StoresMethods {
  CleanStore = 'cleanStore',
}

export default class RootStore {
  public [Stores.globalStore]: GlobalStore;

  constructor() {
    this[Stores.globalStore] = new Global();
  }

  public [StoresMethods.CleanStore] = async (): Promise<void> => {
    await Promise.all(
      Object.values(Stores).map((store) => this[store].dispose()),
    );
  };
}

export const createRootStore = (): unknown => {
  return new RootStore();
};
