import styled, {css} from 'styled-components'

export const HomeContainerStyled = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
    
`



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
`

export const CountdownContainerStyled = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${props => props.theme['gray-100']};

    display: flex;
    gap: 1rem;

    span {
        background: ${props => props.theme['gray-700']};
        padding: 2rem 1rem;
        border-radius: 8px;
    }

`

export const Separator = styled.div `
    padding: 2rem 0;
    color: ${props => props.theme['green-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

export const ButtonCountdownStyled = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    background: ${props => props.theme['green-500']};
    color: ${props => props.theme['gray-100']};

    transition: all 0.5s ease;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${props => props.theme['green-700']};
        
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