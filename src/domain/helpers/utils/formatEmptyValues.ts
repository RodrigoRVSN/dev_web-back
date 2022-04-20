export const formatEmptyValues = (data: unknown) => {
  Object.keys(data).forEach((index) => {
    data[index] = data[index] === '' ? null : data[index];
  });
};
