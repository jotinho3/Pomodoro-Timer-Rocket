import { HeaderContainerStyled } from "./styles"
import Logo from '../../assets/Logo.svg'
import { Timer, Scroll } from "phosphor-react" 
import { NavLink, Link  } from 'react-router-dom'


export function Header() {
    return (
        <HeaderContainerStyled>
            <img src={Logo} alt="" />
            <nav>
                <NavLink to='/' title="Timer">
                    <Timer size={30} />
                </NavLink>

                <NavLink to='/history' title="Histórico">
                    <Scroll size={30} />
                </NavLink>
            </nav>
        </HeaderContainerStyled>
        
    )
}