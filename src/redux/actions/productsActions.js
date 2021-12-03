import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	EDIT_PRODUCT,
	GET_PRODUCTS,
} from '../../constants/productsTypes';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const creatorAddProduct = (product) => {
	product.id = uuidv4();

	return {
		type: ADD_PRODUCT,
		payload: product,
	};
};
export const creatorRemoveProduct = (productId) => {
	return {
		type: REMOVE_PRODUCT,
		payload: productId,
	};
};

export const creatorEditProduct = (product) => {
	return {
		type: EDIT_PRODUCT,
		payload: product,
	};
};

export const getProducts = (products) => {
	return {
		type: GET_PRODUCTS,
		payload: products,
	};
};

export const deleteAsyncCreator = (productId) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(
				`https://parcial-mena.herokuapp.com/api/productos/${productId}`
			);
			console.log(response);
			if (response.status === 202) {
				const action = creatorRemoveProduct(productId);
				dispatch(action);
			}
		} catch (error) {}
	};
};
export const addAsyncCreator = (product) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				'https://parcial-mena.herokuapp.com/api/productos',
				product
			);
			console.log(response);
			if (response.status === 201) {
				const action = creatorAddProduct(response.data.dato);
				dispatch(action);
			}
		} catch (error) {}
	};
};

export const editAsyncCreator = (product) => {
	console.log(product)
	return async (dispatch) => {
		try {
			const response = await axios.put(
				`https://parcial-mena.herokuapp.com/api/productos/${product.id}`,
				product
			);
			console.log(response);
			if (response.status === 200) {
				const action = creatorEditProduct(response.data.producto);
				dispatch(action);
			}
		} catch (error) {}
	};
};
export const getProductsAsyncCreator = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				'https://parcial-mena.herokuapp.com/api/productos'
			);

			if (response.status === 200) {
				
				let data = [];
				if(response.data) data = response.data;
				
				const action = getProducts(data);
				dispatch(action);
			}
		} catch (error) {}
	};
};
