import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "en",
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
    reducers: {
        changeLanguage(state, action){
            console.log('state', state);
            console.log('action', action);            
            state.value = action.payload;
        }
    }
});


export const { changeLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.value;
export default languageSlice.reducer;