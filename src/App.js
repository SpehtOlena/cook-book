import './App.css';
import Button from './components/Button/Button';
import Person from './components/Person/Person';


const persons = [
	{
		"company": "O'Hara Inc",
		"username": "Ferario Green",
		"password": "ntH4DjrIYWHcUgv",
		"role": "guest",
		"phone": "(756) 115-5660",
		"cell": "(469) 966-8649",
		photo: "https://robohash.org/1"
	},
	{
		"company": "Towne, Reilly and Ratke",
		"username": "Candelario_Yost",
		"password": "O7JdgXdFE3ZUAYh",
		"role": "user",
		"phone": "(391) 800-1960",
		"cell": "(214) 407-5982",
		photo: "https://robohash.org/2"
	},
	{
		"company": "Tromp and Sons",
		"username": "Paige.Hane72",
		"password": "T52bDvNJPVjqs4B",
		"role": "administrator",
		"phone": "(257) 457-6866",
		"cell": "(972) 696-0742",
		photo: "https://robohash.org/3"
	},
	{
		"company": "Zulauf Group",
		"username": "Shaun_Orn",
		"password": "i0q5URw5azVUaQk",
		"role": "user",
		"phone": "(017) 407-1035",
		"cell": "(214) 845-6083",
		photo: "https://robohash.org/4"
	},
	{
		"company": "King - Hand",
		"username": "Jon.Stamm",
		"password": "yoYQzXBW2ckxLIS",
		"role": "administrator",
		"phone": "(695) 678-1114",
		"cell": "(214) 479-4353",
		photo: "https://robohash.org/5"
	},
	{
		"company": "Shanahan, Jast and Schiller",
		"username": "Vincenzo_Ward",
		"password": "RoiQ1HCpr3fmR5p",
		"role": "guest",
		"phone": "(117) 906-3132",
		"cell": "(214) 914-1162",
		photo: "https://robohash.org/6"
	},
	{
		"company": "Littel - Bartell",
		"username": "Ulices_Stamm",
		"password": "kntZmMyrQzkH8Gc",
		"role": "rrr",
		"phone": "(559) 988-6187",
		"cell": "(469) 573-8036",
		photo: "https://robohash.org/7"
	}
]

function App() {
	return (
		<div>
			<Button type={'primary'}>Text</Button>
			<div className="App">
				{
					persons.map(value => <Person key={value.phone} obj={value} />)
				}
			</div>
		</div>
	);
}

export default App;
