import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts : []
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addpost : (state, action) => {
            state.posts.push(action.payload);
        },
        updatepost: (state, action) => {
            const { slug, updatedPost } = action.payload;
            
            const index = state.posts.findIndex((post) => post.$id === slug);
            if (index !== -1) {
                state.posts[index] = { ...state.posts[index], ...updatedPost };
            }
        },
        deletepost : (state , action) => {
            const {slug } = action.payload;
            state.posts = state.posts.filter(post => post.$id !== slug);
        }
     }
})

export const {addpost, updatepost , deletepost} = postSlice.actions;

export default postSlice.reducer;