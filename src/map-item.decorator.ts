import { objectPath } from './utils/object-path';

export function MapperItem(
  dataPath: string,
  dataItemPath: string | null,
  handler?: (item: any) => any,
) {
  return (target: Object, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      configurable: false,
      enumerable: true,
      get() {
        const data = this[dataPath];
        const res = objectPath(data, dataItemPath);
        return handler ? handler(res) : res;
      },
    });
  };
}
