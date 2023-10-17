const mocky = require('mocky');
const SIGN_UP_HANDLERS = require('./handlers/signup');

mocky.createServer([...SIGN_UP_HANDLERS]).listen(4321);
