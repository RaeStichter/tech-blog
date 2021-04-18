// import the needed packages
const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

// set what the routes are and where they go
router.use('/', homeRoutes);

// export router
module.exports = router;