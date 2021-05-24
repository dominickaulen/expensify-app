import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

//testing removeExpense
test('should setup removeExpense action object', () => {
    const action = removeExpense({ id: '123abc' })
    //Assertion
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

//testing editExpense
test('should setup editExpense action object', () => {
    const action = editExpense('123abc', { note: 'new note value' })
    //Assertion 
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    })
})

test('should setup addExpense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last months rent'
    }
    const action = addExpense(expenseData);
    //Assertion
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id : expect.any(String)
        }
    })
})

test('should setup the addExpese action object with default value', () => {
    const expenseDefaultData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    }
    const action = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...expenseDefaultData,
            id : expect.any(String)
        }
    })

})
