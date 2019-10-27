const version = 'v1';
const baseURL = `/api/${version}`;

module.exports = (app) => {
  app.use(`${baseURL}/`, require(`./${version}/index`));
  app.use(`${baseURL}/users`, require(`./${version}/users`));
  app.use(`${baseURL}/simpleStorage`, require(`./${version}/simpleStorage`));
  app.use(`${baseURL}/deviceProfiles`, require(`./${version}/deviceProfiles`));
};