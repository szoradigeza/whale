import { createAction, createReducer } from '@reduxjs/toolkit';
import { documentConstants } from '../constants';

const changeInput = createAction(documentConstants.CHANGE_INPUT);
const resetState = createAction(documentConstants.RESET_STATE);

const initialState = {
   name: '...',
   regNumber: '...',
   birtPlace: '...',
   newName: '...',
   newAddress: '...',
   newTemporaryAddress: '...',
   newSchool: '...',
   bankName: '...',
   newBankCardNumber: '...',
   newHospitalityNumber: '...',
   newAccomodationNumber: '...',
   newLeisureTimeNumber: '...',
};

export const documentReducer = createReducer(initialState, (builder) => {
   builder.addCase(
      changeInput,
      (state, action) => {
         const { name, value } = action.payload;
         let modifiedPayload = {};
         modifiedPayload[name] = value;
         return { ...state, ...modifiedPayload };
      },

      builder.addCase(resetState, () => {
         return initialState;
      })
   );
});
