import React from 'react'
import logo from "../../assets/logo-dio.png"
import { Button } from '../Button'

import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da Dio" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>                 
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>  
                    </>
                     
                ) : null}
               
            </Row>
            <Row>
            {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/100313923?s=400&u=5082ddfe4764ca0b81899f8470f2dcf74a86f7e6&v=4" />
            ) : (
                <>
                    <MenuRight href='$'>Home </MenuRight>
                    <Button title="Entrar"></Button>
                    <Button title="Cadastrar"></Button>      
                </>           
            )}
                      
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }