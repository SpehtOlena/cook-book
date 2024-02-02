import { useState } from 'react'
import './App.css'
import CustomForm from './components/CustomForm/CustomForm'
import CustomMenu from './components/CustomMenu/CustomMenu'
import DataForm from './components/DataForm/DataForm'
import Home from './components/Home/Home'



const App = () => {
	const [activePage, setActivePage] = useState();
	const [data, setData] = useState([]);
	const menuItems = [
		{
			label: "Home",
			element: <Home />
		},
		{
			label: "Custom Form",
			element: <CustomForm setData={setData} data={data} setActivePage={setActivePage} />
		},
		{
			label: "Data Form",
			element: <DataForm setData={setData} data={data} setActivePage={setActivePage} />
		}
	]
	return (
		<div>
			<CustomMenu menuItems={menuItems} setActivePage={setActivePage} />
			{activePage}

		</div>
	)
}
export default App