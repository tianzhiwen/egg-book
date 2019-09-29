'use strict';
const Controller = require('egg').Controller;

const {response_struct} = require('../utils/ResponseUtils')

class BookController extends Controller{ 
    async index(){
        const {ctx} = this;
        ctx.set('Content-Type', 'application/json');
        ctx.body = response_struct(200, '成功返回，全部图书列表数据', 
        [
            {
                id: parseInt(Math.random() * 1000),
                name: '倚天屠龙记',
            },
            {
                id: parseInt(Math.random() * 1000),
                name: '倚天屠龙记',
            },
            {
                id: parseInt(Math.random() * 1000),
                name: '倚天屠龙记',
            },
            {
                id: parseInt(Math.random() * 1000),
                name: '倚天屠龙记',
            },
        ])
    }
    
    
    async show(){
        const {ctx} = this;
        ctx.set('Content-Type', 'application/json');
        let book_id = ctx.params.id
        ctx.body = response_struct(200, `成功返回，图书id:${book_id}的图书`, {
            id: book_id,
            name: '倚天屠龙记',
        });
    }

    


}
// const bookController = new BookController()
module.exports = BookController;


// exports.index = async (app) => {
//     const { ctx } = app;
//     ctx.body = 'index';
// };

// exports.new = async (app) => {
//     const { ctx } = app;
//     ctx.body = 'index';
// };

// exports.create = async (app) => {
//     const { ctx } = app;
//     ctx.body = 'index';
// };

// exports.show = async ({request, response, app}) => {
//     console.log(app)
//     response.body = 'index';
    
// };

// exports.edit = async (app) => {
//     const { ctx } = app;
//     ctx.body = 'index';
// };

// exports.update = async (app) => {
//     const { ctx } = app;
//     ctx.body = 'index';
// };

// exports.destroy = async (app) => {
//     const { ctx } = app;
//     ctx.body = 'index';
// };

