import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './ProductItem.scss';

class ProductItem extends Component {
    state = {
        quantity: 1
    };

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleQuantityDecrease = this.handleQuantityDecrease.bind(this);
        this.handleQuantityIncrease = this.handleQuantityIncrease.bind(this);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    handleInputChange(e) {
        if ((e != null) && (e.target != null)) {
            const { value } = e.target;
            this.setState({ quantity: value });
        }
    }

    handleInputBlur() {
        this.validateQuantity();
    }

    handleQuantityDecrease() {
        const { quantity } = this.state;
        const { minQuantity } = this.props;

        if ((isNaN(quantity)) || (quantity === '')) {
            this.setState({ quantity: minQuantity });
        } else if (quantity > minQuantity) {
            this.setState({ quantity: quantity - 1 });
        }
    }

    handleQuantityIncrease() {
        const { quantity } = this.state;
        const { maxQuantity } = this.props;

        if ((isNaN(quantity)) || (quantity === '')) {
            this.setState({ quantity: maxQuantity });
        } else if (quantity < maxQuantity) {
            this.setState({ quantity: quantity + 1 });
        }
    }

    handleAddButtonClick() {
        const { quantity } = this.state;
        const { onAddCart, productItem } = this.props;
        const { id, title, imageURL, price } = productItem;

        if (onAddCart != null) {
            onAddCart({
                id,
                title,
                imageURL,
                price,
                quantity
            });
        }
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
        const { className, minQuantity, maxQuantity, productItem } = this.props;
        const { title, imageURL, price } = productItem;

        return (
            <div className={ className }>
                <div className="product-details container">
                    <div className="row">
                        <span className="product-title">{ title }</span>
                    </div>
                    <div className="row">
                        <div className="product-image">
                            <img 
                                src={ imageURL }
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="row">
                        <span className="product-price">{ price }</span>
                    </div>
                </div>

                <div className="product-actions container">
                    <div className="row">
                        <div className="col-6">
                            <span className="quantity-label">Quantity</span>
                        </div>
                        <div className="col-6">
                            <div className="quantity-selector">
                                <div className="action-icon less-quantity"
                                    onClick={ this.handleQuantityDecrease }
                                >
                                    <FontAwesomeIcon 
                                        icon={ faMinus }
                                    />
                                </div>
                                <input className="quantity-input"
                                    type="number"
                                    value={ this.state.quantity }
                                    maxLength={2}
                                    min={ minQuantity }
                                    max={ maxQuantity }
                                    onChange={ this.handleInputChange }
                                    onBlur={ this.handleInputBlur }
                                />
                                <div className="action-icon more-quantity"
                                    onClick={ this.handleQuantityIncrease }
                                >
                                    <FontAwesomeIcon 
                                        icon={ faPlus }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row add-button-wrapper">
                        <button className="add-button"
                            onClick={ this.handleAddButtonClick }
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

ProductItem.propTypes = {
    productItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    }).isRequired,
    onAddCart: PropTypes.func,
    className: PropTypes.string,
    minQuantity: PropTypes.number,
    maxQuantity: PropTypes.number
};
  
ProductItem.defaultProps = {
    className:'product-item',
    minQuantity: 1,
    maxQuantity: 10
};
  

export default ProductItem;