const buildGlobalCovidSummary = (data) =>  {
    const globalSummary = data.Global
    const countrySummary = buildCountrySummary(data.Countries)
    if (globalSummary && Object.keys(globalSummary).length) {
        return {
            globalSummary: {
                newConfirmed: globalSummary.NewConfirmed,
                totalConfirmed: globalSummary.TotalConfirmed,
                newDeaths: globalSummary.NewDeaths,
                totalDeaths: globalSummary.TotalDeaths,
                newRecovered: globalSummary.NewRecovered,
                totalRecovered: globalSummary.TotalRecovered,
            },
            countrySummary
        }
    }
}

const buildCountrySummary = (countriesSummary) => {
    const allCountrySummary = []
    for (const countrySummary of countriesSummary) {
        allCountrySummary.push({
            name: countrySummary.Country,
            code: countrySummary.CountryCode,
            lastUpdated: countrySummary.Date,
            summary: {
                newConfirmed: countrySummary.NewConfirmed,
                totalConfirmed: countrySummary.TotalConfirmed,
                newDeaths: countrySummary.NewDeaths,
                totalDeaths: countrySummary.TotalDeaths,
                newRecovered: countrySummary.NewRecovered,
                totalRecovered: countrySummary.TotalRecovered,
            }
        })
    }
    return allCountrySummary
}

export { buildGlobalCovidSummary }