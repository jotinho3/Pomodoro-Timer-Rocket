import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainerStyled } from './styles'

export function DefaultLayout() {
    return (
        <LayoutContainerStyled>
            <Header />

            <Outlet />
            
            
        </LayoutContainerStyled>
    )
}