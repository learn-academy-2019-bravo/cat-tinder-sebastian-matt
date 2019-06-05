import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './signUp';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders a form' , () => {
    const signup = mount(<SignUp />)
    expect(signup.find('form')).toBeTruthy();
});

it('form should contain an Age field' , () => {
    const signup = mount(<SignUp />)
    expect(signup.find('#capture-form').text()).toMatch(/Age/);
    
});
it('form should contain an Name field' , () => {
    const signup = mount(<SignUp />)
    expect(signup.find('#capture-form').text()).toMatch(/Name/);
    
});
it('form should contain an Bio field' , () => {
    const signup = mount(<SignUp />)
    expect(signup.find('#capture-form').text()).toMatch(/Bio/);
    
});