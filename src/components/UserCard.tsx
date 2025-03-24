import React from "react";
import { User } from '../utils/dataGenerator';

interface UserCardProps {
    user: User;
    onClick: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => (
    <div
        onClick={onClick}
        className="user-card"
    >
        <div>{`${user.name} ${user.surname}`}</div>
        <div>{`Возраст: ${user.age}`}</div>
        <div>{user.email}</div>
    </div>
);

export default UserCard;