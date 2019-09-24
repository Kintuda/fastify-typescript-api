import fastify, { FastifyReply, FastifyRequest} from 'fastify'
import http from 'http'

const createClientCredentials = async(req: FastifyRequest<http.IncomingMessage>, reply: FastifyReply<http.ServerResponse>) =>{
    try {
        const { headers, body} = req
    } catch (error) {
        
    }
}

export {createClientCredentials}