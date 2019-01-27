import React from 'react';
import ProductViewContainer from '../components/product-view-container';
import ProductView from '../components/product-view';
import { shallow, mount } from 'enzyme';

describe('ProductViewContainer component', () => {
    const images = [{
        uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$'
    }, {
        uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-L/$'
    }];
    const lightboxCallbacks = {
        openLightbox: sinon.spy(),
        closeLightbox: sinon.spy()
    };

    it('renders ProductView', () => {
        const wrapper = shallow(<ProductViewContainer/>);
        expect(wrapper.find(ProductView)).to.have.length(1);
    });

    it('passes all props to ProductView', () => {
        const wrapper = shallow(<ProductViewContainer lightboxCallbacks={lightboxCallbacks}/>);
        let wrappedProductView = wrapper.find(ProductView);

        expect(wrappedProductView.props().isOpen).to.equal(false);
        expect(wrappedProductView.props().name).to.be.equal('');
        expect(wrappedProductView.props().requestedImage).to.be.equal('');

        wrapper.setState({
            isOpen: true,
            productName: 'Car name',
            requestedImage: 'imageUrl'
        });

        wrappedProductView = wrapper.find(ProductView);
        expect(wrappedProductView.props().isOpen).to.equal(true);
        expect(wrappedProductView.props().name).to.be.equal('Car name');
        expect(wrappedProductView.props().requestedImage).to.be.equal('imageUrl');
    });

    it('componentDidMount should fetch, and put images in state if ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => ({
            status: 200,
            json: () => new Promise((resolve, reject) => {
                resolve({
                    images: images
                });
            })
        }));

        const renderedComponent = await shallow(<ProductViewContainer />);
        await renderedComponent.update();
        expect(renderedComponent.state('images').length).to.equal(2);
    });

    it('componentDidMount should fetch, and populate error if present', async() => {
        window.fetch = jest.fn().mockImplementation(() => ({
            status: 500,
        }));
        const renderedComponent = await shallow(<ProductViewContainer />);
        await renderedComponent.update();
        expect(renderedComponent.state('errorStatus')).to.be.equal('Error fetching data')
    });
});

