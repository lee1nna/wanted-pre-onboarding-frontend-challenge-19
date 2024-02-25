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
            console.log('action::',action)
            
            state.lists.push({
                id: state.lists.length,
                title: action.payload
            })

            console.log('state::', state.lists)
        },
        deleteList:(state, action:PayloadAction<{id:number}>) => {
            
        }
    }
})

export default ListSlice.reducer
export const {addList, deleteList} = ListSlice.actions