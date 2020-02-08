import * as path from 'path';
import * as fs from 'fs';
import { EggAppConfig } from 'egg';
export default function(app: EggAppConfig) {
  const exports: any = {};

  exports.middleware = [
    'local',
  ];

  return exports;
}
