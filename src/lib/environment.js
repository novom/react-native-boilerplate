const envFile = require('../../environment.json');

export default {
  // Constants
  DEV: 'DEV',
  STAG: 'STAG',
  PROD: 'PROD',

  // Current environment
  current: envFile.environment.toUpperCase(),
};
