import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateMockData, User } from '../utils/dataGenerator';

interface UserState {
    users: User[];
    selectedUserId: number | null;
}

const initialState: UserState = {
    users: generateMockData(),
    selectedUserId: null,
};

console.log('Initial users (first 5):', initialState.users.slice(0, 5));

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSelectedUser(state, action: PayloadAction<number>) {
            state.selectedUserId = action.payload;
        },
        updateUser(state, action: PayloadAction<{ id: number; data: Partial<User> }>) {
            const { id, data } = action.payload;
            const index = state.users.findIndex((user) => user.id === id);
            if (index !== -1) {
                state.users[index] = { ...state.users[index], ...data };
            }
        },
    },
});

export const { setSelectedUser, updateUser } = userSlice.actions;
export default userSlice.reducer;