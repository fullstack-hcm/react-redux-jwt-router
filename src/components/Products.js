import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListProducts, removeProduct, getInfoProduct } from '../actions/products';
import Product from './Product';
import ProductDetail from './ProductDetail';

class Products extends Component {
  componentDidMount = async () => {
    getListProducts();
  }

  _handleRemoveItem = productID => {
    removeProduct(productID)
  }

  _handleGetInfoPrepareUpdate = productID => {
    getInfoProduct(productID);
  }

  render() {
    const { products: { listProducts, requestingRemove, requestingGetInfo } } = this.props;
    return (
      <>
        <strong>Danh Sách Sản Phẩm</strong>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listProducts && listProducts.length > 0 && listProducts.map((product, index) => (
                  <ProductDetail
                  product={product}
                  index={index}
                  _handleRemoveItem={this._handleRemoveItem}
                  requestingRemove={requestingRemove}
                  requestingGetInfo={requestingGetInfo}
                  _handleGetInfoPrepareUpdate={this._handleGetInfoPrepareUpdate}
                  />
            ))} 
           
          </tbody>
        </table>

        <Product/>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { products } = state;
  return {
    products
  }
}

export default connect(mapStateToProps, null)(Products);
