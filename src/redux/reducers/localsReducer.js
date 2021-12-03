import {
	ADD_LOCAL,
	REMOVE_LOCAL,
	EDIT_LOCAL,
	GET_LOCALS,
} from '../../constants/localsTypes';

const initialState = {
	list: [],
	isLoading: false,
	error: '',
};

export const localsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_LOCAL:
			return {
				...state,
				list: [action.payload, ...state.list],
			};
		case REMOVE_LOCAL:
			return {
				...state,
				list: state.list.filter((local) => local._id !== action.payload),
			};
		case EDIT_LOCAL:
			return {
				...state,
				list: state.list.map((local) =>
					local.id === action.payload._id ? action.payload : local
				),
			};
		case GET_LOCALS:
			return {
				...state,
				list: action.payload,
			};
		default:
			return state;
	}
};
