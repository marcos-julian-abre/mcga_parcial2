import React from 'react';
import { LocalForm } from './LocalForm';

export const EditLocal = (prop) => {
	const { localToEdit } = prop;
	return <LocalForm type="edit" local={localToEdit} />;
};
