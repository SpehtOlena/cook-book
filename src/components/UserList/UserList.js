import { Space } from 'antd';
import './UserList.css';
import UserCard from '../UserCard/UserCard';
import { useState } from 'react';
import UserForm from '../UserForm/UserForm';

const UserList = ({ globalData, setActivePage }) => {
	const [activeUser, setActiveUser] = useState(null);
	const [statusForm, setStatusForm] = useState(false);
	return (
		<Space wrap>
			{
				!!globalData.length && globalData.map((value, index) =>
					<UserCard
						onClick={() => {
							setActiveUser(value)
							setStatusForm(true)
							setActivePage(<UserForm />)
						}}
						data={value}
						key={index} />)
			}
		</Space>
	)
}
export default UserList