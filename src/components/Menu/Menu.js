const Menu = ({ type, menuItem }) => {
	return (
		<div>
			<a href={menuItem[0]}>{menuItem[0]}</a>
			<a href={menuItem[1]}>{menuItem[1]}</a>
			<a href={menuItem[2]}>{menuItem[2]}</a>
		</div>
	)
}
export default Menu