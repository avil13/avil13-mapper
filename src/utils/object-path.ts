export const objectPath = (obj: any, path: string | null) => {
  let value = obj;

  if (path) {
    path.split('.').forEach((key) => {
      value = value[key];
    });
  }

  return value;
};
