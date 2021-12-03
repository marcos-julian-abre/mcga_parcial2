import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsyncCreator, editAsyncCreator } from '../redux/actions/productsActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export const ProductForm = (props) => {
	const dispatch = useDispatch();
	const { type, product } = props;
	const [nombre_producto, setName] = useState(product ? product.nombre_producto : '');
	const [stock_kg, setStock] = useState(product ? product.stock_kg : '');
	const [tipo_producto, setTipo] = useState(product ? product.tipo_producto : '');

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (type === 'add') {
			const product = { nombre_producto, stock_kg, tipo_producto };
			const action = addAsyncCreator(product);
			dispatch(action);
		}
		if (type === 'edit') {
			const payloadProduct = {
				id: product._id,
				nombre_producto,
				stock_kg,
				tipo_producto,
			};
			const action = editAsyncCreator(payloadProduct);
			dispatch(action);
		}
		setName('');
		setStock('');
		setTipo('');
	};

	useEffect(() => {
		setName(product ? product.nombre_producto : '');
		setStock(product ? product.stock_kg : '');
		setTipo(product ? product.tipo_producto : '');
	}, [product]);

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="btn btn-info ms-2">
				Launch modal
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Product modal</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit} className="mt-3">
						<input
							type="text"
							name="nombre_producto"
							placeholder="Nombre producto"
							className="form-control mb-3"
							onChange={(e) => setName(e.target.value)}
							value={nombre_producto}
						/>

						<input
							type="number"
							name="stock_kg"
							placeholder="Stock"
							className="form-control mb-3"
							onChange={(e) => setStock(e.target.value)}
							value={stock_kg}
						/>
						<input
							type="text"
							name="tipo_producto"
							placeholder="Tipo de producto"
							className="form-control mb-3"
							onChange={(e) => setTipo(e.target.value)}
							value={tipo_producto}
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
