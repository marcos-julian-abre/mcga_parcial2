import React, { useState, useEffect } from 'react';
import { locals as initalLocals } from '../mocks/locals.json';
import { Header } from './Header';
import { LocalsList } from './LocalsList';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalsAsyncCreator } from '../redux/actions/localsActions';

function Local() {
	const [showForm, setShowForm] = useState({ show: false, mode: 'Add' });
	const [locals, setlocals] = useState(initalLocals);
	const [localToEdit, setLocalToEdit] = useState(undefined);
	const dispatch = useDispatch();
	const { localSelected, list } = useSelector((state) => state.locals);

	useEffect(() => {
		dispatch(getLocalsAsyncCreator());
		return () => {};
	}, );

	useEffect(() => {
		if (localSelected) {
			setShowForm({ show: true, mode: 'Edit' });
		}
	}, [localSelected]);

	const handleEditClick = (local) => {
		setLocalToEdit(local);
		setShowForm({ show: true, mode: 'Edit' });
	};

	const handleAddLocal = (local) => {
		local.id = uuidv4();
		setlocals([...locals, local]);
	};

	const handleDeleteLocal = (id) => {
		const newLocals = locals.filter((local) => local.id !== id);
		setlocals(newLocals);
	};

	const handleEditLocal = (local) => {
		const newLocals = locals.map((x) => (x.id === local.id ? local : x));
		setlocals(newLocals);
	};

	return (
		<div className="m-3">
			<Header
				showLocalForm={showForm}
				setShowLocalForm={setShowForm}
				onAddLocal={handleAddLocal}
				onEditLocal={handleEditLocal}
				localToEdit={localToEdit}
			/>
			<LocalsList
				localList={list}
				onDelete={handleDeleteLocal}
				onEdit={handleEditClick}
			/>
		</div>
	);
}

export default Local;
