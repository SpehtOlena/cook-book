import './CustomMenu.css'

const CustomMenu = ({ menuItems, setActivePage }) => {

	return (
		<div id="fade-menu" className={'header-menu'}>
			{
				menuItems.map((value, index) => (
					<div onClick={() => setActivePage(value.element)} value={value} key={index}>{value.label}</div>
				))
			}
		</div>
	)
}
export default CustomMenu