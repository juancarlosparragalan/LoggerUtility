const {
    createLogger,
    format,
    transports
} = require('winston');
const {
    combine,
    timestamp,
    ms,
    prettyPrint
} = format;
const service = 'Emulator',
    folder = 'logs/';

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(), ms(),
        prettyPrint()),
    defaultMeta: {
        service: service
    },
    transports: [
        new transports.File({
            filename: folder + 'error.log',
            level: 'error'
        }),
        new transports.File({
            filename: folder + 'info.log',
            level: 'info'
        })
    ],
});

module.exports = {
    async catcherLog(message, data = null) {
        if (data)
            message = message + ' - ' + data;
        try {
            logger.info(message)
            console.log(message)
        } catch (error) {
            logger.error(message)
            console.error(message)
        }
    },
    async catcherLogError(message, data = null) {
        try {
            let messageGroup = message;
            if (data) {
                console.group(messageGroup);
                message = message + ' - ' + data;
                console.error(message)
                logger.error(message)
                console.groupEnd(messageGroup)
            }else{
                console.error(message)
                logger.error(message)
            }
        } catch (error) {
            logger.error(error)
            console.error(error)
        }
    },
    async catcherLogGroup(message) {
        try {
            logger.info(message)
            console.group(message)
        } catch (error) {
            logger.error(message)
            console.error(message)
        }
    },
    async catcherLogGroupEnd(message) {
        try {
            console.groupEnd(message)
        } catch (error) {
            logger.error(message)
            console.error(message)
        }
    }
}