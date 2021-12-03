import {
	ADD_LOCAL,
	REMOVE_LOCAL,
	EDIT_LOCAL,
	GET_LOCALS,
} from '../../constants/localsTypes';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const creatorAddLocal = (local) => {
	local.id = uuidv4();

	return {
		type: ADD_LOCAL,
		payload: local,
	};
};
export const creatorRemoveLocal = (localId) => {
	return {
		type: REMOVE_LOCAL,
		payload: localId,
	};
};

export const creatorEditLocal = (local) => {
	return {
		type: EDIT_LOCAL,
		payload: local,
	};
};

export const getLocals = (locals) => {
	return {
		type: GET_LOCALS,
		payload: locals,
	};
};

export const deleteAsyncCreator = (localId) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(
				`https://parcial1mgca.herokuapp.com/api/locales/${localId}`
			);
			console.log(response);
			if (response.status === 202) {
				const action = creatorRemoveLocal(localId);
				dispatch(action);
			}
		} catch (error) {}
	};
};
export const addAsyncCreator = (local) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				'https://parcial1mgca.herokuapp.com/api/locales',
				local
			);
			console.log(response);
			if (response.status === 201) {
				const action = creatorAddLocal(response.data.dato);
				dispatch(action);
			}
		} catch (error) {}
	};
};

export const editAsyncCreator = (local) => {
	console.log(local)
	return async (dispatch) => {
		try {
			const response = await axios.put(
				`https://parcial1mgca.herokuapp.com/api/locales/${local.id}`,
				local
			);
			console.log(response);
			if (response.status === 200) {
				const action = creatorEditLocal(response.data.local);
				dispatch(action);
			}
		} catch (error) {}
	};
};
export const getLocalsAsyncCreator = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				'https://parcial1mgca.herokuapp.com/api/locales'
			);

			if (response.status === 200) {
				
				let data = [];
				if(response.data) data = response.data;
				
				const action = getLocals(data);
				dispatch(action);
			}
		} catch (error) {}
	};
};
