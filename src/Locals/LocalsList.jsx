import React from 'react';
import { LocalItem } from './LocalItem';

export const LocalsList = (props) => {
  const { localList, onDelete, onEdit } = props;
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Ciudad</th>
            <th>Ubicacion</th>
            <th>Administrador</th>
            <th>Telefono</th>
            <th>Options</th>
          </tr>
        </thead>
        {localList.map((local) => (
          <LocalItem
            key={local.id}
            localToShow={local}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </table>
    </div>
  );
};
