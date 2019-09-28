'use strict';

const Controller = require('egg').Controller;

class MessageController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.request.query.page | 1
    ctx.service.message.page(page, );
  }

  async get() {
    const ctx = this.ctx;
    const id = ctx.request.query.id;
    ctx.service.message.get(id);
  }


}

module.exports = MessageController;
