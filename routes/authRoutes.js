const express = require('express'); // Import Express
const authController = require('../controllers/authController'); // Import authentication controller
const authenticateJWT = require('../middleware/authMiddleware'); // Import JWT authentication middleware
const router = express.Router(); // Create a new router

router.post('/signup', authController.register); // Register route
router.post('/create-otp', authController.generateOTP); // Generate OTP route
router.post('/verify-otp', authController.verifyOTP); // Verify OTP route
router.post('/invalidate-api-key', authenticateJWT, authController.invalidateApiKey); // Invalidate API key route

module.exports = router