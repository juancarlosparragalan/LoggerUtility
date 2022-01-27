//1-Step Declare lib
var logger = require('./logger/logger');

//2-Step Use
logger.catcherLogGroup('Hello');

logger.catcherLog('hello world!','Optional Data');

logger.catcherLogGroup('ErrorLevel');

logger.catcherLogError('this is unCaught error!');

logger.catcherLogError('this is an Error!','Descrition Error!');

logger.catcherLogGroupEnd('ErrorLevel');

logger.catcherLogGroupEnd('Hello');