'use strict';

const Service = require('egg').Service;

class MessageService extends Service {
  async list(page, message){
    // await 数据库数据加载
  }

  async get(messageId){
    // await 数据库数据加载
  }
}

module.exports = MessageService;
