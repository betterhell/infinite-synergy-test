import React from "react";
import UserList from './components/UserList';
import UserEditForm from './components/UserEditForm.tsx';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <UserList />
            <UserEditForm />
        </div>
    );
};

export default App;