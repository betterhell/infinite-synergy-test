import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice';
import { RootState, AppDispatch } from '../redux/store';
import { User } from '../utils/dataGenerator';

const UserEditForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selectedUserId = useSelector((state: RootState) => state.users.selectedUserId);
    const user = useSelector((state: RootState) =>
        state.users.users.find((u) => u.id === selectedUserId)
    );

    const [formData, setFormData] = useState<User | null>(user || null);

    if (!user || !formData) {
        return (
            <div className="user-edit-form">
                <div className="user-edit-placeholder">Выберите пользователя</div>
            </div>
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        dispatch(updateUser({ id: user.id, data: formData }));
    };

    return (
        <div className="user-edit-form">
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Имя"
            />
            <input
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Фамилия"
            />
            <input
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                placeholder="Возраст"
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <button onClick={handleSave}>Сохранить</button>
        </div>
    );
};

export default UserEditForm;