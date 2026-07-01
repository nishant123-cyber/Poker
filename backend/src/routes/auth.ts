import { Router } from 'express';
import authController from '../controllers/authController';
import { authMiddleware, requireAuth } from '../middlewares/auth';

const router = Router();

// Public routes
router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));
router.post('/refresh', authController.refreshToken.bind(authController));

// Protected routes
router.get('/profile', authMiddleware, requireAuth, authController.getProfile.bind(authController));
router.put('/profile', authMiddleware, requireAuth, authController.updateProfile.bind(authController));

export default router;
