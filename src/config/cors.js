// all CORS config goes here
import config from './config';

// CORS config
// give support for all incoming request mentioned in ALLOWED_ORIGINS
export const corsOptions = {
	'origin': (origin, callback) => {
		if(!Array.isArray(config.ALLOWED_ORIGINS)) {
			callback(null, true);

			return true;
		}

    if (config.ALLOWED_ORIGINS.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  'exposedHeaders': ['x-auth']
};
