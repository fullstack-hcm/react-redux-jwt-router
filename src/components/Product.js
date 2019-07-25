import React, { Component } from 'react';
import { addProduct } from '../actions/products';

class Product extends Component {
  state = {
    title: '', description: '', price: '', image: null
  }

  _handleChangeText = e => this.setState({
    [e.target.name]: e.target.value
  });

  _handleChangeFile = e => {
    return this.setState({
      image: e.target.files[0]
    })
  }

  _handleSubmit = e => {
    e.preventDefault();

    const { title, description, price, image } = this.state;
    console.log(`...add request`)
    addProduct(title, description, price, image);
  }

  render() {
    return (
      <>
        <div className="bootstrap-iso">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                <form method="post">
                    <div className="form-group ">
                    <label className="control-label " htmlFor="name">
                        Title
                    </label>
                    <input className="form-control" name="title" type="text" 
                      onChange={e => this._handleChangeText(e)}
                    />
                    </div>
                    <div className="form-group ">
                    <label className="control-label " htmlFor="textarea">
                        Description
                    </label>
                    <textarea className="form-control" cols={40} name="description" rows={10} defaultValue={""} 
                      onChange={e => this._handleChangeText(e)}
                    />
                    </div>
                    <div className="form-group ">
                    <label className="control-label " htmlFor="number">
                        Price
                    </label>
                    <input className="form-control" name="price" type="text" 
                      onChange={e => this._handleChangeText(e)}
                    />
                    </div>
                    <div className="form-group ">
                    <label className="control-label " htmlFor="name1">
                        Image
                    </label>
                    <input className="form-control" id="name1" name="image" type="file" 
                      onChange={e => this._handleChangeFile(e)}
                    />
                    </div>
                    <div className="form-group">
                    <div>
                        <button className="btn btn-primary " name="submit" type="submit" onClick={e => this._handleSubmit(e)}>
                        @Add
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
      </>
    );
  }
}

export default Product;
