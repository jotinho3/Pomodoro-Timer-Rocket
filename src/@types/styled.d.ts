import 'styled-components' 
import { defaultTheme } from  '../styles/themes/default'


type defaultThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaulTheme extends defaultThemeType {} 

}

