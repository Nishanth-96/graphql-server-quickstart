import GlobalCovidSummary from './schema/covid-summary'
import Base from './schema/base'

import { gql } from 'apollo-server'

const schema = gql(Base + GlobalCovidSummary)

export default schema