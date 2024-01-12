import './Menu.css'

const Menu = ({ items, setActivePage }) => {
	return (
		<div className={'menu'}>
			{items.map((value, index) => <div onClick={() => { setActivePage(value.element) }} value={value} key={index}>{value.label}</div>)}
		</div>
	)
}
export default Menu