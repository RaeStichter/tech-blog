// import the needed packages
const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

// set what the routes are and where they go
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// export router
module.exports = router;