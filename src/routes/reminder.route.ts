import { Router } from 'express';
import {
  createReminderHandler,
  deleteReminderHandler,
  getRemindersHandler, updateReminderHandler
} from "../controllers/reminder.controller";

export const reminderRoute = (router: Router) => {
  router.get('/', getRemindersHandler);

  router.post('/', createReminderHandler);

  router.put('/:id', updateReminderHandler);

  router.delete('/:id', deleteReminderHandler);

  return router
}

