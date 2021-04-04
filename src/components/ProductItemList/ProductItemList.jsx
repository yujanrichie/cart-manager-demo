import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductItemList.scss';
import ProductItem from '../ProductItem';

class ProductItemList extends Component {
    state = {
        quantity: 1
    };

    constructor() {
        super();
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    handleAddButtonClick(productItem) {
        console.log('adding', productItem);
    }

    validateQuantity() {
        const { quantity } = this.state;
        const { minQuantity, maxQuantity } = this.props;

        if ((isNaN(quantity)) || (quantity === '') || (quantity < minQuantity)) {
            this.setState({ quantity: minQuantity });
        } else if (quantity > maxQuantity) {
            this.setState({  quantity: maxQuantity });
        }
    }
    
    render() {
        const { products } = this.props;

        return (
            <div className="product-item-list">
                { products.map(product => 
                    <ProductItem
                        className="product-item"
                        key={ product.id }
                        productItem={ product }
                        onAddCart= { (productItem) => this.handleAddButtonClick(productItem) }
                    ></ProductItem>
                ) }
            </div>
        );
    }
}

ProductItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            imageURL: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired
        })
    )
};
  
ProductItemList.defaultProps = {
    products: [],
};
  

export default ProductItemList;