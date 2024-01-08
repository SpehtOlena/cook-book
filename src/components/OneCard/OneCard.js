import TestButton from '../TestButton/TestButton';
import './OneCard.css';
import { useState } from 'react';

const OneCard = () => {
	const [showCard, setShowCard] = useState(true);
	if (showCard) {
		return (
			<div className={'person-one'} style={{ borderColor: "black", backgroundColor: 'rgba(1, 1, 1, 0.3)' }}>
				<img src={'https://robohash.org/FGJ.png?set=set4'} alt={'_photo'} style={{ width: '100%' }} />
				<h1 style={{ color: "darkcyan" }}>ADMIN</h1>
				<h3>Peter Pen</h3>
				<ol>
					<li>097-295-30-95</li>
					<li>flirt</li>
					<h4>user</h4>
				</ol>
				<TestButton showCard={showCard} setShowCard={setShowCard} />
			</div >
		)
	} else {
		return (
			<div><TestButton showCard={showCard} setShowCard={setShowCard} /></div>
		)
	}

}
export default OneCard