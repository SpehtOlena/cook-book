import './Person.css'

const Person = ({ obj }) => {
	const { company, username, password, role, phone, cell, photo } = obj;
	switch (role) {
		case "administrator": {
			return (
				<div className={'person'} style={{ borderColor: "black", backgroundColor: 'rgba(1, 1, 1, 0.3)' }}>
					<img src={photo} alt={username + '_photo'} style={{ width: '100%' }} />
					<h1 style={{ color: "darkcyan" }}>ADMIN</h1>
					<h3>{username}</h3>
					<ol>
						<li>{phone}</li>
						<li>{cell}</li>
						<h4>{role}</h4>
						<p>{password}</p>
					</ol>
				</div >
			)
		}
		case "user": {
			return (
				<div className={'person'} style={{ borderColor: "red", backgroundColor: 'rgba(250, 1, 1, 0.3)' }}>
					<img src={photo} alt={username + '_photo'} style={{ width: '100%' }} />
					<h2>{username}</h2>
					<h3>{company}</h3>
					<ol>
						<li>{phone}</li>
						<li>{cell}</li>
						<h4>{role}</h4>
						<p>{password}</p>
					</ol>
				</div >
			)
		}
		case "guest": {
			return (
				<div className={'person'} style={{ borderColor: "green", backgroundColor: 'rgba(1, 150, 250, 0.3)' }}>
					<img src={photo} alt={username + '_photo'} style={{ width: '100%' }} />
					<h2>{username}</h2>
					<ol>
						<li>{phone}</li>
						<h4>{role}</h4>
					</ol>
				</div >
			)
		}
		default: {
			return (
				<div className={'person'} style={{ borderColor: "red", backgroundColor: 'black', color: 'white', paddingTop: 280 }}>
					<h1>Not Found!</h1>
				</div >
			)
		}
	}
}
export default Person


