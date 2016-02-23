var rootDir = __dirname + '/';

module.exports = {
  
  config: function(conf) {
    'use strict';
    console.log('Using iui-list directives');
    conf.client.head.scripts.push(conf.client.app.root + '$iui-lists/dist/iui-lists.min.js');
  },

  app: function(app, conf) {
    'use strict';
    app.get('/\\$iui-lists/*', function(req, res) {
      res.sendfile(rootDir + req.params[0]);
    });
  }
};