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
