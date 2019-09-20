import pino from 'pino'

const createLogger = (): pino.Logger => pino({ prettyPrint: process.env.NODE_ENV === 'development'})

export default createLogger()