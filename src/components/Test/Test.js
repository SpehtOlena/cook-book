import useCustomHook from '../../hook/useCustomHook'
import './Test.css'

const Test = () => {
	const { value, handleChange } = useCustomHook('')
	return (
		<div>
			<input type='text' value={value} onChange={(e) => handleChange(e.target.value)} />
			<p>{value}</p>
		</div>
	)
}
export default Test