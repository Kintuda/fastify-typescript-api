import fastify from 'fastify'
import http from 'http'
import log from './libs/logger'
import utilRouter from './routes/utils'

const server: fastify.FastifyInstance<
    http.Server,
    http.IncomingMessage,
    http.ServerResponse
> = fastify({ logger: log })

server.register(utilRouter)

export default server