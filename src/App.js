import './App.css';
import Menu from './components/Menu/Menu';
import ProductCard from './components/ProductCard/ProductCard';

const arr = [
	"test1",
	"test2",
	"test3",
	"test4"
]

function App() {
	return (
		<div className="App">
			<button>Click me!</button>
			<h2>test1</h2>
			<h2>test2</h2>
			<h2>test3</h2>
			<h2>test4</h2>
			<Menu type={'vertical'} menuItem={['item1', 'item2', 'item3']} />
			<ProductCard age={"15"} name={"Taras"} />
			<ProductCard age={"18"} name={"Ivan"} />
			<ProductCard age={"25"} name={"Nazar"} />
		</div>
	);
}

export default App;
