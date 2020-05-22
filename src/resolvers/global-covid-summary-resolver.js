import { buildGlobalCovidSummary } from '../mappers/global-covid-summary-mapper'

const GlobalCovidSummary = {
    async globalCovidSummary(root, _, { dataSources : { covidAPI } }) {
        const data = await covidAPI.fetch('/summary')
        return buildGlobalCovidSummary(data)
    }
}

export default GlobalCovidSummary