import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import CONFIG from '../config/global'

const heathCheck = async (config: AxiosRequestConfig): Promise<number> => {
    try {
        const data = await axios(config)
        return 200
    } catch (error) {
        if (error.response) {
            return error.response.statusCode
        }
        return 500
    }
}

const healthCheckLicense = async () => {
    const config: AxiosRequestConfig = {
        url: CONFIG.license + '/status',
        method: 'GET',
        timeout: 3600
    }
    return heathCheck(config)
}

const healthCheckAccount = async () => {
    const config: AxiosRequestConfig = {
        url: CONFIG.account + '/status',
        method: 'GET',
        timeout: 3600
    }
    return heathCheck(config)
}

export { healthCheckAccount, healthCheckLicense }