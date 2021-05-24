import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render an ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem expenses={expenses[0]}/>)
    //Assertion
    expect(wrapper).toMatchSnapshot();
})