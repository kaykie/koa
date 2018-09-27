const router = require('koa-router')();
var Mock = require('mockjs');
const Random = Mock.Random; 
const publicService = require('../utils/publicService');
const request = require("../utils/request"); //封装响应拦截器

router.post('/api/url', async (ctx, next) => {
  try {
    let params = publicService.paramSerializer(ctx.request.body);
    const add = async function () {
      let data = await request.post({
        url: '需要转的url',
        body: params,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return data
    };
    ctx.body = await add();
  } catch (e) {
    console.log(e)
  }
})



module.exports = router;
