import express from 'express';
import authMiddleware from '../middleware/auth.middleware';
import roleMiddleware from '../middleware/role.middleware';

import {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
} from '../controllers/lead.controller';

const router = express.Router();

router.post('/', createLead);

router.get('/', getLeads);

router.put('/:id', updateLead);

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware(['Admin']),
  deleteLead
);

export default router;