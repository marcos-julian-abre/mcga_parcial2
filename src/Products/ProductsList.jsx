import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductsList = (props) => {
  const { productList, onDelete, onEdit } = props;
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Tipo producto</th>
            <th>Options</th>
          </tr>
        </thead>
        {productList.map((product) => (
          <ProductItem
            key={product.id}
            productToShow={product}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </table>
    </div>
  );
};
