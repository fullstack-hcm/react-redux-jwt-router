import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListProducts } from '../actions/products';
import { URI_FETCH } from '../constants';
import Product from './Product';

class Products extends Component {
  componentDidMount = async () => {
    getListProducts();
  }

  render() {
    const { products: { listProducts } } = this.props;
    console.log({ listProducts })
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
            </tr>
          </thead>
          <tbody>
            {listProducts && listProducts.length > 0 && listProducts.map((product, index) => (
                <tr key={`${product._id}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <img src={product.image ? `${URI_FETCH}/upload/${product.image}` : 'https://via.placeholder.com/100'} alt="" style={{borderRadius: 50}} width={100} height={100}/>  
                  </td>
                </tr>
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
