import fastify from 'fastify'
import { apiHealthCheck, apiHealthCheckAccount, apiHealthCheckLicense  } from '../controllers/utils'
import http from 'http'

export default async function utilsRouter(fastifyInstance: fastify.FastifyInstance) {
    fastifyInstance.get('/status', apiHealthCheck)
    fastifyInstance.get('/status/account', apiHealthCheckAccount)
    fastifyInstance.get('/status/license', apiHealthCheckLicense)
}
