import { createAction } from '@reduxjs/toolkit';

export const addChannel = createAction('CHANNEL_ADD');
export const removeChannel = createAction('CHANNEL_REMOVE');
export const renameChannel = createAction('CHANNEL_RENAME');
export const addMessage = createAction('MESSAGE_ADD');
export const setCurrentChannel = createAction('CURRENT_CHANNEL_SET');
export const setModal = createAction('MODAL_SET');
export const hideModal = createAction('MODAL_HIDE');
