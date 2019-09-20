import fastify from 'fastify'
import http from 'http'

export default async function utilsRouter(fastifyInstance: fastify.FastifyInstance){
    fastifyInstance.get('/status', (request, reply) => {
        reply.code(200).send()
    })
}