import React from 'react';
import ProductView, { getImageUrl } from '../components/product-view';
import Lightbox from '../components/lightbox';
import { shallow } from 'enzyme';

describe('ProductView component', () => {
    const images = [{
        uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$'
    }, {
        uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-L/$'
    }];
    const lightboxCallbacks = {
        openLightbox: sinon.spy(),
        closeLightbox: sinon.spy()
    };

    it('renders Lightbox ', () => {
        const wrapper = shallow(<ProductView lightboxCallbacks={lightboxCallbacks} />);
        expect(wrapper.find(Lightbox)).to.have.length(1);
    });

    it('renders all html elements', () => {
        const wrapper = shallow(
            <ProductView
                images={images}
                lightboxCallbacks={lightboxCallbacks}
            />);

        expect(wrapper.find('h1')).to.have.length(1);
        expect(wrapper.find('ul')).to.have.length(1);
        expect(wrapper.find('li')).to.have.length(2);
    });

    it('getImageUrl returns correct url', () => {
        const imageUrl = getImageUrl(images[0].uri);
        const imageUrlLarge = getImageUrl(images[0].uri, 'large');

        expect(imageUrl).to.be.equal('https://i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$_2.png');
        expect(imageUrlLarge).to.be.equal('https://i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$_27.png');

    });
});