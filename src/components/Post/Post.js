import './Post.css';



const Post = ({ data }) => {

	return (
		<div style={{
			textAlign: 'center',
			width: 100,
			height: 200,
			border: '1px solid black',

		}}>
			<h2>{data.id}</h2>
			<h4>{data.title}</h4>
		</div>
	)
}
export default Post