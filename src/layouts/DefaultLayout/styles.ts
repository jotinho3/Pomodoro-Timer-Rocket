import styled from 'styled-components';

export const LayoutContainerStyled = styled.div`
    max-width: 74rem;
    height: 90dvh;
    margin: 1rem auto;
    padding: 1.8rem;



    background: ${props => props.theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    @media (max-width: 878px) {
        max-width: 100vw;
        margin: 0;
        border-radius: 0;
        
        height: auto    ;
    }

     
`