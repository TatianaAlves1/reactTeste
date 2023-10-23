import styled from 'styled-components'
const itensMenu = ['Home','Portifólio','Galeria','Contato','Sobre']
const MenuContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
 `
 const ItemMenu = styled.li`      
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        padding: 0 5px;
        cursor: pointer;
        min-width: 120px;
`
function Menu(){
    return (
        <MenuContainer>
            {itensMenu.map((txt)=>(<ItemMenu className='item-menu'><p>{txt}</p></ItemMenu>))}
        </MenuContainer>
    )
}

export default Menu