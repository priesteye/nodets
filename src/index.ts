import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes/index';

(async () => {
  if (process.env.NODE_ENV) {
    dotenv.config({
      path: `${__dirname}/.env.${process.env.NODE_ENV}`,
    });
  } else {
    dotenv.config();
  }

  // explicit conversion
  const HOST = <string>process.env.HOST || 'localhost';
  const PORT = parseInt(<string>process.env.PORT, 10) || 8000;

  const app = express();

  app.use(helmet());
  app.use(cors({ origin: ['http://localhost:3000'] }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes(app);

  app.listen(PORT, HOST, () => {
    console.info(`Server listening at http://${HOST}:${PORT}/api`);
  });
})();
