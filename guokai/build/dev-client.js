/*
    最后是build文件夹下面两个比较简单的文件，dev-client.js似乎没有使用到，代码也比较简单，这里不多讲。
    check-version.js完成对node和npm的版本检测，下面是其代码注释：
*/
/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
