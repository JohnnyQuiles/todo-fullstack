import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addTaskReducer = createSlice({
    name:'tasks',
    initialState: initialState,
    reducers:{
        addTasks: (state, action) => {
            state.push(action.payload);
            return state;
        },
    },
});

export const { addTasks } = addTaskReducer.actions;
export const reducer = addTaskReducer.reducer; 