import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { List } from "../model/List";

type ListState = {
    lists: List[]
}

const initialState: ListState = {
    lists: []
}

const ListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addList:(state, action:PayloadAction<string>) => {
            state.lists.push({
                id: state.lists.length,
                title: action.payload
            })
        },
        deleteList:(state, action:PayloadAction<number>) => {
            const idx = action.payload
            state.lists.splice(idx, 1)
        }
    }
})

export default ListSlice.reducer
export const {addList, deleteList} = ListSlice.actions