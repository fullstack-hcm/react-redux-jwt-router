import React, { Component } from 'react';
import { formatCurrentcy } from '../helpers/formatCurrentcy';
import { URI_FETCH } from '../constants';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    _handleRemove = e => {
        e.preventDefault();
        const { product: { _id: productID }, _handleRemoveItem } = this.props;
        _handleRemoveItem(productID);
    }

    _handleUpdate = e => {
        const { product: { _id: productID }, _handleGetInfoPrepareUpdate } = this.props;
        _handleGetInfoPrepareUpdate(productID)         
    }

    render() {
        const { product, index, requestingRemove, requestingGetInfo } = this.props;
        console.log({ requestingGetInfo })
        return (    
        <> 
                <tr key={`${product._id}`}>
                    <th scope="row">{index + 1}</th>
                    <td>
                        <strong>{product.title}</strong>
                    </td>
                    <td>{product.description}</td>
                    <td>{formatCurrentcy(product.price)}</td>
                    <td>
                        <img src={product.image ? `${URI_FETCH}/upload/${product.image}` : 'https://via.placeholder.com/100'} alt="" style={{borderRadius: 50}} width={100} height={100}/>  
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" onClick={e => this._handleRemove(e)}>{requestingRemove ? '...' : 'Xoá'}</button>
                        <button type="button" class="btn btn-info" onClick={e => this._handleUpdate(e)} style={{ marginLeft: 10 }}>{requestingGetInfo ? '...': 'Thông Tin'}</button>
                    </td>
                </tr>
        </>
    );
  }
}

export default ProductDetail;
