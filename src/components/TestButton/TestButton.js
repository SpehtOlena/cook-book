import './TestButton.css';
import SupperButton from '../StyledComponents/SupperButton';


const TestButton = ({ showCard, setShowCard }) => {


	const handleCard = () => {
		setShowCard(!showCard)
	}
	return (
		<div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 20 }}>
			<SupperButton onClick={handleCard}>
				{showCard ? "Hide card" : "Show card"}
			</SupperButton>

		</div>

	)
}
export default TestButton