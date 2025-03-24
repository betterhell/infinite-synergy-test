import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';
import UserCard from './UserCard';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { RootState, AppDispatch } from '../redux/store';

const UserList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users.users);

    const Row: React.FC<ListChildComponentProps> = ({ index, style }) => {
        const user = users[index];
        return (
            <div style={style}>
                <UserCard
                    user={user}
                    onClick={() => dispatch(setSelectedUser(user.id))}
                />
            </div>
        );
    };

    return (
        <div className="user-list">
            <FixedSizeList
                height={window.innerHeight}
                width="100%"
                itemCount={users.length}
                itemSize={100}
            >
                {Row}
            </FixedSizeList>
        </div>
    );
};

export default UserList;