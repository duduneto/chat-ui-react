import styled from 'styled-components'

export const Button = styled.button`
width: ${props => props.width || '100%'};
height: ${props => props.height || 'auto'};
border: none;
background-color: ${props => props.bgColor};
cursor: pointer;
`;