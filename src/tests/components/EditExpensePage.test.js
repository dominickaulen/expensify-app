import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'
import { addExpense } from '../../actions/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';


let editExpense, wrapper, history, removeExpense;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push : jest.fn() }
    wrapper = shallow(
    <EditExpensePage 
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expense={expenses[2]}
    />)
})

test('Should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
})


test('should handle EditExpensePage', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
});



test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({
        id : expenses[2].id
    })
});


