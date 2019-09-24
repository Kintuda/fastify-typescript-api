import fastify from 'fastify'
import { } from '../controllers/authorization'
import http from 'http'

export default async function authRouter(fastifyInstance: fastify.FastifyInstance) {
    fastifyInstance.get('/oauth/token', {
        schema: {
            headers: {
                type: 'object',
                properties: {
                    'Authorization': {
                        type: 'string',

                    }
                },
                required: [
                    'Authorization'
                ]
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        'access_token': {type: 'string'},
                        'expires_in': {type: 'number'}
                    }
                }
            }
        }
    }, (req, reply) => {
        console.log(req);
    })
}
