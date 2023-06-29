const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Requiring router for userRoutes and thoughtRoutes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// Export router 
module.exports = router;