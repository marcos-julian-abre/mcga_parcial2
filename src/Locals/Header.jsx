import React from 'react';
import { AddLocal } from './AddLocal';
import { EditLocal } from './EditLocal';

export const Header = (props) => {
  const {
    showLocalForm,
    setShowLocalForm,
    onAddLocal,
    localToEdit,
    onEditLocal
  } = props;
  return (
    <div>
      <h1>Locales</h1>
      <button
        className='btn btn-primary'
        onClick={() =>
          setShowLocalForm({ show: !showLocalForm.show, mode: 'Add' })
        }
      >
        {showLocalForm.show ? 'Cancel' : 'Add Local'}
      </button>

      {showLocalForm.show ? (
        showLocalForm.mode === 'Add' ? (
          <AddLocal onAddLocal={onAddLocal} />
        ) : (
          <EditLocal
            onEditLocal={onEditLocal}
            localToEdit={localToEdit}
          />
        )
      ) : undefined}
    </div>
  );
};
