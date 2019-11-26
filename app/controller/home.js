'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const sd = 'as';
    const sdwe = 'sdsdds';
    const hh = 'sdds';
    ctx.body = 'sdds';
    if (sd) {}
  }
}

module.exports = HomeController;
