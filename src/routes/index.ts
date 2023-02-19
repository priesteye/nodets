import express, { Express, Router } from 'express';
import { reminderRoute } from './reminder.route';
import { hello } from '../helper';

export default (app: Express) => {
  app.get('/api/healthcheck', (req, res) => {
    res.json({ halo: 'HALO SEASON 2' });
  });

  app.get('/api', (req: express.Request, res: express.Response) => {
    console.log(hello);
    res.send(hello);
  });

  app.use('/api/reminders', reminderRoute(Router()));
};
