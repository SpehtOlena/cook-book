import './CustomerMenu.css'

const CustomerMenu = ({ setActivePage, items }) => {
	return (
		<div className={'menu'}>
			{
				items.map((value, index) => <li onClick={() => { setActivePage(value.element) }} items={value} key={index}>{value.label}</li>)
			}
		</div>
	)
}
export default CustomerMenu