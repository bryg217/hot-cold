import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
	it('Render without crashing', () => {
		shallow(<Header />);
	})

	it('Render with right class', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.hasClass('header')).toEqual(true);
	})

	it('Render with proper text', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.text()).toEqual("Hot Cold Guessing Game");
	})
})