import styled from 'styled-components';

export const LayoutContainerStyled = styled.div`
    max-width: 74rem;
    height: 80dvh;
    margin: 5rem auto;
    padding: 2.5rem;

    background: ${props => props.theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;

     
`