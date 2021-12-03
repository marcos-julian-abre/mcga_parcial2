import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteAsyncCreator } from '../redux/actions/localsActions';

export const LocalItem = (props) => {
	const dispatch = useDispatch();
	const { localToShow, onEdit } = props;

	const handleDelete = (id) => {
		const action = deleteAsyncCreator(localToShow._id);
		dispatch(action);
	};

	return (
		<tr>
			<td>{localToShow.ubicacion_local}</td>
			<td>{localToShow.administrador_local}</td>
			<td>{localToShow.ciudad_local}</td>
            <td>{localToShow.telefono_local}</td>
			<td>
				<EditIcon
					onClick={() => onEdit(localToShow)}
					style={{ cursor: 'pointer', color: 'red' }}
				/>
				<DeleteIcon onClick={handleDelete} style={{ cursor: 'pointer' }} />
			</td>
		</tr>
	);
};
