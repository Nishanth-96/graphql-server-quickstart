# graphql-server-quickstart

Sample Apollo graphql server

## Introduction

Graphql is a query language through which data fetching is made very simple for the client. In comparison with the traditional REST API calls, graphql resolves the round trip problem for the client. What's more, you can request only the fields you need. In short, it solves the underfetching/overfetching problems.

The project demonstrates the power of graphql by using Covid data. 

## Setup

Clone the project. Install the dependencies and start the application.

```
npm install
npm start
```

Navigate to http://localhost:80/graphql and execute the following query

```
{
  globalCovidSummary{
    globalSummary{
      newConfirmed
      totalConfirmed
      newDeaths
      totalDeaths
      newConfirmed
      totalRecovered
    }
    countrySummary {
      name
      code
      lastUpdated
      summary{
        newConfirmed
        totalConfirmed
        newDeaths
        totalDeaths
        newRecovered
        totalRecovered
      }
    }
  }
}
```

## Credits

Covid API - https://covid-19-apis.postman.com/