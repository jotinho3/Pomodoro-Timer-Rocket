import styled from 'styled-components'

export const FormContainerStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 878px) {
        font-size: 0.875rem;    
        
    }
`

const BaseInput = styled.input`
    background-color: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme['gray-500']} ;
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${props => props.theme['gray-100']};

    &:focus {
        outline: none;
        box-shadow: none;
        border-color: ${props => props.theme['green-500']};
    }
`

export const TaskInput = styled(BaseInput)`
    box-shadow: none;
    flex: 1;
   

`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
    
`