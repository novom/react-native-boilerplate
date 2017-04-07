/* eslint-disable global-require*/
import env from './environment';

let envSettings;

switch (env.current) {
  case env.PROD:
    envSettings = require('../../settings/production.json');
    break;
  case env.STAG:
    envSettings = require('../../settings/staging.json');
    break;
  default:
    // Disabled since CI does not have this file
    // eslint-disable-next-line import/no-unresolved
    envSettings = require('../../settings/development.json');
    break;
}

const settings = envSettings;

export default settings;
