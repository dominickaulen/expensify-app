import {createStore} from 'redux';
// Action Generators - functions that returns objects

const incrementCount = ({incrementBy = 1} = {}) => (
    {
        type : 'INCREMENT',
        incrementBy
    }
)

const decrementCount = ({decrementBy = 1} = {}) => (
    {
        type : 'DECREMENT',
        decrementBy
    }
)

//setCount
const setCount = ({setCountTo = 0} = {}) => (
    {
        type: 'SET',
        setCountTo
    }
)
//resetCount
const resetCount = () => (
    {
        type: "RESET",
    }
)

//Reducers
//1. Reducers are pure functions
//2. never change state or actions 
//what does a not pure function look like?
let a = 10
const add = (b) => (a+b)

const countReducer = (state = { count : 0 }, action) => {
    switch(action.type) {
        case "INCREMENT": 
            return {
                count : state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count : state.count - action.decrementBy
            }
        case "RESET":
            return {
                count : 0
            }
        case "SET":
            return {
                count : action.setCountTo
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

