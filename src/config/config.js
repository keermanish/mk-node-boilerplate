// keep application config here
const config = {

  // mongodb URL
  'DB_URL': process.env.DB_URL || 'mongodb://localhost/Todo',

  // CORS support
  // provide comma seperated URL's which we wanted to allow
  // else application will be available to all
  'ALLOWED_ORIGINS': process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
};

export default config;
