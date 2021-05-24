import { setTextFilter,setStartDate,setEndDate,sortByDate, sortByAmount } from '../../actions/filters' 
import moment from 'moment';

test('should generate set start date object', () => {
    const action = setStartDate(moment(0));
    //Assertion
    expect(action).toEqual({
        type : "SET_START_DATE",
        startDate : moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(1))
    //Assertion
    expect(action).toEqual({
        type : 'SET_END_DATE',
        endDate : moment(1)
    })
})

test('should generate set text filter action object with default values', () => {
    const defaultSetTextFilter = {
        type : 'SET_TEXT_FILTER',
        text : ''
    }
    const action = setTextFilter();
    //Assertion
    expect(action).toEqual({
       ...defaultSetTextFilter
    })
})

test('should generate set text filter action object with provided values', () => {
    const setTextFilterData = {
        type : 'SET_TEXT_FILTER',
        text : 'rent'
    }
    const action = setTextFilter('rent')
    //Assertion
    expect(action).toEqual({
        ...setTextFilterData
    })
})

test('should generate a sort by amount action object', () => {
    const action = sortByAmount();
    //Assertion
    expect(action).toEqual({
        type : 'SORT_BY_AMOUNT'
    })
})

test('should generate a sort by date action object',() => {
    const action = sortByDate();
    //Assertion
    expect(action).toEqual({
        type : 'SORT_BY_DATE'
    })
})