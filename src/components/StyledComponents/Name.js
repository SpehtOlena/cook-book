const Name = ({ firstName, secondName, className }) => {
	return (
		<div className={className}>
			{`${firstName} ${secondName}`}
		</div>
	)
}
export default Name