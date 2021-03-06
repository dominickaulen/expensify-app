import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm'
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render ExpenseForm with example data', () => {
    const wrapper = shallow(<ExpenseForm expenses={expenses[1]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target : { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

 
test('should set note on textarea change', () => {
    const note = 'New note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target : { value : note }
    })
    expect(wrapper.state('note')).toBe(note)
})      


test('should set amount if valid input',() => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    })
   expect(wrapper.state('amount')).toBe(value)
})


test('should not set amount if invalid input', () => {
    const value = '12.222'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    })
    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[0].description,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createdAt: expenses[0].createdAt
    });
  });

  test('should set new date on date change', () => {
      const now = moment()
      const wrapper = shallow(<ExpenseForm />);
      //How do I trigger props from a child component?
      //We need to receive the prop onDateChange
      wrapper.find('SingleDatePicker').prop('onDateChange')(now);
      //making the assertion
      expect(wrapper.state('createdAt')).toEqual(now)
  })

 

  //should set calendar focus on change 
  test('should set calendar focus on change', () => {
    const focused =  true ;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toBe(focused)
})