import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import http from 'http'

const apiHealthCheck = async (req: FastifyRequest<http.IncomingMessage>, reply: FastifyReply<http.ServerResponse>) => {
    return reply.code(200).send()
}

const apiHealthCheckAccount = async (req: FastifyRequest<http.IncomingMessage>, reply: FastifyReply<http.ServerResponse>) => {
    // const code: number = await healthCheckAccount()
    return reply.code(200).send()
}
const apiHealthCheckLicense = async (req: FastifyRequest<http.IncomingMessage>, reply: FastifyReply<http.ServerResponse>) => {
    // const code: number = await healthCheckLicense()
    return reply.code(200).send()
}

export { apiHealthCheck, apiHealthCheckAccount, apiHealthCheckLicense }