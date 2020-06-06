// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccess from '../../../app/middleware/access';
import ExportLocal from '../../../app/middleware/local';

declare module 'egg' {
  interface IMiddleware {
    access: typeof ExportAccess;
    local: typeof ExportLocal;
  }
}
