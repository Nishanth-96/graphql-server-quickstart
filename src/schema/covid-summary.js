export default `
    type GlobalCovidSummary {
        globalSummary: Summary
        countrySummary: [CountrySummary!]!
    }

    type CountrySummary {
        name: String!
        code: String
        lastUpdated: DateTime!
        summary: Summary!
    },

    type Summary {
        newConfirmed: Int!
        totalConfirmed: Int!
        newDeaths: Int!
        totalDeaths: Int!
        newRecovered: Int!
        totalRecovered: Int!
    }
`