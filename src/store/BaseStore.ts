export default interface BaseStore {
  dispose: () => Promise<void> | void;
}
