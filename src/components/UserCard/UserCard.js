import { Card } from 'antd';
import './UserCard.css'

const UserCard = ({ data, onClick }) => {
	const { name, username, email, phone, website } = data;
	return (
		<Card className={'user-card'}>
			<h2>{name}</h2>
			<h3>{username}</h3>
			<h4>{email}</h4>
			<h5>{phone}</h5>
		</Card>
	)
}
export default UserCard