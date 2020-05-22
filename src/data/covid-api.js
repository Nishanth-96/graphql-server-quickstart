import config from '../config/config'
import axios from 'axios'

export default class CovidAPI {
    constructor() {
        this.baseUrl = config.covidAPI.baseUrl
    }

    async fetch(path, headers, data) {
        const axiosConfig = {
            url: this.baseUrl + path,
            headers,
            data
        }

        let response
        try {
            console.log(`Calling ${axiosConfig.url}..`)
            const startTime = new Date().getTime()
            response = await axios(axiosConfig)
            const duration = new Date().getTime() - startTime
            console.log(`Fetched response from ${axiosConfig.url} in ${duration}ms`)
        } catch (err) {
            throw new Error(`Something went wrong during API call, ${err}`)
        }

        if (response) {
            return response.data
        } else {
            throw new Error(`Response doesn't have any data`)
        }
    }
}