import moment from 'moment'

//default filter data 
const filters = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}

//filters with populated data
const altfilters = {
    text : 'bills',
    sortBy : 'amount',
    startDate : moment(0),
    endDate : moment(0).add(3,'days')
}

export { filters, altfilters };