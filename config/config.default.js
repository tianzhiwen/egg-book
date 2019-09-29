/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569652906768_6448';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {};

  const mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'tianzhw',
      // 数据库名
      database: 'Book',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // const sequelize = {
  //   dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  //   database: 'Book',
  //   host: 'localhost',
  //   port: '3306',
  //   username: 'root',
  //   password: 'tianzhw',
  // };
  return {
    ...config,
    ...userConfig,
    ...mysql,
  };
};
