import { URI_FETCH } from '../constants';
import STORE from '../stores';
import Axios from 'axios';

export const getListProducts = () => {
    STORE.dispatch({
        type: 'GET_LIST_PRODUCT_REQUESTING',
        payload: null
    })
    console.log(`...requesting...`)
    Axios.get(`${URI_FETCH}/products`)
        .then(resp => {
            let respt = resp.data;
            console.log({ respt })
            STORE.dispatch({
                type: 'GET_ALL_PRODUCTS',
                payload: respt
            })
        })
        .catch(err => console.log({ err: err.message }));
}

export const addProduct = (title, description, price, image) => {
    const URI = `${URI_FETCH}/products`;
    
    const formData = new FormData();
    
    /**
     * ĐÍNH KÈM HÌNH ẢNH TRONG REQUEST
     */
    formData.append('image', image);
    /**
     * ĐÍNH KÈM DỮ LIỆU
     */
    const data = JSON.stringify({ title, description, price });
    formData.append('data', data);


    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    Axios.post(URI, formData, config)
        .then(resp => {
            let respt = resp.data;
            return STORE.dispatch({
                type: 'ADD_PRODUCT',
                payload: respt.data
            });
        })
        .catch(err => console.log({ err }));
}