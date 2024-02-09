import { useState } from 'react';
import axios from 'axios';
import './App.css'
import { useEffect } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import { Row, } from 'antd';
import CustomerMenu from './components/CustomerMenu/CustomerMenu';


const App = () => {
	const [data, setData] = useState([]);
	const [activePage, setActivePage] = useState(<UserForm />);
	useEffect(() => {
		axios.get('http://localhost:3000/users')
			.then(res => { setData(res.data) })
	}, [])
	const menuItems = [
		{
			label: 'Form',
			element: <UserForm globalData={data} setData={setData} setActivePage={setActivePage} />
		},
		{
			label: 'List',
			element: <UserList globalData={data} setData={setData} setActivePage={setActivePage} />
		},]
	return (
		<div>
			<Row>
				<CustomerMenu items={menuItems} setActivePage={setActivePage} activePage={activePage} />
			</Row>
			{activePage}
		</div>
	)
}
export default App