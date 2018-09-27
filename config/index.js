var development_env = require('./development');
var test_env = require('./test');

// 根据不同的node_env，输出不同的对象，默认输出dev

module.exports = {
  development:development_env,
  test:test_env
}[process.env.NODE_ENV || 'development']
