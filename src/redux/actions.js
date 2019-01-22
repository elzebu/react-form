import * as type from './actionTypes';
import axios from 'axios';

export const updateCounter = () => {
    return {
        type: type.UPDATE_COUNTER
    }
}

export const setBrands = (brands) => {
    return {
        type: type.SET_BRANDS,
        payload: brands
    }
}

export const setTyres = (tyres) => {
    return {
        type: type.SET_TYRES,
        payload: tyres
    }
}

export const setAPIError = (error) => {
    return {
        type: type.SET_APIERROR,
        payload: error
    }
}

export const fetchBrands = () => {
    return dispatch => {
        axios.get('/api/brands')
            .then(response => {
                // const brands = response.data;
                const brands = [{
                    id: 1,
                    name: 'Michelin',
                    src: ''
                }]

                dispatch(setBrands(brands));
            })
            .catch(error => {
                dispatch(setAPIError(error))
            });
    }
}

export const editBrand = (id, brand) => {
    return (dispatch, getState) => {
        axios.put(`/api/brands/${id}`, brand)
            .then(response => {
                let brand = response.data;
                let {brands} = {...getState()};
                let indexToUpdate = brands.findIndex(t => t.id === id);
                brands.splice(indexToUpdate, 1);
                brands = [...brands, brand];
                dispatch(setTyres(brands));
            });
    }
}