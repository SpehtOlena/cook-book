import './UserCard.css'

const UserCard = ({ value }) => {
	const { username, phone, photo, isLog, gender } = value
	return (
		<div className={'user-card'}>
			<h1 className={gender === 'male' ? 'male' : 'female'}>{username}</h1>
			<img src={photo} alt={username} />
			<h4>{phone}</h4>
			<h5>{isLog}</h5>
		</div>
	)
}
export default UserCard