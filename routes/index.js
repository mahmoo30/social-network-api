const router = require('express').Router();
const apiRoutes = require('./api');

// Requiring router for apiRoutes
router.use('/api', apiRoutes);
router.use((req, res) => res.send('Wrong route!'));

// Export router
module.exports = router;