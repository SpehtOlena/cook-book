import './App.css';
import OneCard from './components/OneCard/OneCard.js';
import Person from './components/Person/Person';
import SupperButton from './components/StyledComponents/SupperButton.js';
import Title from './components/StyledComponents/Title.js'
import { useState } from 'react';
import Home from './Pages/Home/Home.js';
import Sale from './Pages/Sale/Sale.js';
import List from './Pages/List/List.js';
import Menu from './components/Menu/Menu.js';
import Gallery from './components/Gallery/Gallery.js';

const persons = [
	{
		"company": "O'Hara Inc",
		"username": "Ferario Green",
		"password": "ntH4DjrIYWHcUgv",
		"role": "guest",
		"phone": "(756) 115-5660",
		"cell": "(469) 966-8649",
		"photo": "https://robohash.org/C7K.png?set=set4",
	},
	{
		"company": "Towne, Reilly and Ratke",
		"username": "Candelario_Yost",
		"password": "O7JdgXdFE3ZUAYh",
		"role": "user",
		"phone": "(391) 800-1960",
		"cell": "(214) 407-5982",
		"photo": "https://robohash.org/55G.png?set=set4",
	},
	{
		"company": "Tromp and Sons",
		"username": "Paige.Hane72",
		"password": "T52bDvNJPVjqs4B",
		"role": "administrator",
		"phone": "(257) 457-6866",
		"cell": "(972) 696-0742",
		"photo": "https://robohash.org/FFF.png?set=set4",
	},
	{
		"company": "Zulauf Group",
		"username": "Shaun_Orn",
		"password": "i0q5URw5azVUaQk",
		"role": "user",
		"phone": "(017) 407-1035",
		"cell": "(214) 845-6083",
		"photo": "https://robohash.org/DDD.png?set=set4",
	},
	{
		"company": "King - Hand",
		"username": "Jon.Stamm",
		"password": "yoYQzXBW2ckxLIS",
		"role": "administrator",
		"phone": "(695) 678-1114",
		"cell": "(214) 479-4353",
		"photo": "https://robohash.org/JJJ.png?set=set4",
	},
	{
		"company": "Shanahan, Jast and Schiller",
		"username": "Vincenzo_Ward",
		"password": "RoiQ1HCpr3fmR5p",
		"role": "guest",
		"phone": "(117) 906-3132",
		"cell": "(214) 914-1162",
		"photo": "https://robohash.org/LSS.png?set=set4",
	},
	{
		"company": "Littel - Bartell",
		"username": "Ulices_Stamm",
		"password": "kntZmMyrQzkH8Gc",
		"role": "rrr",
		"phone": "(559) 988-6187",
		"cell": "(469) 573-8036",
		"photo": "https://robohash.org/DMT.png?set=set4",
	},
	{
		"company": "Shanahan, Jast and Schiller",
		"username": "Vincenzo_Ward",
		"password": "RoiQ1HCpr3fmR5p",
		"role": "guest",
		"phone": "(117) 906-3139",
		"cell": "(214) 914-1162",
		"photo": "https://robohash.org/AAA.png?set=set4"
	},
	{
		"company": "Smith and Sons",
		"username": "Emily_Jones",
		"password": "P@ssw0rd123",
		"role": "administrator",
		"phone": "(555) 123-4867",
		"cell": "(555) 987-6543",
		"photo": "https://robohash.org/BBB.png?set=set4"
	},
	{
		"company": "Johnson LLC",
		"username": "Alex_Miller",
		"password": "SecurePwd",
		"role": "user",
		"phone": "(123) 456-7690",
		"cell": "(987) 654-3210",
		"photo": "https://robohash.org/CCC.png?set=set4"
	},
	{
		"company": "Brown and Co.",
		"username": "Olivia_Davis",
		"password": "Pass123!",
		"role": "guest",
		"phone": "(789) 012-3456",
		"cell": "(012) 345-6789",
		"photo": "https://robohash.org/DDD.png?set=set4"
	},
	{
		"company": "White and Partners",
		"username": "William_Smith",
		"password": "SecretPass",
		"role": "admin",
		"phone": "(234) 567-8901",
		"cell": "(456) 789-0123",
		"photo": "https://robohash.org/EEE.png?set=set4"
	},
	{
		"company": "Taylor and Co.",
		"username": "Sophia_Martin",
		"password": "MyPwd123",
		"role": "user",
		"phone": "(789) 012-3476",
		"cell": "(345) 678-9012",
		"photo": "https://robohash.org/FFF.png?set=set4"
	},
	{
		"company": "Harris Inc.",
		"username": "Daniel_Walker",
		"password": "StrongPwd",
		"role": "guest",
		"phone": "(012) 345-6789",
		"cell": "(890) 123-4567",
		"photo": "https://robohash.org/GGG.png?set=set4"
	},
	{
		"company": "Lee and Co.",
		"username": "Mia_Jackson",
		"password": "Secure123",
		"role": "administrator",
		"phone": "(567) 890-1234",
		"cell": "(234) 567-8901",
		"photo": "https://robohash.org/HHH.png?set=set4"
	},
	{
		"company": "Clark Enterprises",
		"username": "Logan_Morris",
		"password": "Pwd12345",
		"role": "user",
		"phone": "(890) 123-4567",
		"cell": "(789) 012-3456",
		"photo": "https://robohash.org/III.png?set=set4"
	},
	{
		"company": "Perez and Sons",
		"username": "Ava_Garcia",
		"password": "MySecurePwd",
		"role": "guest",
		"phone": "(345) 678-9012",
		"cell": "(012) 345-6789",
		"photo": "https://robohash.org/JJJ.png?set=set4"
	}
]

const menuItems = [
	{
		label: 'Home',
		element: <Home />
	},
	{
		label: 'Sale',
		element: <Sale />
	},
	{
		label: 'List',
		element: <List />
	}
]


function App() {

	const [activePage, setActivePage] = useState(null);

	const [activePhoto, setActivePhoto] = useState(null);

	// Counter

	const [number, setNumber] = useState(0);

	const plus = () => {
		setNumber(number + 1)
	};

	const minus = () => {
		setNumber(number - 1)
	};



	return (
		<div className={'main'}>
			<Menu items={menuItems} setActivePage={setActivePage} />
			{activePage}
			<Gallery photo={persons} setActivePhoto={setActivePhoto} activePhoto={activePhoto} />
			<img></img>
			<div>
				<div className={'counter'}>
					<h2>Lesson 7</h2>
					<h3>Counter</h3>
					<OneCard />
					<div style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
						<SupperButton onClick={minus}>-</SupperButton>
						<Title>{number}</Title>
						<SupperButton onClick={plus}>+</SupperButton>
					</div>
					<SupperButton onClick={() => {
						console.log(number);
					}}>Show number</SupperButton>
				</div>


				<br />
				<br />
				<hr />
				<hr />

				<hr />
				<br />
				<br />
				<div className="App">
					{

						persons.map(value => <Person key={value.phone} obj={value} />)
					}


				</div>
			</div>
		</div>
	);
}

export default App;
