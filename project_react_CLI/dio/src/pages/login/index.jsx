import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"


import {Column, Container, CreateText, ForgotText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from "./styles";

const Login = () => {
    return (
        <>
            <Header/>
            <Container>
                <Column>
                    <Title> 
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.  
                    </Title> 
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
                        <form action="">
                            <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Link to="/feed">
                                <Button title="Entrar" variant="secondary" type="button"></Button>
                            </Link>  
                        </form>
                        <Row>
                            <ForgotText>Esqueci minha senha</ForgotText>
                            <CreateText>Criar Conta</CreateText>

                            
                        </Row>

                        
                    </Wrapper>
                </Column>
            </Container>
            
        </>
    )
}
export { Login } 