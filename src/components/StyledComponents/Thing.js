import styled from 'styled-components';

const Thing = styled.div.attrs((/*props*/) => ({ tabIndex: 0 }))`
color: blue;
width: 100%;


&:hover {
	color: red;
	cursor: pointer;
}

& ~ & {
	background: tomato;
}

& + & {
	background: lime;
}

&.something {
	background: orange;
}

.something-else & {
	border: 1px solid;
}
`

export default Thing

