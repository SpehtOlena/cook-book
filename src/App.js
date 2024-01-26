import './App.css';
import { useState } from 'react';
import Modal from './components/Modal/Modal';

const App = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const handleButtonClick = () => {
		setModalOpen(!modalOpen)
	}
	return (
		<div>
			<button onClick={handleButtonClick}>Open Modal</button>
			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
				<h2>Its your modal window</h2>
				<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui numquam provident voluptate. Quam reprehenderit perspiciatis tempore illo eum cupiditate corporis possimus repellat. Dolor perspiciatis iusto fugit ratione, dolore dolores!</h5>
			</Modal>
		</div>
	)
}
export default App