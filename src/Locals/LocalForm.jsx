import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsyncCreator, editAsyncCreator } from '../redux/actions/localsActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export const LocalForm = (props) => {
	const dispatch = useDispatch();
	const { type, local } = props;
	const [ubicacion_local, setLocation] = useState(local ? local.ubicacion_local : '');
	const [administrador_local, setManager] = useState(local ? local.administrador_local : '');
	const [ciudad_local, setCity] = useState(local ? local.ciudad_local : '');
    const [telefono_local, setPhone] = useState(local ? local.telefono_local : '');

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (type === 'add') {
			const local = { ubicacion_local, administrador_local, ciudad_local, telefono_local};
			const action = addAsyncCreator(local);
			dispatch(action);
		}
		if (type === 'edit') {
			const payloadLocal = {
				id: local._id,
				ubicacion_local,
				administrador_local,
				ciudad_local,
                telefono_local,
			};
			const action = editAsyncCreator(payloadLocal);
			dispatch(action);
		}
		setLocation('');
		setManager('');
		setCity('');
        setPhone('');
	};

	useEffect(() => {
		setLocation(local ? local.ubicacion_local : '');
		setManager(local ? local.administrador_local : '');
		setCity(local ? local.ciudad_local : '');
        setPhone(local ? local.telefono_local : '');
	}, [local]);

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="btn btn-info ms-2">
				Launch modal
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Local modal</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit} className="mt-3">
						<input
							type="text"
							name="ubicacion_local"
							placeholder="Ubicacion"
							className="form-control mb-3"
							onChange={(e) => setLocation(e.target.value)}
							value={ubicacion_local}
						/>

						<input
							type="text"
							name="administrador_local"
							placeholder="Encargado"
							className="form-control mb-3"
							onChange={(e) => setManager(e.target.value)}
							value={administrador_local}
						/>
						<input
							type="text"
							name="ciudad_local"
							placeholder="Ciudad"
							className="form-control mb-3"
							onChange={(e) => setCity(e.target.value)}
							value={ciudad_local}
						/>
                        <input
							type="number"
							name="telefono_local"
							placeholder="Telefono"
							className="form-control mb-3"
							onChange={(e) => setPhone(e.target.value)}
							value={telefono_local}
						/>
						<button className="btn btn-success" type="submit">
							Confirm
						</button>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button className="btn btn-danger" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
