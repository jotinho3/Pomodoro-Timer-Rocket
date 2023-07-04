import styled, {css} from 'styled-components'

export const HomeContainerStyled = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
    
`

export const BaseButtonCountDownStyled = styled.button`
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

    transition: all 0.5s ease;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

`

export const StartButtonCountdownStyled = styled(BaseButtonCountDownStyled)`
   
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme['gray-100']};


    &:not(:disabled):hover {
        background: ${props => props.theme['green-700']};
        
    }
`

export const StopButtonCountdownStyled = styled(BaseButtonCountDownStyled)`
    background: ${props => props.theme['red-500']};
    color: ${props => props.theme['gray-100']};


    &:not(:disabled):hover {
        background: ${props => props.theme['red-700']};
        
    }

`

