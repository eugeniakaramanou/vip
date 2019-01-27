import React from 'react';
import App from '../App';
import ProductViewContainer from '../components/product-view-container';
import { shallow } from 'enzyme';

describe('App component', () => {
    it('renders ProductViewContainer without crashing', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(ProductViewContainer)).to.have.length(1);
    });
});

