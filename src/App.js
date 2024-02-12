import './App.css'
import useCustomAxios from './hook/useCustomAxios'

const App = () => {
	const { data, loading, error } = useCustomAxios('https://jsonplaceholder.typicode.com/posts')
	if (error) {
		console.log(error);
	}
	return (
		<div>
			{loading.toString()}
			{
				!loading && <ul>
					{
						data.map((value, index) => (
							<li key={index}>
								{value.title}
							</li>
						))
					}
				</ul>
			}
		</div>
	)
}
export default App