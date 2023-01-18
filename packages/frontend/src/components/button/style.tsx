import styled from 'styled-components';


export interface StyledButtonProps {
    color?: string;
    backgroundColor?: string;
    size?: string;
    disabled?: boolean;
}


export const Button = styled.button<StyledButtonProps>`
    background-color: ${(props:StyledButtonProps) => props.backgroundColor || 'white'};
    color: ${(props:StyledButtonProps) => props.color || 'black'};
    font-size: ${(props:StyledButtonProps) => props.size || '1rem'};
    padding: 0.5rem;
    border: 1px solid black;
`