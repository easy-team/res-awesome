
import { Application } from 'egg';
export default (app: Application) => {
  app.get('/', app.controller.render.reactServerRender);
  app.get('/ssr', app.controller.render.reactServerRender);
  app.get('/csr', app.controller.render.reactClientRender);
  app.get('/nun', app.controller.render.reactNunjucksRender);
};
