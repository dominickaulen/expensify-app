import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import NotFoundPage from '../../components/NotFoundPage';

test('should render NotFoundPage component correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    //Assertion
    expect(toJSON(wrapper)).toMatchSnapshot();
})