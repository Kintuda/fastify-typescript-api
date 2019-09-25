import fastify from 'fastify'
import { apiHealthCheck, apiHealthCheckAccount, apiHealthCheckLicense } from '../controllers/utils'

export default async function utilsRouter(fastifyInstance: fastify.FastifyInstance) {
    fastifyInstance.route({ url: '/status', method: 'GET', handler: apiHealthCheck })
    fastifyInstance.route({ url: '/status/account', handler: apiHealthCheckAccount, method: 'GET' })
    fastifyInstance.route({ url: '/status/license', method: 'GET', handler: apiHealthCheckLicense })
}
