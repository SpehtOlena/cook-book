import './Button.css'

const Button = ({ children, type }) => {
	switch (type) {
		case "primary": {
			return (
				<button className={'button-primary'}>
					{children}
				</button>
			)
		}
		default: {
			return (
				<button>
					{children}
				</button>
			)
		}
	}
}
export default Button