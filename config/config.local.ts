import { EggAppConfig } from 'egg';
import * as path from 'path';

export default (app: EggAppConfig) => {
  const config: any = {};

  config.development = {
    watchDirs: ['app'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config/manifest.json', 'app/lib/db/blog.json'] // 指定过滤的目录（包括子目录）
  };

  return config;
};
