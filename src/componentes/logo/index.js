import logo from '../../img/logo.jpg';
import styled from 'styled-components';

const LogoContainer = styled.div` 
    width: 10%;
    padding-top: 15px;
    background-color: aliceblue ;
    text-align: center;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
`
const ImgLogo = styled.img`
    width: 120px;
    height: 110px;
    margin: auto;
`

function Logo(){
    return (
        <LogoContainer>
          <ImgLogo src={logo} alt='imagem log site' className='logo-img'></ImgLogo>
          <h4>Meu Site</h4>
        </LogoContainer>
       
    )
}

export default Logo;