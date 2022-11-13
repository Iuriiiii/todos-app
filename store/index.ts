import { configureStore } from "@reduxjs/toolkit";
import session from './slices/session.slice';

export interface ISelectors {
    session: string
};

export default configureStore({
    reducer: {
        session
    }
});