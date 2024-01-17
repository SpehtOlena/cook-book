import './UserPage.css';
import UserCard from '../../UserCard/UserCard.js';
import { useState } from 'react';


const users = [
	{
		username: "john_doe",
		phone: "(123) 456-7890",
		photo: "https://placekitten.com/200/300",
		email: "john.doe@example.com",
		isLog: true,
		gender: "male",
		isAllowed: false
	},
	{
		username: "jane_smith",
		phone: "(987) 654-3210",
		photo: "https://placekitten.com/201/301",
		email: "jane.smith@example.com",
		isLog: false,
		gender: "female",
		isAllowed: true
	},
	{
		username: "alice_johnson",
		phone: "(555) 555-5555",
		photo: "https://placekitten.com/202/302",
		email: "alice.johnson@example.com",
		isLog: true,
		gender: "female",
		isAllowed: true
	},
	{
		username: "bob_brown",
		phone: "(111) 111-1111",
		photo: "https://placekitten.com/203/303",
		email: "bob.brown@example.com",
		isLog: false,
		gender: "male",
		isAllowed: true
	},
	{
		username: "eva_garcia",
		phone: "(999) 999-9999",
		photo: "https://placekitten.com/204/304",
		email: "eva.garcia@example.com",
		isLog: true,
		gender: "female",
		isAllowed: true
	},
	{
		username: "alex_carter",
		phone: "(222) 333-4444",
		photo: "https://placekitten.com/205/306",
		email: "alex.carter@example.com",
		isLog: true,
		gender: "male",
		isAllowed: false
	},
	{
		username: "sara_miller",
		phone: "(777) 888-9999",
		photo: "https://placekitten.com/206/307",
		email: "sara.miller@example.com",
		isLog: false,
		gender: "female",
		isAllowed: true
	},
	{
		username: "tom_wilson",
		phone: "(555) 123-9876",
		photo: "https://placekitten.com/207/308",
		email: "tom.wilson@example.com",
		isLog: true,
		gender: "male",
		isAllowed: true
	},
	{
		username: "emma_hernandez",
		phone: "(444) 555-6666",
		photo: "https://placekitten.com/208/309",
		email: "emma.hernandez@example.com",
		isLog: false,
		gender: "female",
		isAllowed: true
	},
	{
		username: "michael_clark",
		phone: "(666) 777-8888",
		photo: "https://placekitten.com/209/310",
		email: "michael.clark@example.com",
		isLog: true,
		gender: "male",
		isAllowed: true
	},
	{
		username: "olivia_jackson",
		phone: "(888) 999-0000",
		photo: "https://placekitten.com/210/311",
		email: "olivia.jackson@example.com",
		isLog: false,
		gender: "female",
		isAllowed: false
	},
	{
		username: "david_moore",
		phone: "(123) 987-6543",
		photo: "https://placekitten.com/211/312",
		email: "david.moore@example.com",
		isLog: true,
		gender: "male",
		isAllowed: true
	},
	{
		username: "ava_rodriguez",
		phone: "(234) 567-8901",
		photo: "https://placekitten.com/212/313",
		email: "ava.rodriguez@example.com",
		isLog: false,
		gender: "female",
		isAllowed: false
	},
	{
		username: "noah_hall",
		phone: "(345) 678-9012",
		photo: "https://placekitten.com/213/314",
		email: "noah.hall@example.com",
		isLog: true,
		gender: "male",
		isAllowed: true
	},
	{
		username: "grace_morgan",
		phone: "(967) 654-3210",
		photo: "https://placekitten.com/214/315",
		email: "grace.morgan@example.com",
		isLog: false,
		gender: "female",
		isAllowed: false
	}
];

const UserPage = () => {
	const [filterData, setFilterData] = useState('male');
	const filteredData = users.filter((item => item.gender === filterData))
	return (
		<div className={'users-container'}>
			<div>
				<button style={{ cursor: 'pointer' }} onClick={() => { setFilterData('male') }}>male</button>
				<button style={{ cursor: 'pointer' }} onClick={() => { setFilterData('female') }}>female</button>
				{
					filteredData.map((value, index) => (
						value.isLog && value.isAllowed &&
						<UserCard value={value} key={index} />))
				}
			</div>
		</div>
	)
}
export default UserPage