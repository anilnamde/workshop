import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('<Foo />', () => {

  it('calls componentDidMount', () => {
    const wrapper = mount(<App />);
    expect(wrapper.html()).to.not.equal('');
  });

});