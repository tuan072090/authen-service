import express from 'express';
import example from './health-check/ping';

const router = express.Router();

router.use('/health-check', example);

export default router;
