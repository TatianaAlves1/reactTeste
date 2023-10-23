import Logo from '../logo'
import Menu from '../menu'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: aliceblue;
    text-align: center; 
`

function Header(){
    return (
      <HeaderContainer>
         <Logo/>
         <Menu/>
      </HeaderContainer>
    )
}


export default Header