const routes = require('next-routes');
module.exports = routes()
   /* list of static pages */
   // .add('crowds', '/crowds', '/crowds')
   // .add('comingsoon', '/comingsoon', '/comingsoon')
   // .add('creator', '/creator', '/creator')
   .add('index', '/', '/creator');