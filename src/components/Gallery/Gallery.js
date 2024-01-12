import './Gallery.css'


const Gallery = ({ photo, setActivePhoto }) => {
	return (
		<div className={'gallery'}>
			{
				photo.map((value, index) => <div onClick={setActivePhoto(value.photo)} key={index} className={'gallery-items'}>
					<img src={value.photo} alt="" />
					<h3>{value.username}</h3>
				</div>)
			}

		</div>
	)
}
export default Gallery