import React from 'react';
import Lightbox from '../components/lightbox';
import { shallow } from 'enzyme';

describe('Lightbox component', () => {
    it('renders all needed html elements', () => {
        const wrapper = shallow(<Lightbox/>);
        expect(wrapper.find('.overlay')).to.have.length(1);
        expect(wrapper.find('.lightbox')).to.have.length(1);
    });

    it('should call onClose when x clicked', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(<Lightbox isOpen={true} onClose={onClick}/>);

        wrapper.find('.lightbox__close').at(0).simulate('click');
        expect(onClick.calledOnce).to.be.true;
    });
});