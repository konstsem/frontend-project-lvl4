import { createAction } from '@reduxjs/toolkit';

export const addChannel = createAction('CHANNEL_ADD');
export const addMessage = createAction('MESSAGE_ADD');
export const handleCurrentChannel = createAction('CURRENT_CHANNEL_HANDLE');
