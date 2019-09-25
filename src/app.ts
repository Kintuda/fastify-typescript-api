import fastify from 'fastify'
import http from 'http'
import log from './libs/logger'
import utilRouter from './routes/utils'
import authRouter from './routes/auth'

const server: fastify.FastifyInstance<
    http.Server,
    http.IncomingMessage,
    http.ServerResponse
> = fastify({ logger: log })

server.register(require('fastify-cors'))
server.register(require('fastify-helmet'))
server.register(utilRouter)
server.register(authRouter)

export default server