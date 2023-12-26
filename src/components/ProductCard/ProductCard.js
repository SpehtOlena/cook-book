import "../ProductCard/ProductCard.css"

const ProductCard = ({ name, age }) => {
	return (
		<div className={'productCard'}>
			<h2>{name}</h2>
			<h3>{age}</h3>

		</div>
	)
}
export default ProductCard