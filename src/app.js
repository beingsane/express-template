import 'dotenv/config';


// import * as Sentry from '@sentry/node';
import cors from 'cors';
import express from 'express';
// import path from 'path';
import Youch from 'youch';
import 'express-async-errors';

// import sentryConfig from './config/sentry';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    // Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    // this.server.use(Sentry.Handlers.requestHandler());
    // this.server.use(cors({ origin: 'https://rocketseat.com.br' }));
    this.server.use(cors());
    this.server.use(express.json());

    // Serve statics files.
    // this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
  }

  routes() {
    this.server.use(routes);
    // this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    // Middlewate with four params it is a middleware for handle exceptions.
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
