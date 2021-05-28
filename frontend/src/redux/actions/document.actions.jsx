import { documentConstants } from '../constants';
import { createAction } from '@reduxjs/toolkit';

export const changeInput = createAction(documentConstants.CHANGE_INPUT);
export const resetInput = createAction(documentConstants.RESET_STATE);
