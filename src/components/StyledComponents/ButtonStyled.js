import styled from 'styled-components';

const ButtonStyled = styled.button`
	background: ${props => props.primary ? "bisque" : "yellow"};
	color: ${props => props.primary ? "blue" : "red"};
	padding: 20px;
	font-size: 30px;
	justify-content: center;
`

export default ButtonStyled