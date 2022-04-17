// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error, req, res, next) => {
  console.log(`Error handler! ⚠️ -> ${error}`);
  res.sendStatus(500);
};
