import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface ISession {
    name: string,
    hasSession: boolean
}

const initialState: ISession = JSON.parse(typeof window !== 'undefined' && typeof window.localStorage !== 'undefined' && window.localStorage.getItem('session') || JSON.stringify({ name: '', hasSession: false }));

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        update(state, action: PayloadAction<ISession>) {
            window.localStorage.setItem('session', JSON.stringify(action.payload));
            return action.payload;
        }
    }
});

export const { update } = sessionSlice.actions;
export default sessionSlice.reducer;
