import './App.css';
import AdminPage from "./components/Pages/AdminPage/AdminPage.js";
import UserPage from './components/Pages/UserPage/UserPage.js';
import GuestPage from './components/Pages/GuestPage/GuestPage.js'
import { useState } from 'react';

const App = () => {
	const [userType, setUserType] = useState('');
	function renderUserType() {
		switch (userType) {
			case "admin": {
				return <AdminPage />
			}
			case "user": {
				return <UserPage />
			}
			case "guest": {
				return <GuestPage />
			}
			default: {
				return <div>Тип не визначений</div>
			}
		}

	}
	return (
		<div className={'App'}>
			<div className={'button-container'}>
				<button className={userType === 'admin' ? 'active-button' : ''} onClick={() => { setUserType('admin') }}>Admin</button>
				<button className={userType === 'user' ? 'active-button' : ''} onClick={() => { setUserType('user') }}>User</button>
				<button className={userType === 'guest' ? 'active-button' : ''} onClick={() => { setUserType('guest') }}>Guest</button>
			</div>
			{
				renderUserType()
			}

		</div>
	)
}
export default App