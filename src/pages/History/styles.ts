import { style } from '@mui/system'
import styled from 'styled-components'

export const HistoryContainer = styled.main`
    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme['gray-100']};
    }

`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th {
            background-color: ${props => props.theme['gray-600']};
            padding: 1rem;
            text-align: left;
            color: ${props => props.theme['gray-100']};
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;

            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;

            }


        }


        td {
            background-color: ${props => props.theme['gray-700']};
            border-top: 4px solid ${props => props.theme['gray-800']};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;


            &:first-child {
                width: 50%;
                padding-left: 1.5rem;

            }

            &:last-child {
                padding-right: 1.5rem;

            }

        }


    }

`

const STATUS_COLORS = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500',
} as const // limita o valor da string do objeto STATUS_CONST específicamente para os valores mencionados, sem o 'as const' os valores considerados eram de 'string', agora passam a ser exatamente os valores mencionados


interface StatusProps {
    // statusColor: 'yellow' | 'green' | 'red' estava assim, porém, eu gostaria de especificar para o statusColor que eu quero que seus valores sejam as keys do objeto STATUS_COLORS, então eu coloco: statusColor: keyof typeof STATUS_COLORS
    statusColor: keyof typeof STATUS_COLORS // 
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
    }

`